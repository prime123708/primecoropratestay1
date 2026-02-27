import { useEffect, useRef, useState } from "react";

export function ParallaxBanner({
  src,
  alt,
  heightClass = "h-[400px] mt-16 md:mt-20",
  strength = 0.25,
  children,
}) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId = null;
    const loop = () => {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const localOffset = -rect.top * strength;
        setOffset(localOffset);
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <section ref={containerRef} className={`relative overflow-hidden ${heightClass}`} aria-label={alt}>
      <div className="absolute inset-0">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
            willChange: "transform",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">{children}</div>
    </section>
  );
}
