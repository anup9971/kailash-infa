"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaSolarPanel, FaBuilding, FaChartLine, FaTools } from "react-icons/fa";

export default function ServiceSection() {
  let router= useRouter()
  const services = [
    {
      title: "Infrastructure Solutions",
      link:"/infrastructure-solutions",
      desc: "Engineering the backbone of progress.",
      icon: "/building.jpg",
      // icon: <FaTools className="text-5xl text-indigo-500 mb-4" />,
    },
    {
      title: "Solar EPC",
      link:"/solar-EPC",
      desc: "Harnessing the power of the sun.",
      icon: "/soler.png",
      // icon: <FaSolarPanel className="text-5xl text-yellow-500 mb-4" />,
    },
    {
      title: "Building Structures",
      link:"/building-structures",
      desc: "Designing spaces that inspire growth.",
      icon: "/building.jpg",
      // icon: <FaBuilding className="text-5xl text-green-500 mb-4" />,
    },
    {
      title: "Financial Solutions",
      link:"/financial-solutions",
      desc: "Strategic insights for sustainable returns.",
      // icon: <FaChartLine className="text-5xl text-blue-500 mb-4" />,
      icon: "/finical.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            onClick={()=> router.push(`${item.link}`)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
      

            <div className="flex h-[150px] w-full">
              <img src={item.icon} alt="" className="w-100 h-auto object-cover" />
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
