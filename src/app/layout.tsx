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
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691"
            crossOrigin="anonymous"
          ></script>
        </head>
        <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
        <ForceFullReloadLinks/>
        <script type='text/javascript' src='//pl26727677.revenuecpmgate.com/a9/70/9c/a9709c503cf57db4f0ab15ee609a19e3.js'></script>
        <script type='text/javascript' src='//pl26727656.revenuecpmgate.com/74/5a/15/745a153412b6a9f61df569eb2130477e.js'></script>
        {children}
        </>
  )
}
