"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";
import { videos, videoPoster, videoEmbedUrl, type Video } from "@/data/videos";

export function VideoShowcase() {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <>
      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14">
        {videos.map((video) => (
          <VideoCard key={video.id} onPlay={() => setActive(video)} video={video} />
        ))}
      </div>

      {active ? <VideoModal onClose={() => setActive(null)} video={active} /> : null}
    </>
  );
}

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  const poster = videoPoster(video);
  const portrait = video.orientation === "portrait";
  const aspect = portrait ? "aspect-[3/4]" : "aspect-[16/10]";

  return (
    <article className="reveal group">
      <button
        className="frame relative block w-full overflow-hidden text-left"
        onClick={onPlay}
        type="button"
      >
        <div className={`relative ${aspect} bg-ink/10`}>
          {poster ? (
            <Image
              alt={video.title}
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              src={poster}
              unoptimized
            />
          ) : null}
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(21,17,13,0)_50%,rgba(21,17,13,0.45)_100%)]" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-ink/85 px-2 py-1 text-[9px] tracking-label uppercase text-parchment">
            {portrait ? "Portrait" : "Landscape"}
            {video.lot ? ` · LOT ${video.lot}` : ""}
          </span>
          <span className="absolute inset-0 grid place-items-center transition duration-300">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-parchment/80 bg-ink/55 text-parchment backdrop-blur-sm transition duration-300 group-hover:bg-parchment group-hover:text-ink sm:h-16 sm:w-16">
              <Play className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6" strokeWidth={1.5} />
            </span>
          </span>
        </div>
      </button>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="rule mt-[10px] hidden flex-1 sm:block" />
        <p className="display-italic text-[10px] tracking-label uppercase text-ink-muted">
          {video.titleEn}
        </p>
      </div>
      <h3 className="display mt-2 text-[20px] leading-[1.2] text-ink sm:text-[22px]">
        {video.title}
      </h3>
      <p className="serif mt-2 text-[14px] leading-[1.75] text-ink-soft sm:text-[15px]">
        {video.caption}
      </p>
    </article>
  );
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const embed = videoEmbedUrl(video);
  const portrait = video.orientation === "portrait";

  return (
    <div
      aria-modal
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
    >
      <button
        aria-label="关闭"
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-parchment/30 bg-ink/40 text-parchment transition hover:bg-parchment hover:text-ink sm:right-6 sm:top-6"
        onClick={onClose}
        type="button"
      >
        <X className="h-4 w-4" />
      </button>

      <div
        className={`relative w-full ${portrait ? "max-w-md" : "max-w-5xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full overflow-hidden bg-black ${
            portrait ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {embed ? (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              src={embed}
              title={video.title}
            />
          ) : video.src ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-contain"
              controls
              playsInline
              poster={video.poster}
              src={video.src}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-parchment">
              <p className="display-italic text-[14px] tracking-label uppercase text-parchment/60">
                Video coming soon
              </p>
              <p className="serif text-[15px] leading-[1.7] text-parchment/80">
                视频准备中 · 想看这一段的原片，
                <br />
                可以直接发 WhatsApp 找我们要。
              </p>
              <a
                className="mt-3 inline-flex items-center gap-2 border border-parchment/55 px-4 py-2 text-[11px] tracking-wide2 uppercase text-parchment transition hover:bg-parchment hover:text-ink"
                href="https://wa.me/00000000000"
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp 索取
              </a>
            </div>
          )}
        </div>
        <p className="mt-4 text-center display-italic text-[12px] tracking-label uppercase text-parchment/55">
          {video.titleEn}
        </p>
        <h4 className="mt-1 text-center display text-[22px] leading-tight text-parchment">
          {video.title}
        </h4>
      </div>
    </div>
  );
}
