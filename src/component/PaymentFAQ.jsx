import React from "react";

const PaymentFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Payment & Enrollment FAQs
        </h2>

        {/* FAQ Layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between cursor-pointer"
            >
              <p className="text-gray-800 font-medium">
                Frequently asked payment or enrollment question
              </p>
              <span className="text-gray-400 text-xl">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentFAQ;
