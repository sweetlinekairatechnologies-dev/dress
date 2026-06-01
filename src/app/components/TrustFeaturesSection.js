'use client';

import React from 'react';
import Image from 'next/image';
import { Truck, Gift, Shield } from 'lucide-react';

const FLOWER_SRC = '/products/flower/flower.png';

const features = [
  {
    icon: Truck,
    title: 'FREE DELIVERY',
    description: 'Enjoy free delivery on all orders',
  },
  {
    icon: Gift,
    title: 'EASY RETURNS',
    description: 'Shop with confidence, enjoy easy returns',
  },
  {
    icon: Shield,
    title: 'SECURE PAYMENTS',
    description: 'Shop securely with our trusted payment options',
  },
];

function FlowerDecor({ src, mirrored = false }) {
  return (
    <div
      className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-90 pointer-events-none select-none ${
        mirrored ? 'scale-x-[-1]' : ''
      }`}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
        sizes="96px"
      />
    </div>
  );
}

export default function TrustFeaturesSection() {
  return (
    <section
      className="w-full bg-transparent py-10 sm:py-12 px-2 sm:px-4 lg:px-6"
      aria-label="Store benefits"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
        <FlowerDecor src={FLOWER_SRC} />

        <ul className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 list-none m-0 p-0">
        {features.map(({ icon: Icon, title, description }, idx) => (
          <li
            key={title}
            data-aos="fade-up"
            data-aos-delay={idx * 60}
            className="flex flex-col items-center text-center max-w-[280px] mx-auto lg:max-w-none"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center text-zinc-900">
              <Icon className="h-8 w-8 stroke-[1.5]" aria-hidden />
            </div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wide text-zinc-900 uppercase mb-2">
              {title}
            </h3>
            <p className="text-sm text-zinc-600 font-normal leading-relaxed m-0">
              {description}
            </p>
          </li>
        ))}
        </ul>

        <FlowerDecor src={FLOWER_SRC} mirrored />
      </div>
    </section>
  );
}
