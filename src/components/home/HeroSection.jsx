"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Shaping Tomorrow with Infrastructure, Solar, and Financial Excellence.",
    subtitle: "Delivering Innovation, Sustainability & Growth",
    image:
      "/building.jpg",
  },
  {
    id: 2,
    title: "Building Strong Foundations for the Future",
    subtitle: "From Infrastructure to Innovation",
    image:
      "/brige.jpg",
  },
  {
    id: 3,
    title: "Empowering Businesses with Financial Expertise",
    subtitle: "Sustainable & Reliable Consultancy",
    image:
      "/hero1.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-black/50 p-6 rounded-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {slides[current].title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              {slides[current].subtitle}
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Explore Services
              </button>
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
