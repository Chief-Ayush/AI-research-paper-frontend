import React from 'react';

function TestimonialCard({ quote, author, role }) {
  return (
    <blockquote className="bg-gray-50 p-6 rounded-xl">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <footer>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500">{role}</p>
      </footer>
    </blockquote>
  );
}

export default TestimonialCard;