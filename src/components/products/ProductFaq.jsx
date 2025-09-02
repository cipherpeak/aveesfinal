import React from 'react'

const ProductFaq = ({isVisible, faqs, ChevronDown, openFAQ,setOpenFAQ}) => {
  return (
          <section id="faq">
        <div
          id="faq-title"
          className="transition-all duration-1000 mb-6 opacity-100 translate-y-0"

        >
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="divide-y">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              id={`faq-${idx}`}
              className="py-4 transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="flex justify-between w-full text-left text-gray-800 font-medium"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition ${
                    openFAQ === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === idx && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
  )
}

export default ProductFaq