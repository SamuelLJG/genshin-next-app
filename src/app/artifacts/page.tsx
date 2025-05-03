// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import ArtifactsFilter from "@/components/ArtifactsFilter";
import ptBr from "@/data/pt-br.json"

export default async function Page() {
  const response = await fetch('https://genshin-db-api.vercel.app/api/v5/artifacts?query=names&matchCategories=true');
  const data = await response.json();
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim());
      return fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${nomeLimpo}&resultLanguage=portuguese`, { cache: 'force-cache' });
    })
  );
  const armasPT = await Promise.all(responsesPTWeapons.map(res => res.json()));
  const circletOnly = ['Prayers for Destiny', 'Prayers for Illumination', 'Prayers for Wisdom', 'Prayers to Springtime'];
  
  return (
        
          <main id="main-index">
            <div id="h1-flex">
            <Image src="/images/flower-with-heart-petals-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} loading="eager" alt="" /> <h1 id="index-h1">Genshin Impact {ptBr.artifactsList}</h1>
          </div>
          <ArtifactsFilter ptBr={ptBr}/>
          <br />
              <div id="weapons-flex">
                  {armasPT.map((post: any, i: number) => (
                    <Link href={`artifacts/${data[i].replace(/'/g, '').toLowerCase().replace(/ /g, '-')}`} key={i} className={`weapon-card ${post.name} rarity-${post.rarityList[post.rarityList.length - 1]}-weapon`}>
                        <Image width={150} height={150} src={!circletOnly.includes(data[i].replace(/'/g, '')) ? `https://enka.network/ui/${post.images.filename_flower}.png` : `https://enka.network/ui/${post.images.filename_circlet}.png`} alt="" className={`star${post.rarityList[post.rarityList.length - 1]}`} loading="eager" priority/>
                        <div>
                            <p>{post.name}</p>
                            <p>{post.description}</p>
                        </div>
                        </Link>
                  ))}
              </div>
          </main>
  );
}