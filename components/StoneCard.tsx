import Image from "next/image";
import { Activity, BadgeAlert, Gem, type LucideIcon, MessageCircle, Scale } from "lucide-react";
import type { Stone } from "@/data/stones";
import type { Lang } from "@/context/language";

const uiText = {
  zh: {
    weight: "重量",
    origin: "场口/来源",
    shell: "皮壳",
    colorBand: "色带",
    cutAdvice: "建议切法",
    assessment: "专业评估",
    yieldRate: "取货空间",
    colorConf: "色带表现",
    crackRisk: "裂纹风险",
    water: "种水倾向",
    disclaimer: "以上为展示参考，原石存在天然不确定性。如需深入了解，请联系我们安排视频看货。",
    cta: "私信了解这块料",
  },
  en: {
    weight: "Weight",
    origin: "Origin",
    shell: "Shell",
    colorBand: "Color band",
    cutAdvice: "Cut advice",
    assessment: "Expert Assessment",
    yieldRate: "Yield",
    colorConf: "Color",
    crackRisk: "Crack risk",
    water: "Water grade",
    disclaimer: "For reference only. Rough jadeite carries natural uncertainty. Contact us to arrange a private video viewing.",
    cta: "Enquire about this stone",
  },
} as const;

export function StoneCard({ stone, lang = "zh" }: { stone: Stone; lang?: Lang }) {
  const t = uiText[lang];
  return (
    <article className="group jade-border relative overflow-hidden rounded-lg bg-[#0b100e] shadow-card transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-obsidian">
        <Image
          alt={stone.title}
          className="object-cover saturate-[1.08] contrast-[1.06] transition duration-700 ease-out group-hover:scale-[1.06]"
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, 100vw"
          src={stone.cover}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-md border border-celadon/20 bg-obsidian/78 px-3 py-2 text-xs text-celadon backdrop-blur">
          {stone.videoLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-md bg-gold px-3 py-2 text-xs font-semibold text-obsidian shadow-gold">
          {stone.priceSignal}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {stone.type}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-bone">{stone.title}</h3>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info icon={Scale} label={t.weight} value={stone.weight} />
          <Info icon={Gem} label={t.origin} value={stone.origin} />
        </div>
        <div className="flex flex-wrap gap-2">
          {stone.tags.map((tag) => (
            <span
              className="rounded-md border border-celadon/18 bg-celadon/8 px-2.5 py-1 text-xs text-celadon"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-3 border-l border-gold/28 pl-4 text-sm leading-6 text-bone/76">
          <p>
            <span className="text-celadon">{t.shell}：</span>
            {stone.shell}
          </p>
          <p>
            <span className="text-celadon">{t.colorBand}：</span>
            {stone.colorBand}
          </p>
          <p>
            <span className="text-celadon">{t.cutAdvice}：</span>
            {stone.cutAdvice}
          </p>
        </div>
        <div className="rounded-lg border border-jade/24 bg-[linear-gradient(135deg,rgba(0,166,125,.16),rgba(255,255,255,.035))] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-celadon">
            <Activity className="h-4 w-4" />
            {t.assessment}
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <Metric label={t.yieldRate} value={stone.ai.yieldRate} />
            <Metric label={t.colorConf} value={stone.ai.colorConfidence} />
            <Metric label={t.crackRisk} value={stone.ai.crackRisk} />
            <Metric label={t.water} value={stone.ai.water} />
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-cinnabar/28 bg-cinnabar/10 p-3 text-xs leading-5 text-bone/72">
          <BadgeAlert className="mt-0.5 h-4 w-4 shrink-0 text-cinnabar" />
          {t.disclaimer}
        </div>
        <a
          className="btn-sheen flex w-full items-center justify-center gap-2 rounded-md border border-jade/35 bg-jade/10 py-3 text-sm font-semibold text-celadon transition hover:border-jade/55 hover:bg-jade/18"
          href="https://wa.me/00000000000"
        >
          <MessageCircle className="h-4 w-4" />
          {t.cta}
        </a>
      </div>
    </article>
  );
}

function Info({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md bg-white/[0.055] p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-celadon/72">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="text-bone">{value}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-bone/54">{label}</div>
      <div className="mt-1 text-sm font-semibold text-bone">{value}</div>
    </div>
  );
}
