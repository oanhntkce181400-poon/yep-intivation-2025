"use client";

import Image from "next/image";

export default function VideoHero() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      <Image
        src="/Chibi.jpg"
        alt="Chibi"
        width={1920}
        height={550}
        priority
        className="w-full h-[350px] md:h-[450px] lg:h-[700px] object-cover"
      />
    </div>
  );
}
