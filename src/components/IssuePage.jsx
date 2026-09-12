import { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import { BUY_LINK } from '../data/issues.js';

export default function IssuePage({ issue }) {
  const [openSrc, setOpenSrc] = useState(null);

  return (
    <section id="view-magazines" className="view">
      <article className="issue">
        <a className="back" href="#magazines">← все выпуски</a>

        <div className="issue-layout">
          <div className="issue-hero">
            <img className="main-cover" src={issue.card} alt={issue.fullTitle} />
          </div>

          <div className="issue-body">
            <h2 className="issue-title">{issue.fullTitle}</h2>
            <p className={issue.plainDesc ? 'gap' : 'desc'}>{issue.description}</p>

            {issue.soldOut ? (
              <p className="status">Распродано</p>
            ) : (
              <>
                {issue.price && <p className="price">Стоимость - {issue.price}р</p>}
                <p className="buy">
                  для покупки:{' '}
                  <a href={BUY_LINK} target="_blank" rel="noopener noreferrer">
                    {BUY_LINK.replace('https://', '')}
                  </a>
                </p>
              </>
            )}
          </div>
        </div>

        {issue.spreads.length > 0 && (
          <>
            <p className="spreads-title">Развороты</p>
            <ul className="spreads">
              {issue.spreads.map((s, i) => (
                <li key={s.full}>
                  <a
                    href={s.full}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenSrc(s.full);
                    }}
                  >
                    <img src={s.thumb} alt={`${issue.fullTitle}, разворот ${i + 1}`} />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>

      {openSrc && <Lightbox src={openSrc} onClose={() => setOpenSrc(null)} />}
    </section>
  );
}
