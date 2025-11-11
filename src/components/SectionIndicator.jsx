import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        if (intersectingEntries.length > 0) {
            const strongestEntry = intersectingEntries.reduce((prev, current) => 
                (prev.intersectionRatio > current.intersectionRatio) ? prev : current
            );
            setActiveSection(strongestEntry.target.id);
        }
      },
      { rootMargin: '0px', threshold: 0.5 } 
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="fixed left-0 top-1/2 -translate-y-1/2 pl-4 z-40 hidden md:flex" 
      aria-label="Hauptnavigation der Seite"
    >
      <div className="relative flex flex-col items-center py-2">
        
        {/* Die vertikale Verbindungslinie */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2 rounded-full" />

        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative z-10 my-2 group flex items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              
              {/* Der Indikator-Punkt (geänderte aktive Farbe) */}
              <span 
                className={`
                  w-3 h-3 rounded-full border-2 transition-all duration-300 
                  ${isActive 
                    ? 'bg-blue-500 border-blue-500 scale-125' // Farbe von 600 auf 500 reduziert
                    : 'bg-white border-gray-400 group-hover:border-blue-400 group-hover:bg-blue-100'
                  }
                `}
              />
              
              {/* Das Label (geänderte aktive Farbe) */}
              <span 
                className={`
                  absolute left-full top-1/2 -translate-y-1/2 text-sm font-semibold whitespace-nowrap ml-3 
                  transition-opacity duration-300 ease-out 
                  ${isActive 
                    ? 'opacity-100 text-blue-900 font-bold' // Farbe auf das dunklere Blue-900 für Eleganz
                    : 'opacity-0 text-gray-600 group-hover:opacity-100 group-hover:text-blue-600' // Inaktive Farbe leicht geändert
                  }
                `}
              >
                {section.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default SectionIndicator;