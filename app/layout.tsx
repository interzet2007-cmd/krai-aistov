import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://interzet2007-cmd.github.io/krai-aistov";
const previewImage = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1536&q=90";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Край аистов — экспедиция по Ленинградской области",
  description: "Двухдневное камерное путешествие по Сланцевскому району: природа, история и встречи с людьми.",
  openGraph: {
    title: "Край аистов — Номадика",
    description: "Двухдневная экспедиция по настоящей Ленинградской области.",
    url: siteUrl,
    images: [{ url: previewImage, width: 1536, height: 1024, alt: "Край аистов — Номадика" }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: [previewImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}

