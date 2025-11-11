import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa'; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sorgt für eine sanfte Animation
    });
  };

  // Logik, um den Button sichtbar zu machen, wenn man scrollt
  useEffect(() => {
    const toggleVisibility = () => {
      // Button wird sichtbar, wenn man mindestens 300px nach unten gescrollt hat
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup-Funktion, um den Event Listener beim Unmounten zu entfernen
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Framer Motion für die Animation des Ein- und Ausblendens
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50" // Feste Position unten rechts
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="p-4 bg-blue-600 cursor-pointer text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Zurück nach oben scrollen"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default BackToTopButton;