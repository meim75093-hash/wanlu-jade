import Image from "next/image";
import { MessageCircle, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { StoneCard } from "@/components/StoneCard";
import { ContactButtons } from "@/components/ContactButtons";
import { Assistant } from "@/components/Assistant";
import { VideoShowcase } from "@/components/VideoShowcase";
import { stones } from "@/data/stones";

const heroImage = "/stones/hero.jpg";

export default function Home() {
  return (
    <main id="top" className="pb-28 lg:pb-0">
      <Header />

      {/* HERO — centered, boutique === */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="hero-rise hero-rise-1 label tnum text-ink-muted">
            Spring Selection · 2026
          </p>
          <div className="hero-rise hero-rise-1 mx-auto mt-5 h-px w-12 bg-celadon" />

          <h1 className="hero-rise hero-rise-2 mt-7 display text-[40px] leading-[1.04] text-ink sm:text-[64px] lg:text-[88px]">
            源 头 翡 翠
            <span className="block display-italic text-celadon">先 看 清 楚</span>
            <span className="block">再 决 定 一 切</span>
          </h1>

          <p className="hero-rise hero-rise-3 mx-auto mt-8 max-w-xl serif text-[15px] leading-[1.85] text-ink-soft sm:text-[17px]">
            缅甸翡翠原石，自源头甄选。每一块都先放到自然光与压灯下看明白，再谈价格。
          </p>
          <p className="hero-rise hero-rise-3 mx-auto mt-3 display-italic text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
            Burmese jadeite, brought to the light. Three lots, considered carefully.
          </p>

          <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a className="btn-ink" href="#selection">
              View Selection
            </a>
            <a className="btn-outline" href="#inquire">
              Inquire
            </a>
          </div>
        </div>

        {/* Hero plate — full bleed centered */}
        <div className="hero-rise hero-rise-4 mt-14 sm:mt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="frame relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                alt="翡翠原石"
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src={heroImage}
                unoptimized
              />
            </div>
            <p className="mt-4 text-center text-[10px] tracking-label uppercase text-ink-muted">
              Plate I &nbsp;·&nbsp; <span className="tnum">No. 001 — 003 · Spring 2026</span>
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative mt-24 sm:mt-32 lg:mt-44">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="label text-ink-muted">House Note</p>
          <div className="mx-auto mt-5 h-px w-12 bg-celadon" />
          <p className="mt-10 display text-[22px] leading-[1.5] text-ink sm:text-[28px] lg:text-[32px]">
            翡翠原石没有捷径。<br />
            灯下看一遍，自然光看一遍，<br />
            侧边和裂再看一遍，<br />
            <span className="display-italic text-celadon">然后才到价格。</span>
          </p>
          <p className="display-italic mx-auto mt-8 max-w-md text-[13px] leading-[1.7] text-ink-muted sm:text-[14px]">
            There are no shortcuts in rough jade. Daylight, backlight,
            then the cracks — only then the price.
          </p>
        </div>
      </section>

      {/* SELECTION */}
      <section className="mt-24 sm:mt-32 lg:mt-44" id="selection">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="label text-ink-muted">Catalogue I</p>
            <div className="mx-auto mt-4 h-px w-12 bg-celadon" />
            <h2 className="display mt-6 text-[36px] leading-[1.05] text-ink sm:text-[52px] lg:text-[64px]">
              本期甄选
            </h2>
            <p className="display-italic mt-3 text-[15px] text-ink-muted sm:text-[17px]">
              The Spring Selection.
            </p>
            <p className="tnum mt-4 text-[10px] tracking-label uppercase text-ink-muted">
              Lots 001 — 003 · Spring 2026
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

      {/* FOOTAGE */}
      <section className="mt-24 sm:mt-32 lg:mt-44" id="footage">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="label text-ink-muted">Footage</p>
            <div className="mx-auto mt-4 h-px w-12 bg-celadon" />
            <h2 className="display mt-6 text-[36px] leading-[1.05] text-ink sm:text-[52px] lg:text-[60px]">
              看货实录
            </h2>
            <p className="display-italic mt-3 text-[15px] text-ink-muted sm:text-[17px]">
              What the camera saw.
            </p>
            <p className="mx-auto mt-4 max-w-md text-[10px] tracking-label uppercase text-ink-muted">
              Daylight · Backlight · Window · Skin · Before & After
            </p>
          </div>

          <div className="mt-12">
            <VideoShowcase />
          </div>

          <p className="mt-12 text-center display-italic text-[12px] leading-[1.65] text-ink-muted">
            视频只是一段记录 · 真正下手前请用 WhatsApp 视频再过一遍。<br />
            Footage is a record, not a guarantee. Confirm by live video before any commitment.
          </p>
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
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <p className="label text-ink-muted">Provenance</p>
            <div className="mx-auto mt-4 h-px w-12 bg-celadon" />
            <h2 className="display mt-6 text-[34px] leading-[1.05] text-ink sm:text-[44px] lg:text-[52px]">
              来路与方法
            </h2>
            <p className="display-italic mt-3 text-[15px] text-ink-muted sm:text-[17px]">
              How a stone arrives at your screen.
            </p>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-14">
            {steps.map((step, index) => (
              <li className="text-center sm:text-left" key={step.zh}>
                <span className="tnum display-italic text-[34px] leading-none text-celadon sm:text-[44px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-[22px] leading-tight text-ink sm:text-[26px]">
                  {step.zh}
                </h3>
                <p className="display-italic mt-1 text-[12px] tracking-label uppercase text-ink-muted">
                  {step.en}
                </p>
                <p className="serif mt-3 text-[14px] leading-[1.8] text-ink-soft sm:text-[15px]">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONY / TRUST */}
      <section className="mt-24 sm:mt-32 lg:mt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rule" />
          <div className="grid divide-x divide-hairline py-14 sm:grid-cols-3 sm:py-20">
            {trust.map((item) => (
              <div className="px-6 text-center" key={item.zh}>
                <p className="tnum display text-[48px] leading-none text-ink sm:text-[64px]">
                  {item.num}
                </p>
                <p className="display-italic mt-4 text-[12px] tracking-label uppercase text-celadon">
                  {item.en}
                </p>
                <p className="serif mt-2 text-[14px] leading-[1.7] text-ink-soft sm:text-[15px]">
                  {item.zh}
                </p>
              </div>
            ))}
          </div>
          <div className="rule" />
        </div>
      </section>

      {/* INQUIRE */}
      <section className="relative mt-24 sm:mt-32 lg:mt-40" id="inquire">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="label text-ink-muted">Inquire</p>
          <div className="mx-auto mt-4 h-px w-12 bg-celadon" />
          <h2 className="display mt-7 text-[36px] leading-[1.05] text-ink sm:text-[52px] lg:text-[64px]">
            把想看的料子
            <span className="block display-italic text-celadon">告诉我们</span>
          </h2>
          <p className="serif mt-7 text-[15px] leading-[1.85] text-ink-soft sm:text-[17px]">
            种水、颜色、用途、预算 —— 都可以先说。我们挑出对应的料子，
            发自然光、压灯和侧面视频，看完再谈价格。
          </p>
          <p className="display-italic mt-3 text-[13px] leading-[1.65] text-ink-muted sm:text-[14px]">
            Tell us water, colour, intent and budget. Video before price.
          </p>

          <div className="mt-12">
            <ContactButtons />
          </div>

          <p className="mt-12 display-italic text-[11px] leading-[1.7] text-ink-muted sm:text-[12px]">
            翡翠原石具有天然不确定性 · 看货判断仅供参考 · 不构成切涨承诺<br />
            Rough jadeite carries natural uncertainty. Notes are advisory, not guarantees.
          </p>
        </div>
      </section>

      <footer className="mt-24 border-t border-hairline sm:mt-32">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="font-boutique text-[20px] tracking-[0.22em] text-ink sm:text-[22px]">
            WANLU&nbsp;JADE
          </p>
          <p className="mt-2 text-[10px] tracking-label uppercase text-ink-muted">
            万璐翡翠 · Source Jadeite
          </p>
          <div className="mx-auto mt-6 h-px w-12 bg-celadon" />
          <p className="serif mx-auto mt-6 max-w-md text-[14px] leading-[1.85] text-ink-soft">
            缅甸翡翠原石 · 半明料 · 改口料 · 高端色料。<br />
            源头看货，视频复核，不催不绕。
          </p>
          <p className="mt-8 display-italic text-[13px] leading-[1.7] text-ink-muted">
            All stones are real. All risks are stated. All prices are private.
          </p>
          <p className="mt-10 text-[10px] tracking-label uppercase text-ink-muted">
            © {new Date().getFullYear()} Wanlu Jade
          </p>
        </div>
      </footer>

      {/* Mobile sticky inquire bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            className="flex flex-col items-center justify-center gap-1 bg-celadon py-2.5 text-ink"
            href="https://wa.me/00000000000"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[10px] tracking-label uppercase font-medium">WhatsApp</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 border border-ink py-2.5 text-ink"
            href="https://line.me/ti/p/@wanlujade"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[10px] tracking-label uppercase font-medium">LINE</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 border border-ink py-2.5 text-ink"
            href="https://t.me/wanlujade"
          >
            <Send className="h-4 w-4" />
            <span className="text-[10px] tracking-label uppercase font-medium">Telegram</span>
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
