import { useEffect, useState } from 'react';

const SECTIONS = ['about', 'magazines', 'social'];

function parse() {
  // при пререндере window нет — считаем, что открыт раздел «О нас»
  if (typeof window === 'undefined') return { section: 'about', param: null };
  const hash = window.location.hash.replace(/^#/, '') || 'about';
  const [section, param] = hash.split('/');
  return SECTIONS.includes(section)
    ? { section, param: param || null }
    : { section: 'about', param: null };
}

/** Простой роутер по hash: #about, #magazines, #magazines/<slug>, #social */
export function useHashRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
