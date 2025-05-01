import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/navGeneric";
import { characters } from '@/data/characters';
import Stars from "@/components/Stars";
import ptBr from "@/data/pt-br.json"
import ArtifactsSlider from "@/components/ArtifactsSlider";
import ScriptsClient from "@/components/scripts-client";

export default async function Page({params}:any) {
    let { id } = await params;
   
    const [ptRes, enRes] = await Promise.all([
        fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${id.replace(/-/g, "")}&resultLanguage=portuguese`),
        fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${id.replace(/-/g, "")}`),
      ]);
      
      const [ptData, enData] = await Promise.all([ptRes.json(), enRes.json()]);

      
    const weapon = enData.name.replace(/'/g, "")
      const matchedCharacters = characters.filter((char) => 
        char.bestArtifacts === weapon ||
      (char.otherArtifacts ?? []).some((w) => w === weapon)||
      (char.twoPieces ?? []).some((w) => w === weapon)
      );
      
  return (
    <body id="weapons-body">
             
             <ArtifactsSlider ptData={ptData} matchedCharacters={matchedCharacters}/>
          <Nav/>
          <ScriptsClient/>
    </body>
  );
}