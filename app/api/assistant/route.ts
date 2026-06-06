import { NextResponse } from "next/server";
import { stones } from "@/data/stones";

export const runtime = "edge";

const GATEWAY_URL = "https://ai-gateway.vercel.sh/v1/chat/completions";
const MODEL = process.env.AI_MODEL ?? "openai/gpt-4o-mini";

type AssistantReply = {
  reply: string;
  recommendations: string[];
  draft: string;
};

function buildStoneSummary() {
  return stones
    .map(
      (s) =>
        `LOT ${s.lot} (id: ${s.id})\n  名称: ${s.titleZh}\n  类型: ${s.category}\n  场口: ${s.origin}\n  重量: ${s.weight}\n  皮壳: ${s.specs.shell}\n  色相: ${s.specs.color}\n  灯下: ${s.specs.light}\n  切议: ${s.specs.cut}\n  说明: ${s.note}\n  状态: ${s.status}`
    )
    .join("\n\n");
}

const SYSTEM_PROMPT = `你是"万璐翡翠"的看货助手，专门接待中文藏家咨询。语气克制、内行、不浮夸，像一位拍卖行图录编辑。

请根据客户描述（场口偏好、用途、预算、种水颜色要求等），从下面三块本期甄选的原石里挑出最匹配的，告诉客户为什么。如果完全没有匹配的，要诚实说明，不要强推。

【本期甄选】
${buildStoneSummary()}

【输出要求】
你必须输出严格的 JSON，不要任何前后文、不要 markdown 代码块。结构：
{
  "reply": "<给客户的中文回复，2-4 句，说明匹配理由或不匹配的原因，提醒看视频再决定>",
  "recommendations": ["<匹配的 LOT id，按推荐度排序，0-3 个>"],
  "draft": "<一段可以直接发到 WhatsApp 的中文询问草稿，第一人称'我'，简短，含场口/重量/想看的视频角度，结尾留一句'方便先发自然光和压灯视频吗'>"
}

【风格要求】
- reply 不要套话，不说"非常感谢""您好"
- 提醒看货风险（裂、棉、色带、变种），但不否定客户判断
- 永远不承诺切涨、不报具体价格（让客户私聊询价）
- recommendations 只用上面列出的 id（例如 "wl-01"），不可以编造`;

export async function POST(req: Request) {
  const apiKey = process.env.AI_GATEWAY_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI_GATEWAY_KEY 未配置，请在 Vercel 项目环境变量里加" },
      { status: 500 }
    );
  }

  let body: { query?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 });
  }

  const query = (body.query ?? "").trim();
  if (!query) {
    return NextResponse.json({ error: "请描述你想看的料子" }, { status: 400 });
  }
  if (query.length > 600) {
    return NextResponse.json({ error: "描述太长了，控制在 600 字内" }, { status: 400 });
  }

  const upstream = await fetch(GATEWAY_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: query }
      ],
      temperature: 0.4,
      max_tokens: 700,
      response_format: { type: "json_object" }
    })
  });

  if (!upstream.ok) {
    const text = await upstream.text();
    return NextResponse.json(
      { error: `AI Gateway 返回 ${upstream.status}`, detail: text.slice(0, 200) },
      { status: 502 }
    );
  }

  const data = await upstream.json();
  const content: string | undefined = data?.choices?.[0]?.message?.content;
  if (!content) {
    return NextResponse.json({ error: "AI 回复为空" }, { status: 502 });
  }

  let parsed: AssistantReply;
  try {
    parsed = JSON.parse(content);
  } catch {
    return NextResponse.json(
      { error: "AI 返回的不是合法 JSON", raw: content.slice(0, 300) },
      { status: 502 }
    );
  }

  const validIds = new Set(stones.map((s) => s.id));
  parsed.recommendations = (parsed.recommendations ?? []).filter((id) => validIds.has(id));

  return NextResponse.json(parsed);
}
