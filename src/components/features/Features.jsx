import React from 'react';
import { Brain, FileText, Zap, CheckCircle, Clock, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const featuresList = [
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get detailed feedback on your research paper in minutes, not days or weeks."
  },
  {
    icon: FileText,
    title: "Comprehensive Review",
    description: "Analysis of methodology, structure, citations, and writing style."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "AI-powered checks for accuracy, consistency, and academic standards."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Submit your papers anytime and receive instant feedback."
  },
  {
    icon: Shield,
    title: "Privacy Guaranteed",
    description: "Your research is protected with enterprise-grade security and encryption."
  },
  {
    icon: Brain,
    title: "Smart Suggestions",
    description: "Get intelligent recommendations to improve your paper's impact."
  }
];

function Features() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;