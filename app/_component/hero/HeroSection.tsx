// "use client";

// import { ArrowLeftIcon, ArrowRighttIcon } from "@/app/_assets/icon";

// export const HeroSection = () => {
//   return (
//     <div className="relative w-full h-96">
//       <div className="absolute inset-0 bg-[url(/Slider.png)] bg-cover bg-center" />
//       <div className="absolute inset-0 bg-black/50" />

//       <div className="relative z-10 flex items-center justify-between h-full w-full px-8">
//         <div className="h-12 w-20">
//          <ArrowLeftIcon/>
//         </div>
//         <h2 className="text-white text-6xl font-bold uppercase">food</h2>
//         <div className="h-12 w-20">
//           <ArrowRighttIcon/>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeftIcon, ArrowRighttIcon } from "@/app/_assets/icon";

const slides = [
  {
    title: "Food",
    image: "/Slider.png",
  },
  {
    title: "Drinks",
    image: "/Slider.png",
  },
  {
    title: "Dessert",
    image: "/Slider.png",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Gestion du slide automatique
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Changement toutes les 5 secondes

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    animateSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    animateSlide(prevIndex);
  };

  const animateSlide = (newIndex: number) => {
    if (!imageRef.current || !titleRef.current) return;

    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setCurrentIndex(newIndex);
      },
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
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
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
      <div className="relative z-10 flex items-center justify-between h-full w-full md:px-8 px-2">
        <button
          onClick={handlePrev}
          className="h-12 w-12 flex items-center justify-center  text-white/40  hover:text-white transition"
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
          onClick={handleNext}
          className="h-12 w-12 flex items-center justify-center  text-white/40  hover:text-white transition"
        >
          <ArrowRighttIcon />
        </button>
      </div>
    </div>
  );
};
