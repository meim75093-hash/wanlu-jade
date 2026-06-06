import Image from "next/image";
import type { Stone } from "@/data/stones";

const statusLabel: Record<Stone["status"], string> = {
  AVAILABLE: "可约视频",
  "ON HOLD": "暂留意向",
  RESERVED: "已留"
};

export function StoneCard({ stone, index }: { stone: Stone; index: number }) {
  const isFlipped = index % 2 === 1;
  return (
    <article
      className="reveal relative grid gap-8 border-t border-ink/12 pt-10 sm:gap-12 sm:pt-16 lg:grid-cols-12 lg:gap-14 lg:pt-20"
      id={`lot-${stone.lot}`}
    >
      {/* Lot number — desktop floating */}
      <div className="absolute right-0 -top-2 hidden select-none lg:block">
        <span className="lot-num">{stone.lot}</span>
      </div>

      {/* Image column */}
      <div className={`relative lg:col-span-7 ${isFlipped ? "lg:order-2" : ""}`}>
        <div className="frame relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            alt={stone.titleZh}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={stone.cover}
            unoptimized
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-[10px] tracking-label uppercase text-ink-muted">
          <span>Plate · 图版 {stone.lot}</span>
          <span>{stone.videoNote}</span>
        </div>
      </div>

      {/* Details column */}
      <div className={`lg:col-span-5 ${isFlipped ? "lg:order-1" : ""}`}>
        <div className="flex items-baseline gap-3">
          <span className="tnum display-italic text-[28px] leading-none text-celadon sm:text-[34px]">
            № {stone.lot}
          </span>
          <span className="rule flex-1" />
          <span className="label-sm text-ink-muted">
            {statusLabel[stone.status]}
          </span>
        </div>

        <h3 className="display mt-5 text-[28px] leading-[1.12] text-ink sm:text-[36px] lg:text-[40px]">
          {stone.titleZh}
        </h3>
        <p className="display-italic mt-2 text-[15px] leading-snug text-ink-muted sm:text-[17px]">
          {stone.titleEn}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-wide2 uppercase text-ink-muted">
          <span>{stone.category}</span>
          <span aria-hidden>·</span>
          <span>{stone.origin}</span>
          <span aria-hidden>·</span>
          <span className="tnum">{stone.weight}</span>
        </div>

        <p className="serif mt-6 text-[15px] leading-[1.85] text-ink-soft sm:text-base">
          {stone.note}
        </p>
        <p className="display-italic mt-3 text-[13px] leading-[1.7] text-ink-muted sm:text-[14px]">
          {stone.noteEn}
        </p>

        <dl className="mt-7">
          <Row label="皮壳 Skin">{stone.specs.shell}</Row>
          <Row label="色相 Colour">{stone.specs.color}</Row>
          <Row label="灯下 Light">{stone.specs.light}</Row>
          <Row label="切议 Cut">{stone.specs.cut}</Row>
          <Row label="估价 Estimate">{stone.estimate}</Row>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a className="inquire-link" href="#inquire">
            Request private viewing
            <span className="arr" aria-hidden>→</span>
          </a>
          <a className="inquire-link" href="https://wa.me/00000000000">
            WhatsApp 视频
            <span className="arr" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="spec-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
