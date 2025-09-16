"use client";

import AboutSection from "@/components/home/AboutSection";
import ClientsSection from "@/components/home/ClientsSection";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialsSection from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-[90vh] flex items-center justify-center text-center px-6">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Shaping Tomorrow with Infrastructure, Solar, and Financial Excellence.
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Delivering Innovation, Sustainability & Growth
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
      </section> */}
      <HeroSection/>

      {/* Services Highlights */}
      {/* <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "Infrastructure Solutions",
              desc: "Engineering the backbone of progress.",
            },
            {
              title: "Solar EPC",
              desc: "Harnessing the power of the sun.",
            },
            {
              title: "Building Structures",
              desc: "Designing spaces that inspire growth.",
            },
            {
              title: "Financial Consultancy",
              desc: "Strategic insights for sustainable returns.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <ServiceSection/>
   
      {/* Why Choose Us */}
      {/* <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Kailash?</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { title: "Trusted Expertise", desc: "Years of proven success." },
            { title: "Sustainable Growth", desc: "Eco-friendly & future-ready." },
            { title: "Proven Results", desc: "Delivering excellence on every project." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
      <WhyChooseUs/>

      {/* About Kailash */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1581092334856-4c4f4a53d5c3"
              alt="About Kailash"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Kailash</h2>
            <p className="text-gray-600 mb-6">
              Kailash is committed to delivering innovative, sustainable, and
              high-quality solutions across infrastructure, renewable energy,
              construction, and financial consultancy. With years of expertise
              and a proven track record, we shape ideas into reality.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
      <AboutSection/>
      <ProductsSection/>
      <ClientsSection/>
      <TestimonialsSection/>
      {/* Call to Action Banner */}
      {/* <section className="py-12 bg-blue-900 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Partner with us to build a sustainable tomorrow.
        </h2>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get in Touch
        </button>
      </section> */}

      {/* Footer */}
    
    </div>
  );
}
