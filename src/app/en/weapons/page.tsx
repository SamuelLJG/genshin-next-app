// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import WeaponsFilter from "@/components/WeaponsFilter";
import ptBr from "@/data/en-us.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense-en";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';


export const metadata: Metadata = {
  title: "Weapons List | Genshin Impact",
  description: "Full Genshin Impact Weapon List by Type, Rarity, and Name – Browse All Swords, Polearms, Bows & More",
  metadataBase: new URL('https://genshinbuild.com'),
  alternates: {
    canonical: '/en/weapons',
    languages: {
      'en': `/en/weapons`,
      'pt-br': `/weapons`,
      'x-default': `/weapons`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/weapons',
    type: 'website'
  }
};

export default async function Page() {
  const response = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true', { cache: 'no-store' });
  const data = await response.json();
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim());
      return fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${nomeLimpo}&resultLanguage=portuguese`, { cache: 'no-store' });
    })
  );
  const armasPT = await Promise.all(responsesPTWeapons.map(res => res.json()));
  return (
        
    <html lang="en">
      <body>
        <Nav/>
          <main id="main-index">
          <div id="h1-flex">
            <Image src="/images/sword-fill-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} alt={ptBr.weaponList} loading="eager" /> <h1 id="index-h1">Genshin Impact {ptBr.weaponList}</h1>
          </div>
            <WeaponsFilter ptBr={ptBr}/>
            <AdComponent/>
              <div id="weapons-flex">
             
                        
                  {armasPT.map((post: any, i: number) => (
                    data[i].replace(/'/g, '').toLowerCase().replace(/ /g, '-') != 'prized-isshin-blade' ? 
                    <Link href={`/en/weapons/${data[i].replace(/'/g, '').replace(/"/g, '').toLowerCase().replace(/ /g, '-')}`} key={i} className={`weapon-card ${post.weaponType} ${post.name} rarity-${post.rarity}-weapon`}>
                        <Image width={100} height={100} src={`https://enka.network/ui/${post.images.filename_icon}.png`} alt={post.name} className={`star${post.rarity}`} loading="eager" priority/>
                        <div>
                        <p>{post.name}</p>
                        <p>{post.mainStatText}</p></div>
                        </Link>
                        : ''
                  ))}
              </div>
          </main>
          <Footer/>
      </body>
    </html>
  );
}