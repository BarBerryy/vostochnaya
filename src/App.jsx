import { useEffect } from 'react';
import { useHashRoute } from './useHashRoute.js';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Magazines from './components/Magazines.jsx';
import IssuePage from './components/IssuePage.jsx';
import Social from './components/Social.jsx';
import { issues } from './data/issues.js';

export default function App() {
  const { section, param } = useHashRoute();

  // при смене раздела возвращаемся к началу страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section, param]);

  let content;
  if (section === 'magazines') {
    const issue = param ? issues.find((i) => i.slug === param) : null;
    content = issue ? <IssuePage issue={issue} /> : <Magazines issues={issues} />;
  } else if (section === 'social') {
    content = <Social />;
  } else {
    content = <About />;
  }

  return (
    <>
      <Header active={section} />
      <main>{content}</main>
    </>
  );
}
