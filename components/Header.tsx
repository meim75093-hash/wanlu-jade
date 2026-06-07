import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-white/95 backdrop-blur-md">
      <div className="border-b border-hairline-soft">
        <p className="mx-auto max-w-7xl px-5 py-1.5 text-center text-[10px] tracking-label uppercase text-ink-muted">
          Wanlu Jade · Spring Selection · Lots 001 — 003 Now Showing
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <nav className="hidden items-center gap-7 lg:flex">
          {[
            ["Selection", "#selection"],
            ["Footage", "#footage"]
          ].map(([en, href]) => (
            <a
              className="label text-ink transition hover:text-celadon"
              href={href}
              key={href}
            >
              {en}
            </a>
          ))}
        </nav>

        <Link className="flex flex-col items-center justify-self-center" href="#top">
          <span className="font-boutique text-[20px] font-medium tracking-[0.22em] text-ink sm:text-[24px]">
            WANLU&nbsp;JADE
          </span>
          <span className="mt-1 text-[10px] tracking-label uppercase text-ink-muted">
            万璐翡翠
          </span>
        </Link>

        <nav className="hidden items-center justify-end gap-7 lg:flex">
          {[
            ["Consult", "#consult"],
            ["Inquire", "#inquire"]
          ].map(([en, href]) => (
            <a
              className="label text-ink transition hover:text-celadon"
              href={href}
              key={href}
            >
              {en}
            </a>
          ))}
        </nav>

        <a className="btn-tiffany justify-self-end px-4 py-3 text-[10px] lg:hidden" href="#inquire">
          Inquire
        </a>
      </div>
    </header>
  );
}
