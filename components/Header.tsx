import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-parchment/85 backdrop-blur-md">
      <div className="border-b border-ink/8 bg-parchment-soft/60">
        <p className="mx-auto max-w-7xl px-5 py-1.5 text-center text-[10px] tracking-label uppercase text-ink-muted">
          Wanlu Jade Selection · Spring 2026 · Lot 001 — 003 Now Showing
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link className="flex items-center gap-3" href="#top">
          <span className="seal h-10 w-10 text-[13px] sm:h-12 sm:w-12 sm:text-[15px]">萬璐</span>
          <span className="leading-tight">
            <span className="block font-serif text-base tracking-wide2 text-ink sm:text-lg">
              WANLU&nbsp;JADE
            </span>
            <span className="block text-[10px] tracking-label uppercase text-ink-muted">
              万璐翡翠 · Source Jadeite
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            ["Selection", "本期甄选", "#selection"],
            ["Consult", "看货助手", "#consult"],
            ["Provenance", "来路与方法", "#provenance"],
            ["Inquire", "私下询问", "#inquire"]
          ].map(([en, zh, href]) => (
            <a
              className="group flex flex-col items-start text-ink transition hover:text-celadon"
              href={href}
              key={href}
            >
              <span className="display-italic text-[18px] leading-none">{en}</span>
              <span className="mt-1 text-[10px] tracking-label uppercase text-ink-muted transition group-hover:text-celadon">
                {zh}
              </span>
            </a>
          ))}
        </nav>
        <a className="btn-ink hidden sm:inline-flex" href="#inquire">
          询问
          <span aria-hidden>·</span>
          Inquire
        </a>
      </div>
    </header>
  );
}
