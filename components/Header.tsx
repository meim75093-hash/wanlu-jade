import { Gem } from "lucide-react";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/45 bg-white/6">
            <Gem className="h-5 w-5 text-celadon" />
          </span>
          <span>
            <span className="block font-serif text-lg tracking-[0.08em] text-bone">
              WANLU JADE
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-celadon/72">
              Jadeite Source
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-bone/72 lg:flex">
          {nav.map(([label, en, href]) => (
            <a className="group leading-tight transition hover:text-celadon" href={href} key={href}>
              <span className="block">{label}</span>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-bone/38 group-hover:text-celadon/70">
                {en}
              </span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <ContactButtons />
        </div>
        <a
          className="inline-flex min-h-10 items-center rounded-md bg-jade px-4 text-sm font-semibold text-obsidian xl:hidden"
          href="https://wa.me/00000000000"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
