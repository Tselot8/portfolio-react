import React from 'react';
import {
  Code2,
  LayoutDashboard,
  Rocket,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-5 bg-dark-grey text-light">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5">What I Offer</h2>
        <div className="row g-4">
          {/* Web Development */}
          <div className="col-md-4">
            <div className="glass-card h-100 p-4 rounded-4">
              <Code2 size={40} className="text-white mb-3 svg-glow" />
              <h3 className="h5 mb-3">Web Development</h3>
              <p className="text-white service-desc">
                I craft responsive, performant web applications using React,
                Next.js, and modern CSS. My focus is on clean architecture,
                reusable components, and intuitive user experiences that scale.
              </p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="col-md-4">
            <div className="glass-card h-100 p-4 rounded-4">
              <LayoutDashboard size={40} className="text-white mb-3 svg-glow" />
              <h3 className="h5 mb-3">UI/UX Design</h3>
              <p className="text-white service-desc">
                From wireframes to polished interfaces, I design with empathy —
                ensuring accessibility, ease of use, and strong visual
                hierarchy. I prioritize both form and function for real users.
              </p>
            </div>
          </div>

          {/* Web Optimization */}
          <div className="col-md-4">
            <div className="glass-card h-100 p-4 rounded-4">
              <Rocket size={40} className="text-white mb-3 svg-glow" />
              <h3 className="h5 mb-3">Web Optimization</h3>
              <p className="text-white service-desc">
                I audit and enhance websites for speed, responsiveness, and SEO.
                I implement lazy loading, code splitting, and performance
                metrics to improve discoverability and reduce bounce rates.
              </p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="col-md-4">
            <div className="glass-card h-100 p-4 rounded-4">
              <Smartphone size={40} className="text-white mb-3 svg-glow" />
              <h3 className="h5 mb-3">Mobile App Development</h3>
              <p className="text-white service-desc">
                I build cross-platform mobile apps using Flutter and React
                Native. From onboarding flows to backend integration, I ensure
                apps feel native, responsive, and user-friendly.
              </p>
            </div>
          </div>

          {/* Cybersecurity Basics */}
          <div className="col-md-4">
            <div className="glass-card h-100 p-4 rounded-4">
              <ShieldCheck size={40} className="text-white mb-3 svg-glow" />
              <h3 className="h5 mb-3">Basics in Cybersecurity</h3>
              <p className="text-white service-desc">
                I advocate for secure development by following best practices
                like input validation, HTTPS, and safe authentication. I also
                help teams and users stay aware of phishing and data protection
                basics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
