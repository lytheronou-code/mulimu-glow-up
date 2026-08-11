import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type PhotoGalleryProps = {
  images: string[];
  altPrefix: string;
  label: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
};

export function PhotoGallery({
  images,
  altPrefix,
  label,
  closeLabel,
  previousLabel,
  nextLabel,
}: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? null : (current + 1) % images.length));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % images.length));
  };

  return (
    <>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${label}: ${index + 1} / ${images.length}`}
            className="frame-media group relative mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden text-left"
          >
            <img
              src={src}
              alt={`${altPrefix} — ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
            <span className="absolute bottom-4 right-4 grid size-10 place-items-center bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand aria-hidden="true" className="size-4" />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4 sm:p-8"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label={closeLabel}
            className="absolute right-5 top-5 z-10 grid size-11 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
          >
            <X aria-hidden="true" className="size-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label={previousLabel}
                className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black sm:left-6"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label={nextLabel}
                className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black sm:right-6"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </>
          ) : null}

          <img
            src={images[activeIndex]}
            alt={`${altPrefix} — ${activeIndex + 1}`}
            className="max-h-[86svh] max-w-[90vw] object-contain"
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.68rem] uppercase tracking-[0.24em] text-white/70">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
