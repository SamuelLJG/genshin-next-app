

import { characters } from '@/data/characters';
import ArtifactsSlider from "@/components/ArtifactsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import ptBr from "@/data/pt-br.json"

export default async function Page({params}:any) {
    let { id } = await params;
    const idNormalizado = id.replace(/-/g, '');

    const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/artifacts?query=names&matchCategories=true')
      .then(res => res.json());
    
    const idList = validIds.map((name: string) =>
      name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')
    );
    
    if (!idList.includes(id)) return notFound();
    
    const urls = [
      `artifacts?query=${idNormalizado}&resultLanguage=portuguese`,
      `artifacts?query=${idNormalizado}`
    ];
    
    const [ptData, enData] = await Promise.all(
      urls.map(endpoint =>
        fetch(`https://genshin-db-api.vercel.app/api/v5/${endpoint}`).then(res => res.json())
      )
    );
      
    const weapon = enData.name.replace(/'/g, "")
      const matchedCharacters = characters.filter((char) => 
        char.bestArtifacts === weapon ||
      (char.otherArtifacts ?? []).some((w) => w === weapon)||
      (char.twoPieces ?? []).some((w) => w === weapon)
      );
      
  return <>
             <ArtifactsSlider ptData={ptData} matchedCharacters={matchedCharacters} ptBr={ptBr}/>
          <ScriptsClient/>
          </>
}