import { characters } from '@/data/characters';
import ptBr from "@/data/en-us.json"
import WeaponSlider from "@/app/en/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import { state } from '@/components/config';

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  let { id } = await params
 

  const product = await fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${id.replace(/-/g, '')}`, { cache: 'default' }).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent meta
 
  return {
    title: `${product.name} | Genshin Impact Weapons`,
    description: product.description,
    alternates: {
      canonical: `/en/weapons/${id}`,
      languages: {
        'en': `/en/weapons/${id}`,
        'pt-br': `/weapons/${id}`,
        'x-default': `/weapons/${id}`
      }
    },
    openGraph: {
      images: `https://gi.yatta.moe/assets/UI/${product.images.filename_icon}.png`,
      url: `/en/weapons/${id}`,
      type: 'website'
    }
  }
}


export default async function Page({ params }: Props) {
    let { id } = await params;
    
    state.locale = id;

const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true', { cache: 'default' })
  .then(res => res.json());

  let idList, idNormalizado;
idList = validIds.map((name: string) =>
  name.replace(/'/g, '').replace(/"/g, '').toLowerCase().replace(/ /g, '-')

)
idNormalizado = id.replace(/-/g, '');

 


let ptData, folderData, weapon;



  if (!idList.includes(id)) return notFound();
  const urls = [
    `weapons?query=${idNormalizado}`,
    `stats?folder=weapons&query=${idNormalizado}`
  ];
  
  [ptData, folderData] = await Promise.all(
    urls.map(endpoint =>
      fetch(`https://genshin-db-api.vercel.app/api/v5/${endpoint}`, { cache: 'default' }).then(res => res.json())
    )
  );
  if (id != 'the-catch') {
   weapon = ptData.name.replace(/'/g, "")
  }
  else {
    weapon = 'The Catch'
  }

       
      
      const matchedCharacters = characters.filter((char) => 
        char.bestWeapon === weapon ||
        char.otherWeapons.some((w) => w === weapon)
      );
      
  return <>
             
             <WeaponSlider ptData={ptData} matchedCharacters={matchedCharacters} folderData={folderData} id={id} ptBr={ptBr}/>
          <ScriptsClient/>
      </>
}