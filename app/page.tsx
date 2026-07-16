"use client";

import { useState } from "react";

const stops = [
  ["01", "РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі", "РЎР±РѕСЂ Рё РІС‹РµР·Рґ", "https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&w=500&q=85"],
  ["02", "РњРµРјРѕСЂРёР°Р» РІ Р”РѕР»РёРЅРµ", "РџР°РјСЏС‚СЊ Рё С‚РёС€РёРЅР°", "/krai-aistov/route-memorial.jpg"],
  ["03", "РђРєРІР°С„РµСЂРјР°", "Р—Р°РІС‚СЂР°Рє Рё Р·РЅР°РєРѕРјСЃС‚РІРѕ", "/krai-aistov/route-aquafarm.jpg"],
  ["04", "РЎР»Р°РЅС†С‹", "РњСѓР·РµР№ Рё РёСЃС‚РѕСЂРёСЏ РіРѕСЂРѕРґР°", "/krai-aistov/route-slantsy-museum.jpg"],
  ["05", "Р”РѕР»РѕР¶СЃРєР°СЏ РїРµС‰РµСЂР°", "РџРѕРґР·РµРјРЅС‹Р№ РјРёСЂ", "/krai-aistov/route-cave.jpg"],
  ["06", "Р—Р°Р¶СѓРїР°РЅСЊРµ", "Р–РёРІРѕРїРёСЃРЅС‹Рµ РІРёРґС‹", "/krai-aistov/route-zazhupanye.jpg"],
  ["07", "РљРѕС€РµР»РµРІРёС‡Рё", "Р—Р°Р±С‹С‚С‹Рµ РґРµСЂРµРІРЅРё", "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=500&q=85"],
  ["08", "РљРѕР»РµРЅРµС†", "РЈР¶РёРЅ Сѓ РїРµС‡Рё Рё РѕС‚РґС‹С…", "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=500&q=85"],
];

const gallery = [
  ["Р›СѓРіРѕРІС‹Рµ С†РІРµС‚С‹", "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85"],
  ["Р”РѕСЂРѕРіР° Рє С…СЂР°РјСѓ", "https://images.unsplash.com/photo-1548625361-9874e6f0a3b0?auto=format&fit=crop&w=900&q=85"],
  ["РЎРµРІРµСЂРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°", "https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&w=900&q=85"],
  ["Р”РѕРјР°С€РЅРёР№ РїРёСЂРѕРі", "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=85"],
  ["РўРёС…РёР№ РІРµС‡РµСЂ", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"],
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
        <a className="brand" href="#top" aria-label="РќРѕРјР°РґРёРєР° вЂ” РЅР° РіР»Р°РІРЅСѓСЋ">
          <span className="brand-mark">Рќ</span>
          <span><b>РќРћРњРђР”РРљРђ</b><small>РїСѓС‚РµС€РµСЃС‚РІРёСЏ</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="РћС‚РєСЂС‹С‚СЊ РјРµРЅСЋ" aria-expanded={menuOpen}>в°</button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ">
          <a href="#about">Рћ РїСѓС‚РµС€РµСЃС‚РІРёРё</a><a href="#route">РњР°СЂС€СЂСѓС‚</a><a href="#program">РџСЂРѕРіСЂР°РјРјР°</a>
          <a href="#included">Р§С‚Рѕ РІС…РѕРґРёС‚</a><a href="#gallery">Р¤РѕС‚Рѕ</a><a href="#reviews">РћС‚Р·С‹РІС‹</a><a href="#contacts">РљРѕРЅС‚Р°РєС‚С‹</a>
        </nav>
        <button className="button compact" onClick={goToBooking}>Р—Р°Р±СЂРѕРЅРёСЂРѕРІР°С‚СЊ</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Р”РІСѓС…РґРЅРµРІРЅР°СЏ СЌРєСЃРїРµРґРёС†РёСЏ</p>
          <h1>РљСЂР°Р№ Р°РёСЃС‚РѕРІ</h1>
          <p className="lead">РќР°СЃС‚РѕСЏС‰Р°СЏ Р›РµРЅРёРЅРіСЂР°РґСЃРєР°СЏ РѕР±Р»Р°СЃС‚СЊ: Р»СЋРґРё, РјРµСЃС‚Р° Рё РёСЃС‚РѕСЂРёРё, РєРѕС‚РѕСЂС‹Рµ РѕСЃС‚Р°СЋС‚СЃСЏ СЃ С‚РѕР±РѕР№.</p>
          <div className="facts"><span>в–Ј <b>30вЂ“31 РёСЋР»СЏ</b></span><span>в™§ <b>РґРѕ 8 С‡РµР»РѕРІРµРє</b></span><span>вЊ– <b>РЎР»Р°РЅС†РµРІСЃРєРёР№ СЂР°Р№РѕРЅ</b></span></div>
          <div className="hero-actions"><button className="button" onClick={goToBooking}>Р—Р°Р±СЂРѕРЅРёСЂРѕРІР°С‚СЊ РјРµСЃС‚Рѕ</button><a className="button secondary" href="#route">РЎРјРѕС‚СЂРµС‚СЊ РјР°СЂС€СЂСѓС‚ в†“</a></div>
        </div>
      </section>

      <section className="benefits" id="included">
        <article><i>в–°</i><span><b>РўСЂР°РЅСЃС„РµСЂ</b><small>РЅР° РєРѕРјС„РѕСЂС‚РЅРѕРј Р°РІС‚Рѕ</small></span></article>
        <article><i>в™њ</i><span><b>РџРёС‚Р°РЅРёРµ</b><small>РЅР° РїСЂРѕС‚СЏР¶РµРЅРёРё РґРІСѓС… РґРЅРµР№</small></span></article>
        <article><i>вЊ‚</i><span><b>РџСЂРѕР¶РёРІР°РЅРёРµ</b><small>СѓСЋС‚РЅР°СЏ РЅРѕС‡С‘РІРєР°</small></span></article>
        <article><i>в™™</i><span><b>Р­РєСЃРєСѓСЂСЃРёРё</b><small>СЃ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµРј</small></span></article>
        <article><i>в™§</i><span><b>РљР°РјРµСЂРЅР°СЏ РіСЂСѓРїРїР°</b><small>РЅРµ Р±РѕР»РµРµ 8 С‡РµР»РѕРІРµРє</small></span></article>
      </section>

      <section className="about section" id="about">
        <div className="about-copy"><p className="eyebrow muted">РќРµ СЌРєСЃРєСѓСЂСЃРёСЏ, Р° РІСЃС‚СЂРµС‡Р°</p><h2>РњС‹ РЅРµ РІРѕР·РёРј С‚СѓСЂРёСЃС‚РѕРІ.<br/>РњС‹ РїРѕРєР°Р·С‹РІР°РµРј РЅР°СЃС‚РѕСЏС‰СѓСЋ Р›РµРЅРёРЅРіСЂР°РґСЃРєСѓСЋ РѕР±Р»Р°СЃС‚СЊ.</h2><p>Р—РґРµСЃСЊ РЅРµС‚ С‚РѕР»Рї Рё Р°РІС‚РѕР±СѓСЃРЅС‹С… СЌРєСЃРєСѓСЂСЃРёР№. РўРѕР»СЊРєРѕ Р¶РёРІС‹Рµ РёСЃС‚РѕСЂРёРё, Р°С‚РјРѕСЃС„РµСЂРЅС‹Рµ РјРµСЃС‚Р° Рё Р»СЋРґРё, РєРѕС‚РѕСЂС‹Рµ Р»СЋР±СЏС‚ СЃРІРѕР№ РєСЂР°Р№. РџСѓС‚РµС€РµСЃС‚РІРёРµ, РєРѕС‚РѕСЂРѕРµ РЅР°РїРѕР»РЅРёС‚ РІР°СЃ РІРїРµС‡Р°С‚Р»РµРЅРёСЏРјРё Рё РїРµСЂРµР·Р°РіСЂСѓР·РёС‚ РЅР° РІСЃРµ СЃС‚Рѕ.</p><a href="#program" className="text-link">РЈР·РЅР°С‚СЊ Р±РѕР»СЊС€Рµ Рѕ РїСЂРѕРіСЂР°РјРјРµ в†’</a></div>
        <figure className="about-photo"><img src="/krai-aistov/about-group.jpg" alt="РЈС‡Р°СЃС‚РЅРёРєРё РїСѓС‚РµС€РµСЃС‚РІРёСЏ Сѓ РґРµСЂРµРІСЏРЅРЅРѕРіРѕ РґРѕРјР°"/><figcaption>РљР°РјРµСЂРЅР°СЏ РіСЂСѓРїРїР° Рё С‚С‘РїР»С‹Рµ РІСЃС‚СЂРµС‡Рё РїРѕ РїСѓС‚Рё</figcaption></figure>
      </section>

      <section className="route section" id="route">
        <div className="section-heading"><div><p className="eyebrow">РџСѓС‚СЊ Р·Р° РґРІР° РґРЅСЏ</p><h2>РњР°СЂС€СЂСѓС‚ РїСѓС‚РµС€РµСЃС‚РІРёСЏ</h2></div><a href="#program" className="text-link gold">РЎРјРѕС‚СЂРµС‚СЊ РїСЂРѕРіСЂР°РјРјСѓ в†’</a></div>
        <div className="route-list">{stops.map(([num, title, note, image], index) => <article className="stop" key={title}><div className="stop-number">{num}</div><img src={image} alt=""/><h3>{title}</h3><p>{note}</p>{index < stops.length - 1 && <span className="route-arrow">в†’</span>}</article>)}</div>
      </section>

      <section className="media section" id="gallery">
        <div><p className="eyebrow muted">РњРѕРјРµРЅС‚С‹ РїРѕРµР·РґРѕРє</p><h2>Р¤РѕС‚РѕРіСЂР°С„РёРё</h2><div className="gallery">{gallery.map(([title, src]) => <img src={src} alt={title} key={title}/>)}</div></div>
        <div id="program"><p className="eyebrow muted">РџРѕС‡СѓРІСЃС‚РІСѓР№С‚Рµ Р°С‚РјРѕСЃС„РµСЂСѓ</p><h2>РЎРјРѕС‚СЂРёС‚Рµ РІРёРґРµРѕ</h2><div className="video-card"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85" alt="Р РµРєР° СЃСЂРµРґРё Р»РµСЃРѕРІ"/><button aria-label="Р’РѕСЃРїСЂРѕРёР·РІРµСЃС‚Рё РІРёРґРµРѕ">в–¶</button><span>01:15 В· РєСЂР°Р№, РєРѕС‚РѕСЂС‹Р№ С…РѕС‡РµС‚СЃСЏ СѓСЃР»С‹С€Р°С‚СЊ</span></div></div>
      </section>

      <section className="testimonial section" id="reviews"><blockquote>В«РЈРµС…Р°Р»Рё РЅР° РґРІР° РґРЅСЏ, Р° РѕС‰СѓС‰РµРЅРёРµ вЂ” Р±СѓРґС‚Рѕ РїСЂРѕР¶РёР»Рё РјР°Р»РµРЅСЊРєСѓСЋ Р¶РёР·РЅСЊ. РќРёРєР°РєРѕР№ СЃСѓРµС‚С‹, РјРЅРѕРіРѕ РЅР°СЃС‚РѕСЏС‰РёС… СЂР°Р·РіРѕРІРѕСЂРѕРІ Рё РЅРµРІРµСЂРѕСЏС‚РЅР°СЏ РїСЂРёСЂРѕРґР°В».</blockquote><p>вЂ” РњР°СЂРёРЅР°, СѓС‡Р°СЃС‚РЅРёС†Р° СЌРєСЃРїРµРґРёС†РёРё</p></section>

      <section className="booking-section" id="booking">
        <div className="price-copy"><p className="eyebrow">РЎС‚РѕРёРјРѕСЃС‚СЊ РїСѓС‚РµС€РµСЃС‚РІРёСЏ</p><h2>22 500 в‚Ѕ <small>Р·Р° 1 С‡РµР»РѕРІРµРєР°</small></h2><p>Р’СЃС‘ РІРєР»СЋС‡РµРЅРѕ: С‚СЂР°РЅСЃС„РµСЂ, РїРёС‚Р°РЅРёРµ, СЌРєСЃРєСѓСЂСЃРёРё Рё РїСЂРѕР¶РёРІР°РЅРёРµ.</p><p>РљР°РјРµСЂРЅР°СЏ РіСЂСѓРїРїР° РґРѕ 8 С‡РµР»РѕРІРµРє.</p></div>
        <form className="booking-card" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <div><p className="eyebrow muted">Р—Р°Р±СЂРѕРЅРёСЂРѕРІР°С‚СЊ РјРµСЃС‚Рѕ</p><label>Р’Р°С€Рµ РёРјСЏ<input required placeholder="РљР°Рє Рє РІР°Рј РѕР±СЂР°С‰Р°С‚СЊСЃСЏ"/></label><label>РўРµР»РµС„РѕРЅ<input required type="tel" placeholder="+7 900 000-00-00"/></label><div className="counter"><span>РљРѕР»РёС‡РµСЃС‚РІРѕ СѓС‡Р°СЃС‚РЅРёРєРѕРІ</span><button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}>в€’</button><b>{guests}</b><button type="button" onClick={() => setGuests(Math.min(8, guests + 1))}>+</button></div></div>
          <div className="checkout"><span>РС‚РѕРіРѕ Рє РѕРїР»Р°С‚Рµ</span><strong>{total} в‚Ѕ</strong><button className="button" type="submit">РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ</button><small>РћРїР»Р°С‚Р° РїРѕРґРєР»СЋС‡Р°РµС‚СЃСЏ РїРѕСЃР»Рµ СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЏ РґРµС‚Р°Р»РµР№</small></div>
          {sent && <p className="success" role="status">РЎРїР°СЃРёР±Рѕ! Р—Р°СЏРІРєР° РіРѕС‚РѕРІР° вЂ” РјРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё, С‡С‚РѕР±С‹ РїРѕРґС‚РІРµСЂРґРёС‚СЊ РјРµСЃС‚Р°.</p>}
        </form>
      </section>

      <footer id="contacts"><a className="brand footer-brand" href="#top"><span className="brand-mark">Рќ</span><span><b>РќРћРњРђР”РРљРђ</b><small>РїСѓС‚РµС€РµСЃС‚РІРёСЏ</small></span></a><div><b>РљРѕРЅС‚Р°РєС‚С‹</b><a href="tel:+79817570364">+7 981 757-03-64</a><a href="mailto:nomadica@yandex.ru">nomadica@yandex.ru</a></div><div><b>Р”РѕРєСѓРјРµРЅС‚С‹</b><a href="#">РџСѓР±Р»РёС‡РЅР°СЏ РѕС„РµСЂС‚Р°</a><a href="#">РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё</a></div><p>В© РќРѕРјР°РґРёРєР°, 2026</p></footer>
    </main>
  );
}
