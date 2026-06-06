"use client";

import { useState } from "react";
import { MessageCircle, Copy, Check, Loader2 } from "lucide-react";
import { stones } from "@/data/stones";

type Reply = {
  reply: string;
  recommendations: string[];
  draft: string;
};

const examples = [
  "4 公斤左右、会卡场口、想做柔和挂件，预算先看货再说",
  "想要冰种带阳绿的开窗料，2 公斤上下，能不能切手镯位",
  "黑皮高冰打灯料，1–1.5 公斤，先看视频"
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/00000000000";

export function Assistant() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState<Reply | null>(null);
  const [copied, setCopied] = useState(false);

  async function ask(text?: string) {
    const q = (text ?? query).trim();
    if (!q || loading) return;
    setQuery(q);
    setError(null);
    setReply(null);
    setLoading(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "助手暂时无法回应，请直接 WhatsApp 联系");
      } else {
        setReply(data);
      }
    } catch {
      setError("网络不稳，可以直接 WhatsApp 联系我们");
    } finally {
      setLoading(false);
    }
  }

  async function copyDraft() {
    if (!reply?.draft) return;
    try {
      await navigator.clipboard.writeText(reply.draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function waLink() {
    if (!reply?.draft) return WHATSAPP_NUMBER;
    const base = WHATSAPP_NUMBER.split("?")[0];
    return `${base}?text=${encodeURIComponent(reply.draft)}`;
  }

  const recommendedStones = reply?.recommendations
    .map((id) => stones.find((s) => s.id === id))
    .filter(Boolean) as typeof stones;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="label text-center text-ink-muted">Private Consult · AI 看货助手</p>
      <div className="mx-auto mt-5 h-px w-16 bg-ink/40" />
      <h2 className="display mt-7 text-center text-[36px] leading-[1.05] text-ink sm:text-[52px] lg:text-[60px]">
        说说你想看的料子，
        <span className="block display-italic text-celadon">先帮你筛一遍。</span>
      </h2>
      <p className="display-italic mt-4 text-center text-[14px] leading-[1.6] text-ink-muted sm:text-[15px]">
        Tell us what you have in mind. We&apos;ll match it against this season&apos;s lots.
      </p>

      <div className="mt-9 border border-ink/20 bg-parchment-soft/70 p-4 sm:p-6">
        <label className="label block text-ink-muted" htmlFor="ai-query">
          想看的料子 · Your brief
        </label>
        <textarea
          className="mt-3 block w-full resize-none border-b border-ink/25 bg-transparent py-2 font-serif text-[16px] leading-[1.7] text-ink placeholder:text-ink-muted/55 focus:border-ink focus:outline-none sm:text-[17px]"
          id="ai-query"
          maxLength={600}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              ask();
            }
          }}
          placeholder="例如：会卡场口紫罗兰，4 公斤左右，想做柔和挂件"
          rows={3}
          value={query}
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              className="border border-ink/20 bg-parchment px-3 py-1.5 text-left text-[12px] leading-snug text-ink-soft transition hover:border-ink hover:text-ink"
              key={ex}
              onClick={() => ask(ex)}
              type="button"
            >
              {ex}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-[11px] tracking-wide2 uppercase text-ink-muted">
            {query.length}/600 · ⌘/Ctrl + Enter 发送
          </p>
          <button
            className="btn-ink disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !query.trim()}
            onClick={() => ask()}
            type="button"
          >
            {loading ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                问询中
              </>
            ) : (
              <>询问 · Ask</>
            )}
          </button>
        </div>
      </div>

      {error ? (
        <div className="mt-6 border border-stamp/40 bg-stamp/5 p-4 text-[14px] leading-[1.7] text-stamp">
          {error}
        </div>
      ) : null}

      {reply ? (
        <div className="mt-8 space-y-7">
          <div className="border-l-2 border-celadon pl-5">
            <p className="label text-celadon">Reply · 看货助手</p>
            <p className="serif mt-2 text-[16px] leading-[1.85] text-ink sm:text-[17px]">
              {reply.reply}
            </p>
          </div>

          {recommendedStones.length > 0 ? (
            <div>
              <p className="label text-ink-muted">Recommended lots · 推荐看货</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {recommendedStones.map((s) => (
                  <li key={s.id}>
                    <a
                      className="group flex items-baseline gap-3 border-b border-ink/15 py-3 transition hover:border-ink"
                      href={`#lot-${s.lot}`}
                    >
                      <span className="tnum display-italic text-[24px] leading-none text-celadon">
                        № {s.lot}
                      </span>
                      <span className="flex-1">
                        <span className="block display text-[16px] leading-tight text-ink">
                          {s.titleZh}
                        </span>
                        <span className="block text-[11px] tracking-wide2 uppercase text-ink-muted">
                          {s.category} · {s.weight}
                        </span>
                      </span>
                      <span className="text-[11px] tracking-wide2 uppercase text-ink-muted transition group-hover:text-ink">
                        看 →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="border border-ink/20 bg-ivory p-5">
            <div className="flex items-center justify-between">
              <p className="label text-ink-muted">Inquiry draft · WhatsApp 询问草稿</p>
              <button
                className="inline-flex items-center gap-1.5 text-[11px] tracking-wide2 uppercase text-ink-muted transition hover:text-ink"
                onClick={copyDraft}
                type="button"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "已复制" : "复制"}
              </button>
            </div>
            <p className="serif mt-3 whitespace-pre-wrap text-[15px] leading-[1.85] text-ink-soft">
              {reply.draft}
            </p>
            <a
              className="btn-ink mt-5 w-full sm:w-auto"
              href={waLink()}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" />
              发到 WhatsApp · Send
            </a>
          </div>

          <p className="display-italic text-center text-[12px] leading-[1.65] text-ink-muted">
            助手给的是初步判断，真正下手前请视频复核裂、棉、色带与压灯。<br />
            Notes are advisory. Confirm by video before any commitment.
          </p>
        </div>
      ) : null}
    </div>
  );
}
