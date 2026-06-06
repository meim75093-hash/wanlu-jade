import { Gem, Send } from "lucide-react";
import { ContactButtons } from "./ContactButtons";

const nav = [
  ["原石展示", "Stones", "#stones"],
  ["看货视频", "Videos", "#videos"],
  ["直播代购", "Live", "#live"],
  ["咨询答疑", "Consult", "#ai-service"]
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-obsidian/88 backdrop-blur-xl">
      <a
        href="https://t.me/wanlujade"
        className="group flex items-center justify-center gap-2.5 border-b border-white/5 bg-[linear-gradient(90deg,rgba(0,166,125,.14),rgba(215,182,109,.12),rgba(0,166,125,.14))] px-4 py-1.5 text-[11px] tracking-[0.14em] text-bone/82 transition hover:text-bone"
      >
        <span className="pulse-dot" aria-hidden />
        <span className="font-medium text-gold">本周上新</span>
        <span className="hidden sm:inline text-bone/70">·</span>
        <span className="hidden sm:inline">木那场口高冰料已到 · 自然光与压灯视频已就绪</span>
        <span className="inline-flex items-center gap-1 text-celadon transition group-hover:translate-x-0.5">
          加 Telegram 先看
          <Send className="h-3 w-3" />
        </span>
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3" href="#">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-md border border-gold/45 bg-[radial-gradient(circle_at_30%_25%,rgba(215,182,109,.28),transparent_60%)] transition group-hover:border-gold/75 group-hover:shadow-glow">
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_25%,rgba(0,166,125,.35),transparent_60%)]" />
            <Gem className="h-5 w-5 text-celadon transition group-hover:text-gold" />
          </span>
          <span>
            <span className="block font-serif text-xl tracking-[0.14em] text-bone">
              WANLU <span className="text-gold-foil">JADE</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-celadon/70">
              万璐翡翠 · Jadeite Source
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-bone/72 lg:flex">
          {nav.map(([label, en, href], index) => (
            <a
              className="nav-underline group flex items-center gap-2 leading-tight transition hover:text-celadon"
              href={href}
              key={href}
            >
              <span className="en-caption text-[9px] text-gold/55 transition group-hover:text-gold">
                0{index + 1}
              </span>
              <span>
                <span className="block">{label}</span>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-bone/38 transition group-hover:text-celadon/70">
                  {en}
                </span>
              </span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <ContactButtons />
        </div>
        <a
          className="btn-sheen inline-flex min-h-10 items-center rounded-md bg-jade px-4 text-sm font-semibold text-obsidian transition hover:bg-celadon xl:hidden"
          href="https://wa.me/00000000000"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
