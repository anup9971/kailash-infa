"use client";
import { motion } from "framer-motion";

export default function InfrastructurePage() {
  const sections = [
    {
      title: "Roads & Highways",
      desc: "We specialize in designing and constructing durable, safe, and sustainable roads and highways. Our solutions ensure seamless connectivity, reduced travel time, and enhanced trade routes for economic growth.",
      img: "/roads.jpg",
    },
    {
      title: "Bridges & Flyovers",
      desc: "Our expertise in bridge and flyover construction helps cities overcome connectivity challenges. With innovative engineering and modern materials, we deliver strong and future-ready structures.",
      img: '/brige.jpg',
    },
    {
      title: "Urban Buildings & Structures",
      desc: "From commercial complexes to public institutions, we create architectural landmarks that combine aesthetics with structural strength. Each project is built to inspire growth and innovation.",
      img: "/building.jpg",
    },
    {
      title: "Smart Infrastructure",
      desc: "We integrate technology into infrastructure development, ensuring energy-efficient lighting, modern traffic systems, and eco-friendly designs that shape future-ready cities.",
      img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold pt-10 text-center text-blue-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Infrastructure Solutions
        </motion.h1>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
