import { characters } from '@/data/characters';
import ptBr from "@/data/pt-br.json"
import WeaponSlider from "@/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import weaponStats from "@/data/newWeaponsFolder/symphonist-of-scents.json"
import weaponNew from "@/data/newWeaponsData/symphonist-of-scents.json"
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  try {
    const res = await fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${id.replace(/-/g, '')}&resultLanguage=portuguese`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Erro ao buscar personagem');

    const data = await res.json();

    return {
      title: `${data.name} Build | Genshin Impact`,
      description: `Build ideal para ${data.name} com armas, artefatos e times recomendados.`,
      openGraph: {
        title: `${data.name} Build | Genshin Impact`,
        description: `Guia completo para ${data.name} em Genshin Impact.`,
        images: [`https://genshinbuild.com/images/Banners/${id}_Card.png`],
      },
    };
  } catch (e) {
    return {
      title: 'Build de Personagem | Genshin Impact',
      description: 'Explore builds de personagens em Genshin Impact.',
    };
  }
}


export default async function Page({params}:any) {
    let { id } = await params;
    

const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true')
  .then(res => res.json());

  let idList, idNormalizado;
  if (id != 'the-catch') {
   
idList = validIds.map((name: string) =>
  name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')

)
idNormalizado = id.replace(/-/g, '');
}

else {
idList = 'the-catch'
idNormalizado = 'thecatch'
}
 


let ptData, enData, folderData, weapon;


if(id != weaponNew.name2.replace(/'/g, '').toLowerCase().replace(/ /g, '-')) {
  if (!idList.includes(id)) return notFound();
  const urls = [
    `weapons?query=${idNormalizado}&resultLanguage=portuguese`,
    `weapons?query=${idNormalizado}`,
    `stats?folder=weapons&query=${idNormalizado}`
  ];
  
  [ptData, enData, folderData] = await Promise.all(
    urls.map(endpoint =>
      fetch(`https://genshin-db-api.vercel.app/api/v5/${endpoint}`).then(res => res.json())
    )
  );
  if (id != 'the-catch') {
   weapon = enData.name.replace(/'/g, "")
  }
  else {
    weapon = 'The Catch'
  }
} else {
  
  ptData = weaponNew
  enData =  weaponNew
  folderData = weaponStats
  weapon = enData.name2.replace(/'/g, "")
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