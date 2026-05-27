import Image from "next/image";
import {
  BadgeAlert,
  Bot,
  Database,
  Gem,
  Globe2,
  MessageCircle,
  Radio,
  ScanLine,
  Send,
  Sparkles,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { StoneCard } from "@/components/StoneCard";
import { stones } from "@/data/stones";

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg";

const featuredImage =
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raw_jadeite_jade_-_Burke_Museum_-_01.jpg";

const proofPoints: Array<[string, string, string, LucideIcon]> = [
  ["源头实拍", "Real source video", "能发视频的料子，才值得继续聊", Gem],
  ["先看风险", "Risk first", "裂、棉、色带和打灯表现都会说清楚", ScanLine],
  ["私下细看", "Private review", "WhatsApp / LINE / TG 发原视频，一块一块看", MessageCircle]
];

const heroStats: Array<[string, string]> = [
  ["10+", "年缅甸场口经验"],
  ["3000+", "块料子实拍存档"],
  ["全球", "华人藏家直邮"]
];

const videoShots = [
  ["开窗看肉", "Window view", "看颜色有没有进去，也看肉够不够细。"],
  ["打灯看底", "Light test", "水头、棉、裂，灯下一圈一圈带你看。"],
  ["切前商量", "Cutting plan", "能不能切、怎么切，先把风险摊开说。"],
  ["切后复盘", "Result review", "切涨切垮都复盘，做长期信任。"]
];

const liveChannels: Array<[string, string, string, LucideIcon]> = [
  ["TikTok直播", "Live stone selection", "现场看料、压灯、问价，适合先快速筛选。", Radio],
  ["YouTube回放", "Long-form review", "想慢慢研究的客户，可以反复看细节。", Video],
  ["LINE / Telegram", "Private updates", "新料、直播预告、切料结果会先发在频道。", Send],
  ["看货记录", "Stone record", "每块料子的重量、场口、视频和沟通记录都会留档。", Database]
];

const workflow = [
  ["挑料", "Select", "先筛掉明显风险太高的料"],
  ["拍清楚", "Record", "自然光、压灯、侧面都拍"],
  ["讲明白", "Explain", "优点说，问题也说"],
  ["再成交", "Confirm", "确认视频和风险后再决定"]
];

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <Header />
      <section className="relative overflow-hidden border-b border-gold/15 pt-28">
        <div className="absolute inset-0">
          <Image
            alt="翡翠原石切面微距"
            className="object-cover opacity-48 saturate-[1.14] contrast-[1.08]"
            fill
            priority
            sizes="100vw"
            src={heroImage}
            unoptimized
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,8,.70)_0%,rgba(7,9,8,.94)_72%,#070908_100%),linear-gradient(90deg,#070908_0%,rgba(7,9,8,.86)_35%,rgba(7,9,8,.28)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:px-8 lg:py-14">
          <div>
            <div className="hero-rise hero-rise-1 mb-4 inline-flex items-center gap-2 rounded-md border border-gold/35 bg-obsidian/72 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Source Jadeite / Real Video First
            </div>
            <h1 className="hero-rise hero-rise-1 text-balance font-serif text-[44px] leading-[1.04] text-bone sm:text-6xl lg:text-7xl">
              源头<span className="text-gold-foil">翡翠原石</span>
              <span className="mt-1 block text-celadon">先看清楚，再决定</span>
            </h1>
            <p className="hero-rise hero-rise-2 mt-4 max-w-2xl font-serif text-xl leading-8 text-gold/88">
              Source jadeite rough stones. See the real video before you decide.
            </p>
            <p className="hero-rise hero-rise-2 mt-5 max-w-2xl text-base leading-8 text-bone/78 sm:text-lg">
              我们做缅甸翡翠原石、半明料、改口料和高端色料。你不用只看几张漂亮图，
              可以先看自然光、压灯、开窗和侧面视频，把优点和风险都看明白，再谈价格。
            </p>
            <p className="hero-rise hero-rise-2 mt-3 max-w-2xl text-sm leading-7 text-bone/52">
              Burmese jadeite rough stones, semi-opened pieces, cut-window stones, and fine color material for Chinese collectors worldwide.
            </p>
            <div className="hero-rise hero-rise-3 mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="https://wa.me/00000000000" icon={MessageCircle}>
                发我想看的料子
              </PrimaryLink>
              <SecondaryLink href="https://line.me/ti/p/@wanlujade" icon={MessageCircle}>
                LINE 咨询
              </SecondaryLink>
              <SecondaryLink href="https://t.me/wanlujade" icon={Send}>
                看最新上新
              </SecondaryLink>
            </div>
            <dl className="hero-rise hero-rise-3 mt-8 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-lg border border-white/10 bg-obsidian/55 backdrop-blur">
              {heroStats.map(([value, label]) => (
                <div className="px-4 py-4 text-center" key={label}>
                  <dt className="font-serif text-3xl text-gold-foil sm:text-4xl">{value}</dt>
                  <dd className="mt-1 text-[11px] leading-4 text-bone/56">{label}</dd>
                </div>
              ))}
            </dl>
            <div className="hero-rise hero-rise-3 mt-6 grid gap-3 sm:grid-cols-3">
              {proofPoints.map(([title, en, text, Icon]) => (
                <div
                  className="rounded-lg border border-white/12 bg-obsidian/62 p-4 backdrop-blur transition hover:border-gold/30 hover:bg-obsidian/80"
                  key={title}
                >
                  <Icon className="h-5 w-5 text-gold" />
                  <p className="mt-3 font-semibold text-bone">{title}</p>
                  <p className="en-caption mt-1 text-[10px] text-gold/58">{en}</p>
                  <p className="mt-1 text-xs leading-5 text-bone/58">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gold/20 bg-[#090d0b]/86 p-3 shadow-glow backdrop-blur">
            <div className="relative overflow-hidden rounded-md border border-white/12 bg-obsidian">
              <div className="relative aspect-[4/5] sm:aspect-[16/11]">
                <Image
                  alt="原石直播验货画面"
                  className="object-cover saturate-[1.12] contrast-[1.08]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  src={featuredImage}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,8,.90)_0%,transparent_48%),linear-gradient(90deg,rgba(7,9,8,.55),transparent_55%)]" />
                <div className="scan-lines pointer-events-none absolute inset-0 opacity-25" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-cinnabar px-3 py-2 text-xs font-semibold text-white">
                    LIVE
                  </span>
                  <span className="rounded-md border border-jade/35 bg-obsidian/76 px-3 py-2 text-xs text-celadon backdrop-blur">
                    风险先说明
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-gold">
                    Tonight viewing
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-bone sm:text-4xl">
                    今晚可视频看货
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    {["看自然光", "看压灯", "问底价"].map((item) => (
                      <span className="rounded-md bg-white/10 px-2 py-2 text-bone/78" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid border-t border-white/10 bg-obsidian/94 sm:grid-cols-4">
                {[
                  ["看货方式", "视频"],
                  ["重点", "打灯"],
                  ["风险", "先讲"],
                  ["状态", "可约"]
                ].map(([label, value]) => (
                  <div className="border-white/10 p-4 sm:border-r" key={label}>
                    <p className="text-xs text-bone/45">{label}</p>
                    <p className="mt-1 font-serif text-xl text-celadon">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0f0d]">
        <div className="mx-auto grid max-w-7xl gap-px border-x border-white/8 bg-white/8 sm:grid-cols-4">
          {[
            ["01", "原石 / 半明料 / 高货色料"],
            ["02", "发自然光和打灯视频"],
            ["03", "直播间现场复核"],
            ["04", "确认风险后再成交"]
          ].map(([num, text]) => (
            <div className="bg-[#0b0f0d] p-5" key={num}>
              <p className="text-xs text-gold">{num}</p>
              <p className="mt-2 text-sm text-bone/72">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="stones">
        <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <SectionTitle
            eyebrow="Stone Selection"
            eyebrowCn="原石挑选"
            title="每块料子，我们都尽量讲透"
            titleEn="Every stone is explained before it is offered."
            text="你关心的不是一张好看的照片，而是这块料到底能不能赌、裂在哪里、色有没有进去、切法有没有空间。我们把这些先摆出来。"
            textEn="You see the origin, light test, color band, cracks, cutting idea, and risk notes before talking price."
          />
          <div className="rounded-lg border border-cinnabar/25 bg-cinnabar/10 p-5 text-sm leading-7 text-bone/72">
            <div className="mb-2 flex items-center gap-2 text-cinnabar">
              <BadgeAlert className="h-4 w-4" />
              先说清楚
            </div>
            翡翠原石有不确定性。我们会尽量把视频和判断发完整，但不承诺切涨。真正下手前，建议你把自然光、压灯和侧边细节都看一遍。
          </div>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {stones.map((stone) => (
            <StoneCard key={stone.id} stone={stone} />
          ))}
        </div>
      </section>

      <section className="reveal border-y border-white/10 bg-[#101413] py-16" id="videos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[.72fr_1.28fr]">
          <SectionTitle
            eyebrow="Video Proof"
            eyebrowCn="视频复核"
            title="看料，视频比话更重要"
            titleEn="For rough stones, video tells more than words."
            text="好的料子不怕多拍。开窗、打灯、侧面、皮壳、切面，我们尽量用视频把真实状态交代清楚。"
            textEn="Window, light, side view, shell, and cut surface are recorded so you can review calmly."
          />
            <div className="grid gap-3 sm:grid-cols-2">
              {videoShots.map(([title, en, text], index) => (
                <div
                  className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-5"
                  key={title}
                >
                  <p className="text-xs tracking-[0.22em] text-gold">
                    DETAIL {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 font-serif text-3xl text-bone">{title}</h3>
                  <p className="en-caption mt-1 text-[10px] text-gold/58">{en}</p>
                  <p className="mt-3 text-sm leading-6 text-bone/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto grid max-w-7xl gap-9 px-4 py-16 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-8" id="live">
        <div>
          <SectionTitle
            eyebrow="Live Viewing"
            eyebrowCn="直播看货"
            title="不方便到现场，就用直播一起看"
            titleEn="If you cannot be there, we bring the stone to the camera."
            text="曼德勒、瑞丽、夜市、切料现场，我们尽量把看货过程放到镜头前。你可以直接问细节，也可以要求补拍。"
            textEn="Ask for details in real time, request extra angles, and review before making a decision."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <PrimaryLink href="#live" icon={Radio}>
              预约直播看货
            </PrimaryLink>
            <SecondaryLink href="https://t.me/wanlujade" icon={Send}>
              加入上新频道
            </SecondaryLink>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {liveChannels.map(([title, en, text, Icon]) => (
            <div className="rounded-lg border border-white/12 bg-white/[0.045] p-5" key={title}>
              <Icon className="h-6 w-6 text-celadon" />
              <h3 className="mt-5 font-serif text-2xl text-bone">{title}</h3>
              <p className="en-caption mt-1 text-[10px] text-gold/58">{en}</p>
              <p className="mt-3 text-sm leading-6 text-bone/64">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal border-t border-white/10 bg-ink py-16" id="ai-service">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
          <SectionTitle
            eyebrow="Ask Before Buying"
            eyebrowCn="先问清楚"
            title="不懂可以先问，别急着下手"
            titleEn="Ask first. A serious stone should stand up to questions."
            text="场口、种水、色料、发货、海外运输、风险说明，都可以先问清楚。真正要定料时，我们会把你带到人工一对一确认。"
            textEn="Origin, water, color, shipping, and risks can all be checked before a private deal."
          />
          <div className="rounded-lg border border-jade/22 bg-jade/8 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-jade text-obsidian">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-bone">Wanlu 看货助手</p>
                <p className="text-sm text-celadon/72">先答疑，再安排人工看货</p>
              </div>
            </div>
            <div className="grid gap-3 text-sm leading-6 md:grid-cols-2">
              <p className="rounded-lg bg-white/8 p-4 text-bone/78">
                客户：这块料子适合切手镯吗？
              </p>
              <p className="rounded-lg bg-obsidian/60 p-4 text-bone/78">
                回复：先别急着定。要看开窗面、侧边暗裂和压灯表现。我们可以先发自然光、压灯和侧面视频，你看完再决定。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="How We Work"
            eyebrowCn="我们的方式"
            title="长期做生意，靠的是把话说在前面"
            titleEn="Long-term trust starts with clear words before the deal."
            text="翡翠原石不是标准品。我们希望你买之前看得足够清楚，买之后也能把每一次切料结果复盘下来。"
            textEn="Rough jadeite is never a standard product. We prefer careful review over rushed decisions."
          />
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {workflow.map(([name, en, text]) => (
            <div className="rounded-lg border border-white/12 bg-white/[0.045] p-5" key={name}>
              <p className="font-serif text-2xl text-gold">{name}</p>
              <p className="en-caption mt-1 text-[10px] text-bone/42">{en}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-bone/66">{text}</p>
              <Gem className="mt-4 h-5 w-5 text-celadon" />
            </div>
          ))}
        </div>
      </section>

      <section className="reveal relative overflow-hidden border-t border-gold/20 bg-[#0a0e0c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(0,166,125,.18),transparent_55%),radial-gradient(circle_at_85%_120%,rgba(215,182,109,.12),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="en-caption text-xs text-gold">Start Viewing</p>
          <h2 className="text-balance mt-4 font-serif text-4xl leading-tight text-bone sm:text-5xl">
            想看的料子，<span className="text-gold-foil">现在就发给我们</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-bone/70">
            告诉我们想要的种水、颜色、预算和用途，我们挑出对应的料子，发自然光与压灯视频，先看清楚再谈价格。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="https://wa.me/00000000000" icon={MessageCircle}>
              WhatsApp 发需求
            </PrimaryLink>
            <SecondaryLink href="https://line.me/ti/p/@wanlujade" icon={MessageCircle}>
              LINE 咨询
            </SecondaryLink>
            <SecondaryLink href="https://t.me/wanlujade" icon={Send}>
              Telegram 看上新
            </SecondaryLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/45 bg-white/6">
                <Gem className="h-5 w-5 text-celadon" />
              </span>
              <span>
                <span className="block font-serif text-lg tracking-[0.12em] text-bone">
                  WANLU <span className="text-gold-foil">JADE</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.24em] text-celadon/70">
                  万璐翡翠 · Jadeite Source
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-bone/60">
              缅甸翡翠原石、半明料、改口料与高端色料。源头看货，视频复核，把风险讲在前面，做长期信任。
            </p>
          </div>
          <div>
            <p className="en-caption text-xs text-gold">Channels</p>
            <ul className="mt-4 space-y-3 text-sm text-bone/68">
              <li><a className="nav-underline transition hover:text-celadon" href="https://wa.me/00000000000">WhatsApp 一对一看货</a></li>
              <li><a className="nav-underline transition hover:text-celadon" href="https://line.me/ti/p/@wanlujade">LINE 咨询答疑</a></li>
              <li><a className="nav-underline transition hover:text-celadon" href="https://t.me/wanlujade">Telegram 上新频道</a></li>
            </ul>
          </div>
          <div>
            <p className="en-caption text-xs text-gold">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-bone/68">
              <li><a className="nav-underline transition hover:text-celadon" href="#stones">原石展示</a></li>
              <li><a className="nav-underline transition hover:text-celadon" href="#videos">看货视频</a></li>
              <li><a className="nav-underline transition hover:text-celadon" href="#live">直播代购</a></li>
              <li><a className="nav-underline transition hover:text-celadon" href="#ai-service">咨询答疑</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Wanlu Jade 万璐翡翠. All rights reserved.</p>
            <p>翡翠原石具有天然不确定性，看货判断仅供参考，不构成切涨承诺。</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-obsidian/94 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <PrimaryLink href="https://wa.me/00000000000" icon={MessageCircle}>
            WhatsApp
          </PrimaryLink>
          <SecondaryLink href="https://line.me/ti/p/@wanlujade" icon={MessageCircle}>
            LINE
          </SecondaryLink>
          <SecondaryLink href="https://t.me/wanlujade" icon={Send}>
            Telegram
          </SecondaryLink>
        </div>
      </div>
    </main>
  );
}

function PrimaryLink({
  href,
  icon: Icon,
  children
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <a
      className="btn-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-jade px-3 text-xs font-semibold text-obsidian shadow-glow transition hover:bg-celadon sm:px-5 sm:text-sm"
      href={href}
    >
      <Icon className="h-4 w-4" />
      {children}
    </a>
  );
}

function SecondaryLink({
  href,
  icon: Icon,
  children
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <a
      className="btn-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/14 bg-white/8 px-3 text-xs font-semibold text-bone transition hover:border-gold/40 hover:bg-white/14 sm:px-5 sm:text-sm"
      href={href}
    >
      <Icon className="h-4 w-4" />
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  eyebrowCn,
  title,
  titleEn,
  text,
  textEn
}: {
  eyebrow: string;
  eyebrowCn?: string;
  title: string;
  titleEn?: string;
  text: string;
  textEn?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="en-caption text-xs text-gold">
        {eyebrowCn ? `${eyebrowCn} / ${eyebrow}` : eyebrow}
      </p>
      <h2 className="text-balance mt-3 font-serif text-4xl leading-tight text-bone sm:text-5xl">
        {title}
      </h2>
      {titleEn ? (
        <p className="mt-3 font-serif text-xl leading-7 text-gold/82">{titleEn}</p>
      ) : null}
      <p className="mt-5 leading-8 text-bone/68">{text}</p>
      {textEn ? <p className="mt-3 text-sm leading-7 text-bone/48">{textEn}</p> : null}
    </div>
  );
}
