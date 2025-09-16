"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Project Manager, Reliance Infra",
      feedback:
        "Kailash delivered our project ahead of schedule with excellent quality. Their expertise in infrastructure is unmatched.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Singh",
      role: "Director, Adani Solar",
      feedback:
        "The solar EPC solutions were world-class. Kailash is truly committed to sustainability and innovation.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Arjun Mehta",
      role: "CEO, L&T Constructions",
      feedback:
        "Their building solutions inspire growth. We value Kailash as a long-term trusted partner.",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 sec auto slide
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800">
          What Our <span className="text-blue-900">Clients Say</span>
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-20 h-20 rounded-full mb-6 border-4 border-blue-900 shadow-md object-cover"
                />
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                  “{testimonials[index].feedback}”
                </p>
                <h4 className="text-xl font-semibold text-gray-800">
                  {testimonials[index].name}
                </h4>
                <span className="text-sm text-gray-500">
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-blue-900" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
