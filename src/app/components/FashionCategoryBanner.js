"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const toyCategories = [
  {
    name: 'Wooden Blocks',
    img: '/products/toy_blocks.png',
    bg: '#fff8e6',
    categoryRef: 'Wooden Toys',
  },
  {
    name: 'Toy Cars',
    img: '/products/toy_car.png',
    bg: '#ffe8e8',
    categoryRef: 'Toys',
  },
  {
    name: 'Teddy Bears',
    img: '/products/toy_teddy.png',
    bg: '#fdf0e0',
    categoryRef: 'Toys',
  },
  {
    name: 'Puzzles',
    img: '/products/toy_puzzle.png',
    bg: '#e8f8e8',
    categoryRef: 'Toys',
  },
  {
    name: 'Play Mats',
    img: '/products/toy_playmat.png',
    bg: '#e6f4ff',
    categoryRef: 'Baby Essentials',
  },
  {
    name: 'Toy Kitchen',
    img: '/products/toy_kitchen.png',
    bg: '#fff0f6',
    categoryRef: 'Toys',
  },
  {
    name: 'RC Cars',
    img: '/products/toy_rc_car.png',
    bg: '#fff3e0',
    categoryRef: 'Toys',
  },
  {
    name: 'Building Bricks',
    img: '/products/toy_lego.png',
    bg: '#f0e8ff',
    categoryRef: 'Toys',
  },
  {
    name: 'Dolls',
    img: '/products/toy_doll.png',
    bg: '#ffe4ef',
    categoryRef: 'Toys',
  },
  {
    name: 'Bat & Ball',
    img: '/products/toy_bat_ball.png',
    bg: '#e8ffee',
    categoryRef: 'Toys',
  },
  {
    name: 'Art & Craft',
    img: '/products/toy_art_set.png',
    bg: '#e8f0ff',
    categoryRef: 'Stationery',
  },
  {
    name: 'Board Games',
    img: '/products/toy_board_game.png',
    bg: '#fff9e6',
    categoryRef: 'Toys',
  },
];

export default function FashionCategoryBanner({ onCategorySelect, onShopClick }) {
  const handleCategoryClick = (cat) => {
    if (onCategorySelect) onCategorySelect(cat.categoryRef);
    if (onShopClick) onShopClick();
  };

  return (
    <div className="w-full space-y-0" data-aos="fade-up">
      {/* ── Wide Hero Banner ── */}
      <div
        className="relative w-full rounded-[1.5rem] overflow-hidden min-h-[180px] max-h-[280px] sm:min-h-[200px]"
      >
        {/* Background image */}
        <Image
          src="/banner/categories_banner.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* Overlay for readable text */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(105deg, rgba(30, 15, 10, 0.82) 0%, rgba(60, 25, 15, 0.55) 45%, rgba(20, 15, 40, 0.35) 100%)',
          }}
        />

        {/* Text content */}
        <div className="relative z-20 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] px-6 sm:px-10 py-8 sm:py-10 w-full sm:w-[62%] max-w-xl">
          <span
            className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-2"
            style={{ color: '#f59e0b' }}
          >
            ✦ Shop By Category
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.35)' }}
          >
            TOYS &amp; GAMES
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-2 leading-relaxed font-normal">
            Fun &amp; learning for every little one!
          </p>
          <button
            onClick={onShopClick}
            className="mt-5 flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl text-white text-sm font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 hover:brightness-110 shadow-lg"
            style={{ background: '#e11d48' }}
          >
            SHOP NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Categories Grid (2 rows × 6 cols) ── */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border border-zinc-200 rounded-[1.5rem] overflow-hidden mt-4"
        style={{ background: '#fff' }}
      >
        {toyCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(cat)}
            className="group flex flex-col items-center justify-end pb-3 pt-2 px-1 relative border-r border-b border-zinc-100 last:border-r-0 transition-all duration-200 hover:bg-zinc-50 active:scale-95"
            style={{
              borderRight: (idx + 1) % 6 === 0 ? 'none' : undefined,
              borderBottom: idx >= 6 ? 'none' : undefined,
            }}
          >
            {/* Image box */}
            <div
              className="relative w-full aspect-square overflow-hidden flex items-center justify-center mb-2 rounded-xl"
              style={{ background: cat.bg }}
            >
              <div className="relative w-[80%] h-[80%] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <span className="text-[10px] sm:text-xs font-semibold text-zinc-800 text-center leading-tight group-hover:text-[#e11d48] transition-colors">
              {cat.name}
            </span>
            <span className="text-[9px] text-zinc-400 font-normal flex items-center gap-0.5 mt-0.5">
              View <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
