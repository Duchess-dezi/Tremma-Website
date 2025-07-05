import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrollY is beyond 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}
