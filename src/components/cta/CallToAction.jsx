import React from 'react';

function CallToAction() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <div className="bg-indigo-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Research?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of researchers who trust our AI to enhance their papers.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started Free
        </button>
      </div>
    </section>
  );
}

export default CallToAction;