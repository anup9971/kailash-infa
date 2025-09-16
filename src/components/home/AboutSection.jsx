"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Image Side */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src='/building.jpg'
            alt="About Kailash"
            className="rounded-3xl shadow-2xl object-cover w-full"
          />
          {/* Decorative gradient blob */}
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            About <span className="text-blue-900">Kailash</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Kailash is committed to delivering <span className="font-semibold">innovative, sustainable,</span> 
            and <span className="font-semibold">high-quality</span> solutions across infrastructure, 
            renewable energy, construction, and financial consultancy.  
            With years of expertise and a proven track record, we shape <span className="italic">ideas into reality</span>.
          </p>
          <motion.button
            className="bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
