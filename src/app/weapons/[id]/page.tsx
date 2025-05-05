// src/app/weapons/[id]/page.tsx

import { characters } from '@/data/characters';
import ptBr from "@/data/pt-br.json";
import WeaponSlider from "@/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import weaponStats from "@/data/newWeaponsFolder/symphonist-of-scents.json";
import weaponNew from "@/data/newWeaponsData/symphonist-of-scents.json";
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const idNormalizado = id.replace(/-/g, '');

  try {
    const res = await fetch(`https://genshin-db-api.vercel.app/api/v5/weapons?query=${idNormalizado}&resultLanguage=portuguese`, {
      next: { revalidate: 86400 }, // revalida a cada 24h
    });
    const data = await res.json();

    return {
      title: `${data.name} | Arma de Genshin Impact`,
      description: `Detalhes da arma ${data.name}: atributos, efeitos e personagens compatíveis em Genshin Impact.`,
    };
  } catch {
    return {
      title: 'Armas de Genshin Impact',
      description: 'Lista de armas disponíveis em Genshin Impact.',
    };
  }
}

export async function generateStaticParams() {
  const res = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true');
  const data = await res.json();

  return data.map((weapon: string) => ({
    id: weapon.replace(/'/g, '').toLowerCase().replace(/ /g, '-'),
  }));
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const validIds = await fetch('https://genshin-db-api.vercel.app/api/v5/weapons?query=names&matchCategories=true')
    .then(res => res.json());

  let idList: string[];
  let idNormalizado: string;
  let ptData: any, enData: any, folderData: any, weapon: string;

  if (id !== 'the-catch') {
    idList = validIds.map((name: string) =>
      name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')
    );
    idNormalizado = id.replace(/-/g, '');

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

    weapon = enData.name.replace(/'/g, '');
  } else {
    ptData = weaponNew;
    enData = weaponNew;
    folderData = weaponStats;
    weapon = enData.name2.replace(/'/g, '');
  }

  const matchedCharacters = characters.filter((char) =>
    char.bestWeapon === weapon || char.otherWeapons.includes(weapon)
  );

  return (
    <>
      <WeaponSlider
        ptData={ptData}
        matchedCharacters={matchedCharacters}
        folderData={folderData}
        id={id}
        ptBr={ptBr}
      />
      <ScriptsClient />
    </>
  );
}