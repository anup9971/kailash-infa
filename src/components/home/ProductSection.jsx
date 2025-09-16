"use client";

import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    {
      title: "Solar Panels",
      desc: "High-efficiency solar panels designed for maximum energy output and sustainability.",
      img: '/soler-panner.jfif',
    },
    {
      title: "Smart Inverters",
      desc: "Advanced solar inverters that ensure stable, optimized, and intelligent energy flow.",
       img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
      title: "Steel Structures",
      desc: "Durable and cost-effective building structures built for long-lasting strength.",
         img: "/steel.jfif",

    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-14 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our <span className="text-blue-900">Products</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{product.desc}</p>
                <motion.button
                  className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
