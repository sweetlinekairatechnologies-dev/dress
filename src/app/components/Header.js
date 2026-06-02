'use client';

import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Home, Package, Headphones } from 'lucide-react';
import Image from 'next/image';
import { useStore } from '../context/StoreContext';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({ onMobileMenuToggle }) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    cartCount,
    wishlist,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setSelectedProduct,
    setCheckedCategories,
  } = useStore();

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    if (setCheckedCategories) {
      setCheckedCategories([categoryName]);
    }
    setSelectedProduct(null);
    router.push('/categories');
  };

  return (
    <>
      {/* Marquee Section */}
      <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 py-2.5 px-4 overflow-hidden z-50">
        <marquee className="text-white text-sm font-bold tracking-wide" direction="left" speed="50">
          🎉 Free Shipping on Orders Above ₹999 | 🎁 Premium Quality Kids Fashion | 📦 Fast & Secure Delivery | 🌟 Shop Now & Get Special Offers!
        </marquee>
      </div>

      {/* Header */}
      <header className="w-full bg-white py-4 px-4 sm:px-8 text-black relative z-30">
      <div className="flex items-center justify-between gap-4">
        
        {/* Logo - always visible */}
        <div
          className="flex items-center cursor-pointer shrink-0 hover:scale-105 transition-transform"
          onClick={() => { setSelectedProduct(null); setSelectedCategory('ALL'); router.push('/'); }}
        >
          <div className="relative h-9 w-28 flex items-center justify-start">
            <Image
              src="/header/VDG Fashion.PNG"
              alt="vdgfashion logo"
              height={36}
              width={110}
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Nav buttons: Home, My Orders, Contact */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => { setSelectedProduct(null); setSelectedCategory('ALL'); router.push('/'); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12.5px] font-bold transition-all ${
              pathname === '/' ? 'bg-rose-50 text-[#e11d48]' : 'text-zinc-600 hover:bg-zinc-100 hover:text-black'
            }`}
          >
            <Home className="h-4 w-4" />
            Home
          </button>
          <button
            onClick={() => { setSelectedProduct(null); router.push('/orders'); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12.5px] font-bold transition-all ${
              pathname?.startsWith('/orders') ? 'bg-rose-50 text-[#e11d48]' : 'text-zinc-600 hover:bg-zinc-100 hover:text-black'
            }`}
          >
            <Package className="h-4 w-4" />
            My Orders
          </button>
          <button
            onClick={() => { setSelectedProduct(null); router.push('/contact'); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12.5px] font-bold transition-all ${
              pathname?.startsWith('/contact') ? 'bg-rose-50 text-[#e11d48]' : 'text-zinc-600 hover:bg-zinc-100 hover:text-black'
            }`}
          >
            <Headphones className="h-4 w-4" />
            Contact
          </button>
        </nav>

        {/* Center Search Input - Matching Wide Search Bar exactly */}
        <div className="flex-1 max-w-xl mx-auto relative hidden md:block">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
            <Search className="h-4.5 w-4.5" />
          </div>
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedProduct(null);
              const catalogPaths = ['/', '/categories', '/best-sellers', '/offers', '/collections', '/new-arrivals', '/wishlist'];
              if (!catalogPaths.includes(pathname)) {
                router.push('/');
              }
            }}
            className="w-full pl-11 pr-4 py-2.5 bg-zinc-100/90 border-0 focus:border-0 rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:bg-white transition-all text-black"
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Mobile search indicator */}
          <div className="md:hidden relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedProduct(null);
                const catalogPaths = ['/', '/categories', '/best-sellers', '/offers', '/collections', '/new-arrivals', '/wishlist'];
                if (!catalogPaths.includes(pathname)) {
                  router.push('/');
                }
              }}
              className="w-28 sm:w-36 pl-8 pr-3 py-1.5 bg-zinc-100 rounded-full text-[10px] font-semibold focus:outline-none focus:ring-1 focus:ring-pink-500/20 text-black"
            />
            <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-400" />
          </div>

          {/* User Account */}
          <button
            onClick={() => router.push('/account')}
            className="p-2 text-zinc-700 hover:bg-zinc-50 hover:text-pink-600 rounded-full transition-all cursor-pointer"
            aria-label="Account Profile"
          >
            <User className="h-5.5 w-5.5" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => router.push('/wishlist')}
            className="relative p-2 text-zinc-700 hover:bg-zinc-50 hover:text-pink-600 rounded-full transition-all"
            aria-label="Wishlist items"
          >
            <Heart className="h-5.5 w-5.5" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#e11d48] text-[8px] font-bold text-white ring-2 ring-white">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => router.push('/cart')}
            className="relative p-2 text-zinc-700 hover:bg-zinc-50 hover:text-pink-600 rounded-full transition-all"
            aria-label="Shopping Cart Bag"
          >
            <ShoppingBag className="h-5.5 w-5.5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#e11d48] text-[8px] font-bold text-white ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

        </div>

      </div>

    </header>
    </>
  );
}
