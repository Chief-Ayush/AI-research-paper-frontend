import React from 'react';

const footerSections = [
  {
    title: "AI Paper Reviewer",
    content: "Advancing research through intelligent analysis",
    isMain: true
  },
  {
    title: "Features",
    links: ["Paper Analysis", "Citation Check", "Style Review", "Methodology Assessment"]
  },
  {
    title: "Resources",
    links: ["Documentation", "API Access", "Support Center", "Pricing"]
  },
  {
    title: "Company",
    links: ["About Us", "Contact", "Privacy Policy", "Terms of Service"]
  }
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              {section.isMain ? (
                <p className="text-sm">{section.content}</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} AI Paper Reviewer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;