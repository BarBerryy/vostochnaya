function cardMeta(issue) {
  if (issue.soldOut) return <span className="sold-out">распродано</span>;
  if (issue.price) return `${issue.price} ₽`;
  return issue.meta;
}

export default function Magazines({ issues }) {
  return (
    <section id="view-magazines" className="view">
      <div className="issue-grid">
        {issues.map((issue) => (
          <a key={issue.slug} className="issue-card" href={`#magazines/${issue.slug}`}>
            <div className="tile">
              <img src={issue.card} alt={issue.fullTitle} />
            </div>
            <h3>{issue.title}</h3>
            <p className="meta">{cardMeta(issue)}</p>
          </a>
        ))}
      </div>

      {/* дополнительный отступ перед блоком, как в HTML (4 × <br></br> = 8 переносов) */}
      <br /><br /><br /><br /><br /><br /><br /><br />

      <div className="purchase-info">
        <p className="desc">Покупка товаров</p>
        <p className="gap">На сайте размещён каталог продукции «Восточная энергия мира вечной борьбы»</p>
        <p className="gap">
          Сайт носит информационный характер и не предусматривает оформление заказа и оплату товара непосредственно
          через сайт.
        </p>
        <p className="gap">
          Для приобретения товара необходимо связаться с продавцом по указанному в карточке товара контакту. Перед
          приобретением согласовываются наличие товара, количество, стоимость, способ оплаты и доставки.
        </p>
        <p className="gap">
          После согласования условий покупки продавец предоставляет покупателю необходимую информацию о товаре и
          условиях его приобретения.
        </p>
        <p className="gap seller">
          Продавец:<br />
          Камалов Нияз Ильфатович<br />
          Физическое лицо, применяющее специальный налоговый режим «Налог на профессиональный доход» (НПД)<br />
          ИНН: 165503851110<br />
          E-mail: <a href="mailto:kamalovniyazilfatovich@gmail.com">kamalovniyazilfatovich@gmail.com</a><br />
          Телефон: <a href="tel:+79015028703">+7 901 502-87-03</a>
        </p>
      </div>
    </section>
  );
}
