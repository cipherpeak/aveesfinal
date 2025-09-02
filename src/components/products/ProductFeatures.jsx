import React from 'react'

const ProductFeatures = ({ features}) => {
  return (
          <section id="features">
        <div
          id="features-title"
          className="transition-all duration-1000 mb-8 opacity-100 translate-y-0"
        >
          <h2 className="text-2xl font-bold">Why Our Products Stand Out</h2>
          <p className="text-gray-600">
            Crafted for authentic taste, convenience, and better-for-you daily cooking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              id={`feature-${idx}`}
              className="transition-all duration-700 opacity-100 translate-y-0"

              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default ProductFeatures