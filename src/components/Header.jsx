const NAV = [
  { id: 'about', label: 'о нас' },
  { id: 'magazines', label: 'выпуски (и прочее)' },
  { id: 'social', label: 'социальные сети' },
];

export default function Header({ active }) {
  return (
    <header className="site-header">
      <nav>
        <ul className="nav">
          {NAV.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={active === item.id ? 'active' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
