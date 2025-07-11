import Image from "next/image"
import {characters} from "@/data/characters"
import Link from "next/link";
import Filter from "@/components/full-filter";
import ptBr from "@/data/en-us.json"
import AdComponent from "@/components/Adsense-en";
import { Metadata } from "next";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';

export const metadata: Metadata = {
  title: "Genshin Build | Best Genshin Impact Character Builds",
  description: "Find the ideal builds for your favorite Genshin Impact characters with guides on weapons, artifacts, teams, and more.",
  alternates: {
    canonical: '/en/',
    languages: {
      'en': `/en`,
      'pt-br': `/`,
      'x-default': `/`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/',
    type: 'website'
  }
}


export default function Home() {
    function formatarNome(nome:string) {
        return nome
          .split('-')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join('_');
      }
      function formatarNomeComEspaco(nome: string) {
        return nome
          .split('_')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join(' ');
      }
      function formatCharacterName(name: string) {
       
        if (name === 'Traveler Hydro' ||
            name === 'Traveler Dendro' ||
            name === 'Traveler Anemo' ||
            name === 'Traveler Geo' ||
            name === 'Traveler Electro' ||
            name === 'Traveler Pyro') {
            return 'Traveler';
          }
          if (name === 'Raiden Shogun') {
            return 'Raiden';
          }
          if (name === 'Arataki Itto') {
            return 'Itto';
          }
          if (name === 'Kamisato Ayaka') {
            return 'Ayaka';
          }
          if (name === 'Kamisato Ayato') {
            return 'Ayato';
          }
          if (name === 'Yumemizuki Mizuki') {
            return 'Mizuki';
          }
          if (name === 'Kujou Sara') {
            return 'Sara';
          }
          if (name === 'Shikanoin Heizou') {
            return 'Heizou';
          }
          if (name === 'Sangonomiya Kokomi') {
            return 'Kokomi';
          }
          if (name === 'Kaedehara Kazuha') {
            return 'Kazuha';
          }
          if (name === 'Kuki Shinobu') {
            return 'Kuki';
          }
        return name;
      }
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Genshin Build",
        "url": "https://genshinbuild.com/en",
        "description": "Find the best Genshin Impact character builds with up-to-date weapons, artifacts, team comps, and expert tips..",
        "publisher": {
          "@type": "Organization",
          "name": "Genshin Build",
          "logo": {
            "@type": "ImageObject",
            "url": "https://genshinbuild.com/images/genshinbuild-image.png"
          }
        },
        "mainEntity": {
          "@type": "CollectionPage",
          "name": "Builds de Genshin Impact",
          "about": {
            "@type": "Thing",
            "name": "Genshin Impact"
          }
        }
      }
    return (
        <html lang="en">
          <head>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      /></head>
          <body>
            <Nav/>
            
        <main id="main-index" className="iii"> 
        
        <div id="h1-flex">
            <Image src="/images/list-paper-school-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} alt={ptBr.charactersList} loading="eager" /> <h1 id="index-h1">Genshin Impact {ptBr.charactersList}</h1>
          </div>
            <Filter ptBr={ptBr}/>
           <AdComponent/>
            <div id="main-characters-flex">
            {characters.map((char:any,i:any)=> (
                <Link href={`/en/${char.name}`} key={i} className={`character-card ${char.elementType} ${char.name.replace(/-/g, '').replace(/traveler/gi, "viajante")} ${char.weapon} rarity-${char.rarity}`}>
            <Image width={100} height={100} src={`/images/Team-Icons/${formatarNome(char.name)}.png`} alt={formatarNomeComEspaco(formatarNome(char.name))} className={`rarity-${char.rarity}`} loading="eager" priority/>
            <p>{formatCharacterName(formatarNomeComEspaco(formatarNome(char.name)))}</p>
            {char.newCharacter != null ? <span>{char.newCharacter}</span> : ''  }
            
            </Link>
            
        ))}</div></main>
        <Footer/>
          </body>
        </html>
    )
}