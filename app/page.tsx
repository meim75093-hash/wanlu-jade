import Image from "next/image";
import { MessageCircle, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { StoneCard } from "@/components/StoneCard";
import { ContactButtons } from "@/components/ContactButtons";
import { Assistant } from "@/components/Assistant";
import { stones } from "@/data/stones";

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg";

export default function Home() {
  return (
    <main id="top" className="pb-28 lg:pb-0">
      <Header />

      {/* HERO — single image, single statement */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="hero-rise hero-rise-1 mb-4 flex items-center gap-3">
            <span className="rule w-10" />
            <span className="label tnum">Wanlu&nbsp;Jade · Spring 2026</span>
            <span className="rule hidden flex-1 sm:block" />
          </div>

          <h1 className="hero-rise hero-rise-2 display text-[44px] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[68px] lg:text-[96px]">
            源头翡翠
            <span className="block display-italic font-normal text-celadon">先看清楚</span>
            <span className="block">再决定一切。</span>
          </h1>

          <p className="hero-rise hero-rise-3 mt-6 max-w-xl serif text-[16px] leading-[1.8] text-ink-soft sm:text-[18px]">
            一块石头被搬到光下，慢慢看皮、看色、看水头、看裂。
            我们做的，是在你下决定之前，让每一块原石都先被看明白。
          </p>
          <p className="hero-rise hero-rise-3 mt-3 display-italic text-[14px] leading-[1.6] text-ink-muted sm:text-[15px]">
            Burmese jadeite, brought to the light. Three lots for spring.
          </p>

          <div className="hero-rise hero-rise-4 mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a className="btn-ink" href="#selection">
              本期甄选 · View Lots
            </a>
            <a className="btn-outline" href="#inquire">
              询问 · Inquire
            </a>
          </div>
        </div>

        {/* Hero plate */}
        <div className="hero-rise hero-rise-4 mt-12 sm:mt-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="frame relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                alt="翡翠原石巨幅图版"
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src={heroImage}
                unoptimized
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] tracking-label uppercase text-ink-muted">
              <span>Plate · 图版 I</span>
              <span className="tnum">No. 001 — 003 / Spring 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative mt-24 sm:mt-32 lg:mt-44">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="label text-ink-muted">On the way we work · 我们怎么做生意</p>
          <div className="mx-auto mt-5 h-px w-16 bg-ink/40" />
          <p className="pull-quote mt-8 text-[22px] leading-[1.55] text-ink sm:text-[28px] lg:text-[32px]">
            翡翠原石没有捷径。<br />
            灯下看一遍，自然光看一遍，<br />
            侧边和裂再看一遍，<br />
            <span className="text-celadon">然后才到价格。</span>
          </p>
          <p className="display-italic mt-6 text-[14px] leading-[1.6] text-ink-muted sm:text-[15px]">
            There are no shortcuts in rough jade. Daylight, backlight,<br className="hidden sm:block" />
            then the cracks — and only then the price.
          </p>
        </div>
      </section>

      {/* SELECTION */}
      <section className="mt-24 sm:mt-32 lg:mt-44" id="selection">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/85 pb-5">
            <div>
              <p className="label text-ink-muted">Catalogue I · 本期图录</p>
              <h2 className="display mt-2 text-[36px] leading-none text-ink sm:text-[52px] lg:text-[64px]">
                本期甄选
              </h2>
              <p className="display-italic mt-2 text-[15px] text-ink-muted sm:text-[18px]">
                Three lots, considered carefully.
              </p>
            </div>
            <p className="tnum text-[11px] tracking-label uppercase text-ink-muted">
              Lot 001 — 003 / Spring 2026
            </p>
          </div>

          <div className="mt-12 space-y-20 sm:space-y-28 lg:space-y-36">
            {stones.map((stone, index) => (
              <StoneCard index={index} key={stone.id} stone={stone} />
            ))}
          </div>

          <div className="mt-20 border-t border-ink/85 pt-6 text-center">
            <p className="display-italic text-[14px] leading-[1.7] text-ink-muted sm:text-[15px]">
              Catalogue closes 30 June 2026. More lots arrive each fortnight on Telegram.
            </p>
            <p className="serif mt-1 text-[14px] text-ink-soft sm:text-[15px]">
              本期到 6 月 30 日 · 每两周一批新料 · Telegram 频道先发
            </p>
          </div>
        </div>
      </section>

      {/* AI CONSULT */}
      <section className="mt-24 sm:mt-32 lg:mt-44" id="consult">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Assistant />
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="mt-24 sm:mt-32 lg:mt-44" id="provenance">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label text-ink-muted">Provenance · 来路与方法</p>
              <h2 className="display mt-3 text-[34px] leading-[1.1] text-ink sm:text-[42px] lg:text-[52px]">
                这块石头，<br />
                是这样被看到的。
              </h2>
              <p className="display-italic mt-3 text-[15px] leading-snug text-ink-muted sm:text-[17px]">
                How a stone arrives at your screen.
              </p>
            </div>

            <ol className="lg:col-span-8">
              {steps.map((step, index) => (
                <li
                  className="grid grid-cols-[auto_1fr] gap-5 border-t border-ink/15 py-7 sm:gap-8 sm:py-9"
                  key={step.zh}
                >
                  <span className="tnum display-italic text-[28px] leading-none text-celadon sm:text-[40px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[22px] leading-tight text-ink sm:text-[28px]">
                      {step.zh}
                    </h3>
                    <p className="display-italic mt-1 text-[13px] text-ink-muted sm:text-[15px]">
                      {step.en}
                    </p>
                    <p className="serif mt-3 text-[14px] leading-[1.8] text-ink-soft sm:text-[15px]">
                      {step.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONY / TRUST */}
      <section className="mt-24 sm:mt-32 lg:mt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rule-double" />
          <div className="grid gap-10 py-12 sm:grid-cols-3 sm:gap-12 sm:py-16">
            {trust.map((item) => (
              <div className="text-center sm:text-left" key={item.zh}>
                <p className="tnum display text-[44px] leading-none text-ink sm:text-[56px]">
                  {item.num}
                </p>
                <p className="display-italic mt-3 text-[14px] text-celadon">
                  {item.en}
                </p>
                <p className="serif mt-2 text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]">
                  {item.zh}
                </p>
              </div>
            ))}
          </div>
          <div className="rule" />
        </div>
      </section>

      {/* INQUIRE */}
      <section className="mt-24 sm:mt-32 lg:mt-40" id="inquire">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="label text-ink-muted">Inquire · 私下询问</p>
          <h2 className="display mt-4 text-[36px] leading-[1.05] text-ink sm:text-[52px] lg:text-[64px]">
            把想看的料子<br />
            <span className="display-italic text-celadon">告诉我们。</span>
          </h2>
          <p className="serif mt-6 text-[15px] leading-[1.85] text-ink-soft sm:text-[17px]">
            种水、颜色、用途、预算 —— 都可以先说。我们挑出对应的料子，
            发自然光、压灯和侧面视频，看完再谈价格。不催，不绕。
          </p>
          <p className="display-italic mt-3 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
            Tell us water, colour, intent and budget. We will send video before we talk price.
          </p>

          <div className="mt-10">
            <ContactButtons />
          </div>

          <p className="mt-10 display-italic text-[12px] leading-[1.65] text-ink-muted sm:text-[13px]">
            翡翠原石具有天然不确定性 · 看货判断仅供参考 · 不构成切涨承诺<br />
            Rough jadeite carries natural uncertainty. Notes are advisory, not guarantees.
          </p>
        </div>
      </section>

      <footer className="mt-24 border-t border-ink/15 sm:mt-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="seal h-10 w-10 text-[12px]">萬璐</span>
              <span>
                <span className="block font-serif tracking-wide2 text-ink">WANLU JADE</span>
                <span className="block text-[10px] tracking-label uppercase text-ink-muted">
                  万璐翡翠 · Source Jadeite
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs serif text-[14px] leading-[1.75] text-ink-soft">
              缅甸翡翠原石 · 半明料 · 改口料 · 高端色料。源头看货，视频复核，不催不绕。
            </p>
          </div>
          <div className="text-[11px] tracking-label uppercase text-ink-muted sm:text-right">
            <p>© {new Date().getFullYear()} Wanlu Jade · 万璐翡翠</p>
            <p className="mt-2 display-italic normal-case tracking-normal text-[13px]">
              All stones are real. All risks are stated. All prices are private.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky inquire bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/20 bg-parchment/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            className="flex flex-col items-center justify-center gap-0.5 bg-ink py-2.5 text-parchment"
            href="https://wa.me/00000000000"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[10px] tracking-wide2 uppercase">WhatsApp</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-0.5 border border-ink/55 py-2.5 text-ink"
            href="https://line.me/ti/p/@wanlujade"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[10px] tracking-wide2 uppercase">LINE</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-0.5 border border-ink/55 py-2.5 text-ink"
            href="https://t.me/wanlujade"
          >
            <Send className="h-4 w-4" />
            <span className="text-[10px] tracking-wide2 uppercase">Telegram</span>
          </a>
        </div>
      </div>
    </main>
  );
}

const steps = [
  {
    zh: "在场口看货",
    en: "On the ground",
    note: "曼德勒、瑞丽、夜市、切料现场。先用眼睛、再用手、最后用灯。皮壳是真是假，砂感粗细，蟒带方向 —— 都在这里定下来。"
  },
  {
    zh: "把每一面拍下来",
    en: "Recorded, face by face",
    note: "自然光、强光、压灯、侧面、皮壳、开窗。一块石头四到六段视频。我们不发滤镜过的照片。"
  },
  {
    zh: "先说风险",
    en: "Risk first, always",
    note: "裂、棉、色带是否贯穿、变种可能、切前的判断、切后的复盘 —— 全部写出来发你。"
  },
  {
    zh: "确认了再谈价",
    en: "Price comes last",
    note: "你看明白这块料是什么、不是什么之后，我们再聊价钱、聊运输、聊付款。"
  }
];

const trust = [
  { num: "10+", en: "Years on the ground", zh: "缅甸场口经验" },
  { num: "3000+", en: "Stones archived on video", zh: "块料子视频存档" },
  { num: "全球", en: "Direct to collectors", zh: "华人藏家直邮" }
];
