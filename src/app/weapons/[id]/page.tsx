import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/navGeneric";
import { characters } from '@/data/characters';
import Stars from "@/components/Stars";
import ptBr from "@/data/pt-br.json"
import WeaponSlider from "@/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";

export default async function Page({params}:any) {
    let { id } = await params;
   
    const [ptRes, enRes, folder] = await Promise.all([
        fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${id.replace(/-/g, "")}&resultLanguage=portuguese`),
        fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${id.replace(/-/g, "")}`),
        fetch(`https://genshin-db-api.vercel.app/api/v5/stats?folder=weapons&query=${id.replace(/-/g, "")}`)
      ]);
      
      const [ptData, enData, folderData] = await Promise.all([ptRes.json(), enRes.json(), folder.json()]);

      
    const weapon = enData.name.replace(/'/g, "")
      const matchedCharacters = characters.filter((char) => 
        char.bestWeapon === weapon ||
        char.otherWeapons.some((w) => w === weapon)
      );
      
  return (
    <body id="weapons-body">
             
             <WeaponSlider ptData={ptData} matchedCharacters={matchedCharacters} folderData={folderData}/>
          <Nav/>
          <ScriptsClient/>
    </body>
  );
}