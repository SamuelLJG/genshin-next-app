import { Anuphan, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import type { Metadata } from "next";
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Genshin Build | Melhores Builds de Personagens Genshin Impact",
  description: "Encontre as builds ideais para seus personagens favoritos de Genshin Impact com guias de armas, artefatos, equipes e mais.",
  metadataBase: new URL('https://genshinbuild.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`
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
      <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691"
            crossOrigin="anonymous"
          ></script>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
