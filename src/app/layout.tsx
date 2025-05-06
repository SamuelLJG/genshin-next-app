import { Anuphan, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Head from 'next/head';



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
      <Head>
          <meta name="robots" content="max-image-preview:large" />
        </Head>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
      <SpeedInsights />
    </html>
  );
}
