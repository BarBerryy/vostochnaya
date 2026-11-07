const LINKS = [
  { label: 'Вконтакте', href: 'https://vk.com/vostochnayaenergya' },
  { label: 'Телеграм', href: 'https://t.me/vostochnayaenergya' },
];

const EMAIL = 'vostochnayaenergya@gmail.com';

export default function Social() {
  return (
    <section id="view-social" className="view">
      <ul className="social-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="social-contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </section>
  );
}
