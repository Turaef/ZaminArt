import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHero() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#hero') {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
} 