"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  IndianRupee,
} from 'lucide-react';

const reviews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    title: 'Lovely dress..😍',
    rating: 5,
    name: 'Anonymous',
    product: 'Rose Pink Weave Wrap...',
    decor: 'hearts',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
    title: 'nice fabric, nice fit',
    rating: 5,
    name: 'Preeti .',
    product: 'Navy Blue Peplum Top',
    decor: 'rupee',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    title: 'Very nice coord set loved it',
    rating: 5,
    name: 'Anonymous',
    product: 'Khadi Cream Crop Top',
    decor: 'sparkles',
  },
  {
    id: 4,
    image: '/reviews/review4.jpg',
    title: "I ordered 2 shirts and 2 tops. Love the fabric, it's great quality..",
    rating: 5,
    name: 'Gunasekharan Siva',
    product: 'vdgfashion',
    decor: 'burst',
  },
  {
    id: 5,
    image: '/reviews/review5.jpg',
    title: 'Absolutely loved this piece. The quality, fit, and detailing feel so...',
    rating: 5,
    name: 'Preethi',
    product: 'vdgfashion',
    decor: 'hearts',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    title: 'Perfect fit and amazing design!',
    rating: 5,
    name: 'Shruti',
    product: 'vdgfashion',
    decor: 'sparkles',
  },
];

function ReviewDecor({ type }) {
  if (type === 'hearts') {
    return (
      <>
        <Heart className="absolute top-2 right-2 z-30 w-4 h-4 text-red-500 fill-red-500 drop-shadow" aria-hidden />
        <Heart className="absolute top-8 right-4 z-30 w-3 h-3 text-red-400 fill-red-400" aria-hidden />
        <Heart className="absolute top-14 right-1 z-30 w-5 h-5 text-rose-500 fill-rose-500" aria-hidden />
        <Sparkles className="absolute top-1.5 right-6 z-30 w-3.5 h-3.5 text-white fill-white" aria-hidden />
      </>
    );
  }
  if (type === 'rupee') {
    return (
      <>
        {[10, 22, 34].map((top, i) => (
          <span
            key={i}
            className="absolute z-30 flex h-7 w-7 items-center justify-center rounded-full bg-amber-900 text-amber-50 shadow-md"
            style={{ top: `${top}px`, right: `${4 + i * 5}px` }}
            aria-hidden
          >
            <IndianRupee className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        ))}
        <Sparkles className="absolute top-1.5 right-5 z-30 w-3.5 h-3.5 text-white fill-white" aria-hidden />
      </>
    );
  }
  if (type === 'burst') {
    return (
      <span className="absolute top-10 right-2 z-30 text-2xl leading-none select-none" aria-hidden>
        ✦
      </span>
    );
  }
  return (
    <>
      <Sparkles className="absolute top-2 right-2 z-30 w-4 h-4 text-violet-300 fill-violet-200" aria-hidden />
      <Sparkles className="absolute top-9 right-4 z-30 w-3 h-3 text-fuchsia-300 fill-fuchsia-200" aria-hidden />
      <Sparkles className="absolute top-16 right-1 z-30 w-5 h-5 text-white fill-white" aria-hidden />
    </>
  );
}

function ReviewPortrait({ review }) {
  const isLocal = review.image.startsWith('/');

  return (
    <div className="relative mx-auto w-[120px] sm:w-[135px]">
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.4rem] border-[3px] border-amber-100 shadow-sm"
        style={{
          background: 'linear-gradient(180deg, #fff9c4 0%, #ffedd5 45%, #fde68a 100%)',
        }}
      >
        {isLocal ? (
          <Image
            src={review.image}
            alt=""
            fill
            sizes="135px"
            className="object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = '/products/promo_model.png';
            }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={(e) => {
              e.target.src = '/products/promo_model.png';
            }}
          />
        )}

        <ReviewDecor type={review.decor} />
      </div>
    </div>
  );
}

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="w-full bg-slate-50">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-center text-2xl sm:text-3xl font-black text-zinc-950 mb-8 sm:mb-10 tracking-tight">
          Real Love, Real reviews
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-[32%] -translate-y-1/2 z-20 p-1.5 text-zinc-600 hover:text-zinc-950 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          <div className="flex gap-6 sm:gap-8 pb-2 px-8 sm:px-12 justify-center transition-all duration-500 ease-in-out">
            {visibleReviews.map((review) => (
              <article
                key={review.id}
                className="flex-none w-[148px] sm:w-[168px] flex flex-col items-center animate-fade-in"
              >
                <ReviewPortrait review={review} />

                <div className="mt-4 px-0.5 w-full flex flex-col items-center text-center">
                  <p className="text-zinc-700 text-xs sm:text-sm mb-2 min-h-[36px] line-clamp-2 leading-snug">
                    {review.title}
                  </p>
                  <div className="flex gap-0.5 text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="font-bold text-zinc-900 text-xs sm:text-sm">{review.name}</span>
                    <CheckCircle className="w-3 h-3 fill-black text-white shrink-0" />
                  </div>
                  <p className="text-zinc-500 text-[10px] sm:text-xs">{review.product}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-[32%] -translate-y-1/2 z-20 p-1.5 text-zinc-600 hover:text-zinc-950 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>

        <p className="mt-8 text-center text-base sm:text-lg font-bold text-zinc-950">
          Love fashion? Follow <span className="text-zinc-950">@vdgfashion</span> now!
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
