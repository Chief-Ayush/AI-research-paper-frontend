import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsList = [
  {
    quote: "The AI feedback helped me identify critical improvements I had overlooked.",
    author: "Dr. Sarah Chen",
    role: "Stanford University"
  },
  {
    quote: "Reduced my paper revision time by 60%. An invaluable tool for researchers.",
    author: "Prof. Michael Roberts",
    role: "MIT"
  },
  {
    quote: "The most comprehensive automated review system I've ever used.",
    author: "Dr. Emma Thompson",
    role: "Oxford University"
  }
];

function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Researchers Worldwide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;