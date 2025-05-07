import { Anuphan, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import type { Metadata } from "next";
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Genshin Build | Melhores Builds de Personagens Genshin Impact",
  description: "Encontre as builds ideais para seus personagens favoritos de Genshin Impact com guias de armas, artefatos, equipes e mais.",
  metadataBase: new URL('https://genshinbuild.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/',
    type: 'website'
  },
  icons: {
    icon: '/favicon-96x96.png', // caminho dentro de /public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large'
    }
  }
}


const anuphan = Anuphan({
  subsets: ['latin'],
  display: 'swap',
})
 
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({ children }: {children: React.ReactNode;}) {

  return (
    <html lang="pt-br">
      <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
      <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691"
            crossOrigin="anonymous"
          ></Script>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
