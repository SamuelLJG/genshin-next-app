import { Anuphan, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import ForceFullReloadLinks from '@/components/ForceFullReloadLinks';


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
        <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
        {children}
        </>
  )
}
