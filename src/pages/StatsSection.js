import React, { useState, useEffect, useRef } from "react";
import "../styles/StatsSection.css";
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Configuration des statistiques
  const stats = [
    { number: 200, suffix: "+", label: "Qualified Employees" },
    { number: 30, suffix: "K+", label: "Successful Projects" },
    { number: 60, suffix: "+", label: "Years in Business" },
    { number: 200, suffix: "+", label: "Qualified Employees" },
    { number: 30, suffix: "K+", label: "Successful Projects" },
    { number: 60, suffix: "+", label: "Years in Business" }
  ];

  // Observer pour déclencher l'animation lorsque la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              number={stat.number} 
              suffix={stat.suffix} 
              label={stat.label} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant pour chaque élément de statistique
const StatItem = ({ number, suffix, label, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // durée de l'animation en ms
  const frameRate = 30; // images par seconde
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = number / totalFrames;

  useEffect(() => {
    if (isVisible) {
      let currentCount = 0;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        currentCount = Math.min(number, Math.round(increment * frame));
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(timer);
        }
      }, 1000 / frameRate);

      return () => clearInterval(timer);
    }
  }, [isVisible, number, increment, totalFrames]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatsSection;