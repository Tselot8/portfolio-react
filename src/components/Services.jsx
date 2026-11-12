import React from 'react';
import {
  Code2,
  LayoutDashboard,
  Database,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="signal-services">
      <div className="container">
        <div className="signal-section-heading">
          <span className="signal-section-index" aria-hidden="true">03 / SERVICES</span>
          <span className="signal-rule" aria-hidden="true" />
          <h2 className="signal-section-title">What I <span>Offer</span></h2>
        </div>
        <div className="signal-service-list">
          {/* Web Development */}
          <div className="signal-service-item">
            <div className="signal-service-row">
              <span className="signal-service-number" aria-hidden="true">01</span>
              <Code2 size={28} className="signal-service-icon" aria-hidden="true" />
              <h3>Web Development</h3>
              <p className="service-desc">
                I craft responsive, performant web applications using React,
                Next.js, and modern CSS. My focus is on clean architecture,
                reusable components, and intuitive user experiences that scale.
              </p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="signal-service-item">
            <div className="signal-service-row">
              <span className="signal-service-number" aria-hidden="true">02</span>
              <LayoutDashboard size={28} className="signal-service-icon" aria-hidden="true" />
              <h3>UI/UX Design</h3>
              <p className="service-desc">
                From wireframes to polished interfaces, I design with empathy-ensuring 
                accessibility, ease of use, and strong visual
                hierarchy. I prioritize both form and function for real users.
              </p>
            </div>
          </div>

          {/* SQL Knowledge */}
          <div className="signal-service-item">
            <div className="signal-service-row">
              <span className="signal-service-number" aria-hidden="true">03</span>
              <Database size={28} className="signal-service-icon" aria-hidden="true" />
              <h3>SQL Knowledge</h3>
              <p className="service-desc">
                I understand the basics of SQL including writing simple queries, 
                using SELECT, WHERE, JOIN, and organizing data with ORDER BY and 
                GROUP BY. I can perform basic data manipulation and retrieval 
                from relational databases.
              </p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="signal-service-item">
            <div className="signal-service-row">
              <span className="signal-service-number" aria-hidden="true">04</span>
              <Smartphone size={28} className="signal-service-icon" aria-hidden="true" />
              <h3>Mobile App Development</h3>
              <p className="service-desc">
                I build cross-platform mobile apps using Flutter and React
                Native. From onboarding flows to backend integration, I ensure
                apps feel native, responsive, and user-friendly.
              </p>
            </div>
          </div>

          {/* Cybersecurity Basics */}
          <div className="signal-service-item">
            <div className="signal-service-row">
              <span className="signal-service-number" aria-hidden="true">05</span>
              <ShieldCheck size={28} className="signal-service-icon" aria-hidden="true" />
              <h3>Basics in Cybersecurity</h3>
              <p className="service-desc">
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
