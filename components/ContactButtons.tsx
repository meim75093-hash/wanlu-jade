import { MessageCircle, Radio, Send } from "lucide-react";

const contacts = [
  {
    label: "WhatsApp联系",
    href: "https://wa.me/00000000000",
    icon: MessageCircle,
    tone: "bg-jade text-obsidian hover:bg-celadon"
  },
  {
    label: "LINE联系",
    href: "https://line.me/ti/p/@wanlujade",
    icon: MessageCircle,
    tone: "bg-[#06c755] text-obsidian hover:bg-[#33d66f]"
  },
  {
    label: "Telegram联系",
    href: "https://t.me/wanlujade",
    icon: Send,
    tone: "bg-white/10 text-bone hover:bg-white/16"
  },
  {
    label: "进入直播间",
    href: "#live",
    icon: Radio,
    tone: "bg-gold text-obsidian hover:bg-[#edcd82]"
  }
];

export function ContactButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {contacts.map(({ label, href, icon: Icon, tone }) => (
        <a
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${tone}`}
          href={href}
          key={label}
        >
          <Icon aria-hidden className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
