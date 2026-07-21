import Image from "next/image";

// The subject page's 2026 box render. A clean, static product shot under the
// title, sized so it presents the pack without swallowing the screen. No
// scroll-shrink animation (it looked awkward and fought the page). The +1deg
// rotate squares up renders that lean slightly left.
export function SubjectPackHero({ img, alt }: { img: string; alt: string }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative aspect-[2/3] w-full max-w-[240px] sm:max-w-[280px]">
        <Image
          src={img}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 240px, 280px"
          className="rotate-1 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
