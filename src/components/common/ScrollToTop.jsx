import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-6 md:bottom-28 md:right-9 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            p-3 
            rounded-full 
            text-white 
            transition-all duration-300 transform hover:scale-110 focus:outline-none
            bg-slate-600/30 
            backdrop-blur-lg
            border border-white/20
            shadow-lg
            hover:bg-slate-600/50
            hover:border-white/30
          "
          aria-label="Volver arriba"
        >
          <img 
            src="/img/up-chevron.svg" 
            alt="Subir" 
            className="w-6 h-6 filter invert" 
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;