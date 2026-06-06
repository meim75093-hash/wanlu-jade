import Image from "next/image";
import { Activity, BadgeAlert, Gem, type LucideIcon, Scale } from "lucide-react";
import type { Stone } from "@/data/stones";

const meterMap: Record<string, { width: string; tone: string }> = {
  高: { width: "86%", tone: "" },
  中: { width: "58%", tone: "meter--gold" },
  低: { width: "30%", tone: "meter--warm" },
  中高: { width: "72%", tone: "meter--warm" }
};

function readPercent(value: string): { width: string; tone: string } {
  const pctMatch = value.match(/(\d+)\s*%/);
  if (pctMatch) {
    const n = Number(pctMatch[1]);
    const tone = n >= 65 ? "" : n >= 45 ? "meter--gold" : "meter--warm";
    return { width: `${Math.min(100, Math.max(8, n))}%`, tone };
  }
  if (meterMap[value]) return meterMap[value];
  // descriptive values like "冰种倾向" — show a soft jade fill
  return { width: "62%", tone: "" };
}

export function StoneCard({ stone }: { stone: Stone }) {
  return (
    <article className="group jade-border card-depth gold-corners relative overflow-hidden rounded-lg bg-[#0b100e] transition duration-500 hover:-translate-y-1.5 hover:border-gold/40">
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-celadon/22 bg-obsidian/82 px-3 py-2 text-xs text-celadon backdrop-blur">
          <span className="pulse-dot" aria-hidden />
          {stone.videoLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-md bg-gold px-3 py-2 text-xs font-semibold text-obsidian shadow-gold">
          {stone.priceSignal}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="en-caption text-[10px] text-gold">
            {stone.type}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-bone tracking-tight">{stone.title}</h3>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info icon={Scale} label="重量" value={stone.weight} />
          <Info icon={Gem} label="场口/来源" value={stone.origin} />
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
            <span className="text-celadon">皮壳：</span>
            {stone.shell}
          </p>
          <p>
            <span className="text-celadon">色带：</span>
            {stone.colorBand}
          </p>
          <p>
            <span className="text-celadon">建议切法：</span>
            {stone.cutAdvice}
          </p>
        </div>
        <div className="rounded-lg border border-jade/24 bg-[linear-gradient(135deg,rgba(0,166,125,.16),rgba(255,255,255,.035))] p-4">
          <div className="mb-3 flex items-center justify-between text-sm font-semibold text-celadon">
            <span className="inline-flex items-center gap-2">
              <Activity className="h-4 w-4" />
              看货参考
            </span>
            <span className="en-caption text-[9px] text-celadon/55">Reference</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
            <Metric label="取货空间" value={stone.ai.yieldRate} />
            <Metric label="色带表现" value={stone.ai.colorConfidence} />
            <Metric label="裂纹风险" value={stone.ai.crackRisk} />
            <Metric label="种水倾向" value={stone.ai.water} />
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-md border border-cinnabar/28 bg-cinnabar/10 p-3 text-xs leading-5 text-bone/72">
          <BadgeAlert className="mt-0.5 h-4 w-4 shrink-0 text-cinnabar" />
          以上判断只做看货参考，不代表一定切涨或一定出货。下手前建议先看自然光、压灯和侧边视频。
        </div>
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
    <div className="rounded-md bg-white/[0.055] p-3 ring-1 ring-inset ring-white/[0.04]">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-celadon/72">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="text-bone">{value}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  const { width, tone } = readPercent(value);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-bone/54">{label}</span>
        <span className="figure-num text-sm font-semibold text-bone">{value}</span>
      </div>
      <div className={`meter ${tone} mt-1.5`}>
        <span style={{ width }} />
      </div>
    </div>
  );
}
