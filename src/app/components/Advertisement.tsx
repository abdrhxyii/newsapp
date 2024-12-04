'use client';
import Image from 'next/image';

export default function Advertisement() {
  return (
      <div className="relative w-full h-52 sm:h-52 z">
        <Image
          src="/advertisement.jpeg" 
          alt="Advertisement"
          fill
          className="object-fill"
        />
      </div>
  );
}
