// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import ArtifactsFilter from "@/components/ArtifactsFilter";
import ptBr from "@/data/pt-br.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import Nav from '@/components/nav';
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: "Lista de Artefatos | Genshin Impact",
  description: "Lista de todos os conjuntos de artefatos de Genshin Impact com nomes e raridade disponíveis.",
  alternates: {
    canonical: '/artifacts',
    languages: {
      'en': `/en/artifacts`,
      'pt-br': `/artifacts`,
      'x-default': `/artifacts`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/artifacts',
    type: 'website'
  }
};

export default async function Page() {
  const response = await fetch('https://genshin-db-api.vercel.app/api/v5/artifacts?query=names&matchCategories=true', { cache: 'default' });
  const data = await response.json();
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim());
      return fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${nomeLimpo}&resultLanguage=portuguese`, { cache: 'default' });
    })
  );
  const armasPT = await Promise.all(responsesPTWeapons.map(res => res.json()));
  const circletOnly = ['Prayers for Destiny', 'Prayers for Illumination', 'Prayers for Wisdom', 'Prayers to Springtime'];
  
  return (
        <html lang="pt-br">
          <body>
            <Nav/>
            <main id="main-index">
            <div id="h1-flex">
            <Image src="/images/flower-with-heart-petals-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} loading="eager" alt={ptBr.artifactsList} /> <h1 id="index-h1">Genshin Impact {ptBr.artifactsList}</h1>
          </div>
          <ArtifactsFilter ptBr={ptBr}/>
          <AdComponent/>
              <div id="weapons-flex">
                  {armasPT.map((post: any, i: number) => (
                    <Link href={`artifacts/${data[i].replace(/'/g, '').toLowerCase().replace(/ /g, '-')}`} key={i} className={`weapon-card ${post.name} rarity-${post.rarityList[post.rarityList.length - 1]}-weapon`}>
                        <Image width={150} height={150} src={!circletOnly.includes(data[i].replace(/'/g, '')) ? `https://enka.network/ui/${post.images.filename_flower}.png` : `https://enka.network/ui/${post.images.filename_circlet}.png`} alt={post.name} className={`star${post.rarityList[post.rarityList.length - 1]}`} loading="eager" priority/>
                        <div>
                            <p>{post.name}</p>
                            <p>{post.description}</p>
                        </div>
                        </Link>
                  ))}
              </div>
          </main>
            <Footer/>
          </body>
          </html>
          
  );
}