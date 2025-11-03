"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ArrowLeftIcon, ArrowRighttIcon } from "../../_assets/icon";
import { useRouter } from "next/navigation";

interface Slide {
  title: string;
  href: string;
  image: string;
}

const slides: Slide[] = [
  { title: "Food", image: "/Slider.png", href: "food" },
  { title: "Tech", image: "/Slider4.jpg", href: "tech" },
  { title: "Sport", image: "/Slider3.jpg", href: "lifestyle" },
  { title: "Money", image: "/Slider5.jpg", href: "money" },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  // ✅ Animation du slide
  const animateSlide = useCallback((newIndex: number) => {
    if (!imageRef.current || !titleRef.current) return;

    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => setCurrentIndex(newIndex),
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.in" }
    );

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
  }, []);

  // ✅ Navigation slides avec useCallback pour stabilité
  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    animateSlide(nextIndex);
  }, [currentIndex, animateSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    animateSlide(prevIndex);
  }, [currentIndex, animateSlide]);

  // ✅ Slide automatique toutes les 5 secondes
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [handleNext]);

  const handleClick = (href: string) => {
    router.push(`/${href}`);
  };
  return (
    <div
      className="relative w-full h-96 overflow-hidden flex items-center"
      onClick={() => handleClick(slides[currentIndex].href)}
    >
      {/* Background image */}
      <div
        ref={imageRef}
        key={slides[currentIndex].image}
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-between h-fit w-full md:px-8 px-2 ">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="h-12 w-12 flex items-center justify-center text-white/40 hover:text-white transition cursor-pointer"
        >
          <ArrowLeftIcon />
        </button>

        <h2
          ref={titleRef}
          className="text-white text-6xl font-bold uppercase transition-all"
        >
          {slides[currentIndex].title}
        </h2>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="h-12 w-12 flex items-center justify-center text-white/40 hover:text-white transition cursor-pointer"
        >
          <ArrowRighttIcon />
        </button>
      </div>
    </div>
  );
};
