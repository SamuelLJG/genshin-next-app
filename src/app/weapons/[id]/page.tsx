import Nav from "@/components/navGeneric";
import { characters } from '@/data/characters';
import ptBr from "@/data/pt-br.json"
import WeaponSlider from "@/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import weaponStats from "@/data/newWeaponsFolder/symphonist-of-scents.json"
import weaponNew from "@/data/newWeaponsData/symphonist-of-scents.json"

export default async function Page({params}:any) {
    let { id } = await params;
    const idNormalizado = id.replace(/-/g, '');

const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true')
  .then(res => res.json());

const idList = validIds.map((name: string) =>
  name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')
)
;

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
   weapon = enData.name.replace(/'/g, "")
} else {
  
  ptData = weaponNew
  enData =  weaponNew
  folderData = weaponStats
  weapon = enData.name2.replace(/'/g, "")
}
      console.log(weapon)
       
      
      const matchedCharacters = characters.filter((char) => 
        char.bestWeapon === weapon ||
        char.otherWeapons.some((w) => w === weapon)
      );
      
  return (
    <body id="weapons-body">
             
             <WeaponSlider ptData={ptData} matchedCharacters={matchedCharacters} folderData={folderData} id={id} ptBr={ptBr}/>
          <Nav/>
          <ScriptsClient/>
    </body>
  );
}