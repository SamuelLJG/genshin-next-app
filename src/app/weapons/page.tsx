// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/navGeneric";
import WeaponsFilter from "@/components/WeaponsFilter";

export default async function Page() {
  const response = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true');
  const data = await response.json();
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim());
      return fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${nomeLimpo}&resultLanguage=portuguese`, { cache: 'force-cache' });
    })
  );
  const armasPT = await Promise.all(responsesPTWeapons.map(res => res.json()));
  return (
    <body>
        
          <main id="main-index">
          <div id="h1-flex">
            <Image src="/images/sword-fill-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} alt="" loading="eager" /> <h1 id="index-h1">Genshin Impact Lista de Armas</h1>
          </div>
            <WeaponsFilter/>
            <br />
              <div id="weapons-flex">
                  {armasPT.map((post: any, i: number) => (
                    <Link href={`weapons/${data[i].replace(/'/g, '').toLowerCase().replace(/ /g, '-')}`} key={i} className={`weapon-card ${post.weaponType} ${post.name} rarity-${post.rarity}-weapon`}>
                        <Image width={100} height={100} src={`https://enka.network/ui/${post.images.filename_icon}.png`} alt="" className={`star${post.rarity}`} loading="eager" priority/>
                        <div>
                        <p>{post.name}</p>
                        <p>{post.mainStatText}</p></div>
                        </Link>
                  ))}
              </div>
          </main>
          <Nav/>
    </body>
  );
}