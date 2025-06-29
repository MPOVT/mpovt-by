
import { useEffect } from 'react';

const CustomScrollbar = () => {
  useEffect(() => {
    // Добавляем стили скроллбара
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      /* Custom Glassmorphism Scrollbar for entire site */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.5);
      }

      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
      }
    `;
    document.head.appendChild(styleSheet);

    // Добавляем только мобильную логику для скроллбара
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1500);
    };

    if (window.innerWidth < 1280) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth < 1280) {
        window.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimer);
      // Удаляем стили при размонтировании
      if (styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, []);

  return null;
};

export default CustomScrollbar;
