import React from 'react';
import ImageSlider from './components/hero/ImageSlider';
import Features from './components/features/Features';
import Testimonials from './components/testimonials/Testimonials';
import CallToAction from './components/cta/CallToAction';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header>
        <ImageSlider />
      </header>
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;