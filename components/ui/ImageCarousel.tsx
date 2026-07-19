"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  title: string;
  image: string;
}

export default function ImageCarousel({
  slides,
  isMobile,
}: {
  slides: Slide[];
  isMobile?: boolean;
}) {
  const [index, setIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const current = slides[index];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-border">
      <div
        className={`relative w-full ${
          isMobile ? "aspect-[9/16] max-h-[560px] mx-auto max-w-sm" : "aspect-video"
        }`}
      >
        <Image
          src={current.image}
          alt={current.title || "screenshot"}
          fill
          sizes={isMobile ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, 900px"}
          quality={90}
          className="object-contain"
          priority
        />
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-lg transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-lg transition-colors"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {index + 1} / {slides.length}
          </div>
        </>
      )}

      {current.title && (
        <div className="bg-white border-t border-border px-4 py-2">
          <p className="text-xs text-center text-muted font-medium">{current.title}</p>
        </div>
      )}
    </div>
  );
}