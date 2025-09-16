"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaLeaf, FaAward } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trusted Expertise",
      desc: "Years of proven success.",
      // icon: <FaUserTie className="text-5xl text-indigo-500 mb-4" />,
      icon: "/trust.jpg",
    },
    {
      title: "Sustainable Growth",
      desc: "Eco-friendly & future-ready.",
      icon: "/groth.jfif",
      // icon: <FaLeaf className="text-5xl text-green-500 mb-4" />,
    },
    {
      title: "Proven Results",
      desc: "Delivering excellence on every project.",
      icon: "/trust.jpg",
      // icon: <FaAward className="text-5xl text-yellow-500 mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Why Choose Kailash?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="flex justify-center">
              <img src={item.icon} alt="" srcset="" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
