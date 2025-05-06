

import { characters } from '@/data/characters';
import ArtifactsSlider from "@/components/ArtifactsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import ptBr from "@/data/pt-br.json"
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
 
  // fetch data
  const product = await fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${id.replace(/-/g, ' ')}&resultLanguage=portuguese`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent meta
 
  return {
    title: `${product.name} | Genshin Impact Conjuntos de Artefatos`,
    description: `Veja os detalhes completos do conjunto de artefatos ${product.name} de Genshin Impact, incluindo seus efeitos e os melhores personagens recomendados para aproveitá-lo ao máximo.`,
    alternates: {
      canonical: `/artifacts/${id}`
    },
    openGraph: {
      images: `https://enka.network/ui/${product.images.filename_flower}.png`
    }
  }
  
}

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