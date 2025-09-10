import { Anuphan, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import ForceFullReloadLinks from '@/components/ForceFullReloadLinks';
import Script from 'next/script';


export const metadata: Metadata = {
  metadataBase: new URL('https://genshinbuild.com'),
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
        <>
        <head>
            <Script
  async
  strategy="afterInteractive"
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691`}
  crossOrigin="anonymous"
/></head>
        <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
        {children}
        </>
  )
}
