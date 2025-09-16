import React from 'react'

export default function page() {
  return (
 <>
 <section className="pt-32 pb-16 px-6 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto mb-12">
          Kailash is committed to delivering innovative, sustainable, and high-quality
          solutions across infrastructure, renewable energy, construction, and financial
          consultancy. With years of expertise and a proven track record, we shape ideas into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">Vision</h3>
            <p>To lead the transformation of infrastructure and energy through sustainable practices.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">Mission</h3>
            <p>Deliver excellence in every project while fostering innovation, trust, and long-term growth.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">Core Values</h3>
            <p>Innovation | Sustainability | Integrity | Growth</p>
          </div>
        </div>
      </section>
 </>
  )
}
