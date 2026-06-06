import { MessageCircle, Send } from "lucide-react";

const channels = [
  {
    label: "WhatsApp",
    sub: "一对一视频",
    href: "https://wa.me/00000000000",
    icon: MessageCircle
  },
  {
    label: "LINE",
    sub: "台日询问",
    href: "https://line.me/ti/p/@wanlujade",
    icon: MessageCircle
  },
  {
    label: "Telegram",
    sub: "本期上新",
    href: "https://t.me/wanlujade",
    icon: Send
  }
];

export function ContactButtons() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {channels.map(({ label, sub, href, icon: Icon }) => (
        <a
          className="group flex flex-col items-center justify-center border border-ink/55 bg-parchment-soft px-2 py-3 text-ink transition hover:bg-ink hover:text-parchment sm:py-4"
          href={href}
          key={label}
        >
          <Icon aria-hidden className="h-4 w-4 mb-1.5" />
          <span className="text-[11px] tracking-wide2 uppercase font-medium">{label}</span>
          <span className="mt-0.5 text-[9px] tracking-label uppercase text-ink-muted transition group-hover:text-parchment/65">
            {sub}
          </span>
        </a>
      ))}
    </div>
  );
}
