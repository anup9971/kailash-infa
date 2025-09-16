"use client";

import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = [
    { name: "Reliance", logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Reliance_Industries_Logo.svg" },
    { name: "Adani", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Adani_Logo.png" },
    { name: "Tata", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tata_logo.svg" },
    { name: "L&T", logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/L%26T_Logo.png" },
    { name: "JSW", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/JSW_Group_logo.png" },
    { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mahindra_logo.svg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our <span className="text-blue-900">Clients</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

