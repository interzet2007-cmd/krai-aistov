"use client";

import { useState } from "react";

const stops = [
  ["01", "Санкт-Петербург", "Сбор и выезд", "https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&w=500&q=85"],
  ["02", "Мемориал в Долине", "Память и тишина", "/krai-aistov/route-memorial.jpg"],
  ["03", "Акваферма", "Завтрак и знакомство", "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=500&q=85"],
  ["04", "Сланцы", "Музей и история города", "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=500&q=85"],
  ["05", "Доложская пещера", "Подземный мир", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=85"],
  ["06", "Заручье", "Живописные виды", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=85"],
  ["07", "Кошелевичи", "Забытые деревни", "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=500&q=85"],
  ["08", "Коленец", "Ужин у печи и отдых", "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=500&q=85"],
];

const gallery = [
  ["Луговые цветы", "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85"],
  ["Дорога к храму", "https://images.unsplash.com/photo-1548625361-9874e6f0a3b0?auto=format&fit=crop&w=900&q=85"],
  ["Северная архитектура", "https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&w=900&q=85"],
  ["Домашний пирог", "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=85"],
  ["Тихий вечер", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"],
];

export default function Home() {
  const [guests, setGuests] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const total = (22500 * guests).toLocaleString("ru-RU");

  const goToBooking = () => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Номадика — на главную">
          <span className="brand-mark">Н</span>
          <span><b>НОМАДИКА</b><small>путешествия</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню" aria-expanded={menuOpen}>☰</button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Главное меню">
          <a href="#about">О путешествии</a><a href="#route">Маршрут</a><a href="#program">Программа</a>
          <a href="#included">Что входит</a><a href="#gallery">Фото</a><a href="#reviews">Отзывы</a><a href="#contacts">Контакты</a>
        </nav>
        <button className="button compact" onClick={goToBooking}>Забронировать</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Двухдневная экспедиция</p>
          <h1>Край аистов</h1>
          <p className="lead">Настоящая Ленинградская область: люди, места и истории, которые остаются с тобой.</p>
          <div className="facts"><span>▣ <b>30–31 июля</b></span><span>♧ <b>до 8 человек</b></span><span>⌖ <b>Сланцевский район</b></span></div>
          <div className="hero-actions"><button className="button" onClick={goToBooking}>Забронировать место</button><a className="button secondary" href="#route">Смотреть маршрут ↓</a></div>
        </div>
      </section>

      <section className="benefits" id="included">
        <article><i>▰</i><span><b>Трансфер</b><small>на комфортном авто</small></span></article>
        <article><i>♜</i><span><b>Питание</b><small>на протяжении двух дней</small></span></article>
        <article><i>⌂</i><span><b>Проживание</b><small>уютная ночёвка</small></span></article>
        <article><i>♙</i><span><b>Экскурсии</b><small>с сопровождением</small></span></article>
        <article><i>♧</i><span><b>Камерная группа</b><small>не более 8 человек</small></span></article>
      </section>

      <section className="about section" id="about">
        <div className="about-copy"><p className="eyebrow muted">Не экскурсия, а встреча</p><h2>Мы не возим туристов.<br/>Мы показываем настоящую Ленинградскую область.</h2><p>Здесь нет толп и автобусных экскурсий. Только живые истории, атмосферные места и люди, которые любят свой край. Путешествие, которое наполнит вас впечатлениями и перезагрузит на все сто.</p><a href="#program" className="text-link">Узнать больше о программе →</a></div>
        <figure className="about-photo"><img src="/krai-aistov/about-group.jpg" alt="Участники путешествия у деревянного дома"/><figcaption>Камерная группа и тёплые встречи по пути</figcaption></figure>
      </section>

      <section className="route section" id="route">
        <div className="section-heading"><div><p className="eyebrow">Путь за два дня</p><h2>Маршрут путешествия</h2></div><a href="#program" className="text-link gold">Смотреть программу →</a></div>
        <div className="route-list">{stops.map(([num, title, note, image], index) => <article className="stop" key={title}><div className="stop-number">{num}</div><img src={image} alt=""/><h3>{title}</h3><p>{note}</p>{index < stops.length - 1 && <span className="route-arrow">→</span>}</article>)}</div>
      </section>

      <section className="media section" id="gallery">
        <div><p className="eyebrow muted">Моменты поездок</p><h2>Фотографии</h2><div className="gallery">{gallery.map(([title, src]) => <img src={src} alt={title} key={title}/>)}</div></div>
        <div id="program"><p className="eyebrow muted">Почувствуйте атмосферу</p><h2>Смотрите видео</h2><div className="video-card"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85" alt="Река среди лесов"/><button aria-label="Воспроизвести видео">▶</button><span>01:15 · край, который хочется услышать</span></div></div>
      </section>

      <section className="testimonial section" id="reviews"><blockquote>«Уехали на два дня, а ощущение — будто прожили маленькую жизнь. Никакой суеты, много настоящих разговоров и невероятная природа».</blockquote><p>— Марина, участница экспедиции</p></section>

      <section className="booking-section" id="booking">
        <div className="price-copy"><p className="eyebrow">Стоимость путешествия</p><h2>22 500 ₽ <small>за 1 человека</small></h2><p>Всё включено: трансфер, питание, экскурсии и проживание.</p><p>Камерная группа до 8 человек.</p></div>
        <form className="booking-card" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <div><p className="eyebrow muted">Забронировать место</p><label>Ваше имя<input required placeholder="Как к вам обращаться"/></label><label>Телефон<input required type="tel" placeholder="+7 900 000-00-00"/></label><div className="counter"><span>Количество участников</span><button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button><b>{guests}</b><button type="button" onClick={() => setGuests(Math.min(8, guests + 1))}>+</button></div></div>
          <div className="checkout"><span>Итого к оплате</span><strong>{total} ₽</strong><button className="button" type="submit">Оставить заявку</button><small>Оплата подключается после согласования деталей</small></div>
          {sent && <p className="success" role="status">Спасибо! Заявка готова — менеджер свяжется с вами, чтобы подтвердить места.</p>}
        </form>
      </section>

      <footer id="contacts"><a className="brand footer-brand" href="#top"><span className="brand-mark">Н</span><span><b>НОМАДИКА</b><small>путешествия</small></span></a><div><b>Контакты</b><a href="tel:+79817570364">+7 981 757-03-64</a><a href="mailto:nomadica@yandex.ru">nomadica@yandex.ru</a></div><div><b>Документы</b><a href="#">Публичная оферта</a><a href="#">Политика конфиденциальности</a></div><p>© Номадика, 2026</p></footer>
    </main>
  );
}
