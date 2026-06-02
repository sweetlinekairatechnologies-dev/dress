'use client';

import Image from 'next/image';

export default function HeroSlider({ onShopClick }) {
  const banner = { src: '/banner/hero.PNG', alt: 'vdgfashion Hero Banner' };

  return (
    <div className="relative overflow-hidden w-full bg-gradient-to-b from-purple-100 to-pink-50">
      <div onClick={onShopClick} className="w-full cursor-pointer relative" style={{ aspectRatio: '16/6' }}>
        <Image
          src={banner.src}
          alt={banner.alt}
          fill
          className="object-cover w-full"
          priority
        />
      </div>
    </div>
  );
}
