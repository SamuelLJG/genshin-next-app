

import { characters } from '@/data/characters';
import ArtifactsSlider from "@/app/en/components/ArtifactsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import ptBr from "@/data/en-us.json"
import type { Metadata, ResolvingMetadata } from 'next'
import { state } from '@/components/config';

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
 

  const product = await fetch(`https://genshin-db-api.vercel.app/api/v5/artifacts?query=${id.replace(/-/g, '')}`, { cache: 'default' }).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent meta
 
  return {
    title: `${product.name} | Genshin Impact Artifacts Sets`,
    description: `Check out the full details of the ${product.name} artifact set in Genshin Impact — including its effects and the best characters to get the most out of it.`,
    alternates: {
      canonical: `/en/artifacts/${id}`,
      languages: {
        'en': `/en/artifacts/${id}`,
        'pt-br': `/artifacts/${id}`,
        'x-default': `/artifacts/${id}`
      }
    },
    openGraph: {
      images: `https://enka.network/ui/${product.images.filename_flower}.png`,
      url: `/en/artifacts/${id}`,
      type: 'website'
    }
  }
  
}

export default async function Page({params}:any) {
    let { id } = await params;
    state.locale = "en";
    const idNormalizado = id.replace(/-/g, '');

    const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/artifacts?query=names&matchCategories=true', { cache: 'default' })
      .then(res => res.json());
    
    const idList = validIds.map((name: string) =>
      name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')
    );
    
    if (!idList.includes(id)) return notFound();
    
    const urls = [
      `artifacts?query=${idNormalizado}`,
    ];
    
    const [ptData] = await Promise.all(
      urls.map(endpoint =>
        fetch(`https://genshin-db-api.vercel.app/api/v5/${endpoint}`, { cache: 'default' }).then(res => res.json())
      )
    );
      
    const weapon = ptData.name.replace(/'/g, "")
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