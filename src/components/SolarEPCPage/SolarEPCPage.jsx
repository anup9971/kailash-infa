"use client";
import { motion } from "framer-motion";

export default function SolarEPCPage() {
  const sections = [
    {
      title: "Solar EPC (Engineering, Procurement & Construction)",
      desc: "We provide end-to-end EPC solutions, managing every stage of solar projects. From design and engineering to procurement and construction, we ensure cost-effective and high-quality solar installations with timely delivery.",
      img: "/soler2.jfif",
    },
    {
      title: "Solar Modules",
      desc: "High-performance solar modules form the heart of our systems. We use Tier-1 panels with maximum efficiency, durability, and long-term warranties to ensure reliable power generation for decades.",
         img: "/solermodule.jpg",
    

    },
    {
      title: "Inverters",
      desc: "Our advanced inverters convert DC into AC with maximum efficiency. With real-time monitoring, safety features, and optimized performance, they ensure stable electricity supply and reduced energy losses.",
           img: "/groth.jfif",

    },
    {
      title: "Balance of System (B.O.S)",
      desc: "From mounting structures to cabling, transformers, and safety devices, we deliver robust Balance of System components. Each part is carefully engineered to ensure long life, safety, and optimal power generation.",
      img: "/BOS.avif",
    },
    {
      title: "Financial Structures",
      desc: "We support clients with project financing, subsidies, and strategic investment structures. Our financial expertise ensures maximum ROI and sustainable solar project growth.",
                img: "/finical.jpg",

    },
    {
      title: "Solar Products & Solutions",
      desc: "Our product portfolio covers on-grid, off-grid, and hybrid solar solutions. From residential rooftops to utility-scale projects, we provide customized products that meet unique energy demands.",
         img: "/soler-product.avif",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Solar EPC Solutions
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-yellow-100">
          Empowering a sustainable future through world-class solar technology and financial innovation.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-16">
        {sections.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
