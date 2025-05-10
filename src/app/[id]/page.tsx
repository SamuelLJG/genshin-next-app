import Image from "next/image";
import {characters} from "@/data/characters"
import RefinamentoSlider from '@/components/RefinamentSlider'
import WeaponStatsSlider from "@/components/WeaponStatsSlider";
import CharacterStatsSlider from "@/components/CharacterStatsSlider";
import SliderHighlight from '@/components/SliderHighlight';
import ptBr from '@/data/pt-br.json'
import Link from "next/link";
import ScriptsClient from "@/components/scripts-client";
import type { Metadata } from "next";
import AscensionSlider from "@/components/AscensionSlider";
import { notFound } from 'next/navigation'
import TalentsSlider from "@/components/TalentsSlider";
import AdComponent from "@/components/Adsense";
import { state } from "@/components/config";

type Props = {
  params: Promise<{ id: string }>
}

function formatarUrl(nome: string) {
  return nome
    .split('-')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const characterBuild:any = characters.find(p => p.name === id);
  if (!characterBuild) {
     return {
    title: `404 - Not Found`,
  }
  }
  else {
  return {
    title: `${formatarUrl(id)} Build | Guia com Melhores Armas, Artefatos e Times`,
    description: `Descubra as melhores builds e times para ${formatarUrl(id)} em Genshin Impact! Confira também suas armas, artefatos, habilidades e muito mais!`,
    alternates: {
      canonical: id,
      languages: {
        'en': `/en/${id}`,
        'pt-br': id,
        'x-default': id
      }
    },
    openGraph: {
      images: `/images/Banners/${formatarUrl(id)}_Card.png`,
      url: id,
      type: 'website'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-image-preview': 'large'
      }
    }
  }
  }
}



export default async function Home( { params }:any ) {
  
  
state.locale = "pt-br";
    let { id } = await params;
    const characterBuild:any = characters.find(p => p.name === id);
    if (!characterBuild) return notFound()
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": `${formatarUrl(id)} Build | Genshin Impact`,
      "description": `Build ideal para ${formatarUrl(id)} em Genshin Impact com melhores armas, artefatos, times e muito mais.`,
      "url": `https://genshinbuild.com/${id}`,
      "author": {
        "@type": "Organization",
        "name": "Genshin Build Team",
        "url": "https://genshinbuild.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Genshin Build",
        "logo": {
          "@type": "ImageObject",
          "url": "https://genshinbuild.com/images/genshinbuild-image.png"
        }
      },
      "datePublished": "2025-05-05T04:23:35-04:00",
      "dateModified": "2025-05-05T04:23:35-04:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://genshinbuild.com/${id}`
      },
      "image": `https://genshinbuild.com/images/Banners/${formatarUrl(id)}_Card.png`
    }
  

   const apiUrl = 'https://genshin-db-api.vercel.app/api/v5/';
const baseURLWeapon = `${apiUrl}weapons?query=`;
const baseURLArtifact = `${apiUrl}artifacts?query=`;

const fetchJson = (url: string) => fetch(url, { cache: 'default' }).then(res => res.json());
const fetchWeaponData = (name: string) =>
  fetchJson(`${baseURLWeapon}${encodeURIComponent(name)}&resultLanguage=portuguese`);
const fetchArtifactData = (name: string) =>
  fetchJson(`${baseURLArtifact}${encodeURIComponent(name.trim())}&resultLanguage=portuguese`);

const nomesDosArtefatos = [
  characterBuild.bestArtifacts,
  ...(characterBuild.otherArtifacts || [])
];

async function getArmasEArtefatos() {
  const armasPT = [
  await fetchWeaponData(characterBuild.bestWeapon),
  ...await Promise.all(characterBuild.otherWeapons.map(fetchWeaponData))
];

  const artefatosPT = await Promise.all(nomesDosArtefatos.map(fetchArtifactData));

  const twoPiecesArtifacts = characterBuild.twoPieces
    ? await Promise.all(characterBuild.twoPieces.map(fetchArtifactData))
    : [];

  return { armasPT, artefatosPT, twoPiecesArtifacts };
}

const { armasPT, artefatosPT, twoPiecesArtifacts } = await getArmasEArtefatos();
    const id2 = (
        id === 'traveler-hydro' ||
        id === 'traveler-dendro' ||
        id === 'traveler-anemo' ||
        id === 'traveler-geo' ||
        id === 'traveler-electro' ||
        id === 'traveler-pyro'
      ) ? 'aether' : id.replace(/-/g, "")
      ;
      let id3:any;

switch (id) {
  case 'traveler-hydro':
    id3 = 'Traveler (Hydro)';
    break;
  case 'traveler-dendro':
    id3 = 'Traveler (Dendro)';
    break;
  case 'traveler-anemo':
    id3 = 'Traveler (Anemo)';
    break;
  case 'traveler-geo':
    id3 = 'Traveler (Geo)';
    break;
  case 'traveler-electro':
    id3 = 'Traveler (Electro)';
    break;
  case 'traveler-pyro':
    id3 = 'Traveler (Pyro)';
    break;
  case 'andarilho':
    id3 = 'wanderer';
    break;
  default:
    id3 = id.replace(/-/g, "");
    break;
}
      id2.toLowerCase().trim().replace(/\s+/g, '-') 
      
      async function getData() {
          const urls = [
            `${apiUrl}characters?query=${id2}&resultLanguage=portuguese`,
            `${apiUrl}stats?folder=characters&query=${id2}`,
            `${apiUrl}stats?folder=weapons&query=${characterBuild.bestWeapon}`,
            `${apiUrl}talents?query=${id3}&resultLanguage=portuguese`,
            `${apiUrl}constellations?query=${id3}&resultLanguage=portuguese`
          ];
          const responses = await Promise.all(urls.map(url => fetch(url, { cache: 'default' })));
          const data = await Promise.all(responses.map(res => res.json()));
          return {
            characterData: data[0],
            characterFolder: data[1],
            characterWeapons: data[2],
            characterTalents: data[3],
            characterConstellations: data[4]
          };
        
      }
      
      let { characterWeapons, characterData, characterFolder, characterTalents, characterConstellations } = await getData();

    function extrairAtePrimeiroPonto(texto: string) {
        return texto.split('.')[0];
      }
     
      function formatCharacterName(name: string) {
        if (name === "Shogun Raiden") {
          const parts = name.split(" ");
          return `${parts[1]} ${parts[0]}`;
        }
        if (name === "Hutao") {
            return 'Hu Tao';
          }
          if (name === "combat1") {
            return ptBr.normalAttack;
          }
          if (name === "combat2") {
            return ptBr.elementalSkill;
          }
          if (name === "combat3") {
            return ptBr.elementalBurst;
          }
          if (name === "combat4") {
            return ptBr.rightClick;
          }
        return name;
      }
      function formatarNome(nome:string) {
        return nome
          .split('-')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join('_');
      }
      function formatarParaSlashCase(texto: string): string {
        return texto             
          .trim()                      
          .replace(/\s+/g, '_')        
    }
    function formatarNomeComEspaco(nome: string) {
        return nome
          .split('_')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join(' ');
      }
      const formattedName = formatCharacterName(characterData.name);
      let travelerName = formattedName;
      switch (id3) {
            case 'Traveler (Geo)' :
            travelerName = 'Viajante Geo'
            break;
            case 'Traveler (Anemo)' :
            travelerName = 'Viajante Anemo'
            break;
            case 'Traveler (Pyro)' :
            travelerName = 'Viajante Pyro'
            break;
            case 'Traveler (Dendro)' :
            travelerName = 'Viajante Dendro'
            break;
            case 'Traveler (Electro)' :
            travelerName = 'Viajante Electro'
            break;
            case 'Traveler (Hydro)' :
            travelerName = 'Viajante Hydro'
            break;
            
      }
let elementFormatted;
switch (travelerName) {
      case 'Viajante Anemo':
        elementFormatted = 'Anemo';
      break;
      case 'Viajante Hydro':
        elementFormatted = 'Hydro';
      break;
      case 'Viajante Dendro':
        elementFormatted = 'Dendro';
      break;
      case 'Viajante Geo':
        elementFormatted = 'Geo';
      break;
      case 'Viajante Pyro':
        elementFormatted = 'Pyro';
      break;
      case 'Viajante Electro':
        elementFormatted = 'Electro';
      break;
    default:
        elementFormatted = characterData.elementText; // mantém o valor original
      break;
  }
  
  function formatarNomeEspecial(name:any) {
    // Verifica se o nome contém as palavras a serem removidas e as substitui
    if (name === 'Traveler Hydro' ||
      name === 'Traveler Dendro' ||
      name === 'Traveler Anemo' ||
      name === 'Traveler Geo' ||
      name === 'Traveler Electro' ||
      name === 'Traveler Pyro') {
      return 'Viajante';
    }
    if (name === 'Raiden Shogun') {
      return 'Raiden';
    }
    if (name === 'Arataki Itto') {
      return 'Itto';
    }
    if (name === 'Kamisato Ayaka') {
      return 'Ayaka';
    }
    if (name === 'Kamisato Ayato') {
      return 'Ayato';
    }
    if (name === 'Yumemizuki Mizuki') {
      return 'Mizuki';
    }
    if (name === 'Kujou Sara') {
      return 'Sara';
    }
    if (name === 'Shikanoin Heizou') {
      return 'Heizou';
    }
    if (name === 'Sangonomiya Kokomi') {
      return 'Kokomi';
    }
    if (name === 'Kaedehara Kazuha') {
      return 'Kazuha';
    }
    if (name === 'Kuki Shinobu') {
      return 'Kuki';
    }
  return name;
  }
  const sanitizeDescription = (descriptionRaw:any) => {
    return descriptionRaw
      .replace(/"(.*?)"/g, '<b>"$1"</b>')
      .replace(/\u003Ccolor=#FFD780FF\u003E/g, '<b> ')
      .replace(/\u003C\/color\u003E/g, '</b>')
      .replace(/\n\n/g, '<hr />')
      .replace(/\n/g, '<br />')
      .replace(/\u003Ccolor=#80C0FFFF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#FFACFFFF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#FFE699FF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#99FF88FF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#80FFD7FF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#99FFFFFF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ccolor=#FF9999FF\u003E/g, '<b style="color: var(--ct);">')
      .replace(/\u003Ci\u003E/g, '<i class="talent-description-i"> ')
      .replace(/\{F#.*?\}\{M#(.*?)\}/g, '$1') || '';
  };
    return (
      
        <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <div id="character-h1" className={elementFormatted}>
                <div id="header-container" >
                    <div className="header-icon">
                        <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="var(--sub)"
                                d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z">
                            </path>
                        </svg>
                    </div>
                    <div id="h1-box">
                      <h1 id="header-title">
                      &nbsp;{travelerName}{" "}Build{" "}
                      <span id="character-function">( {ptBr[characterBuild.function as keyof typeof ptBr]} )</span>
                      
                      </h1>
                    </div>
                </div>
            </div>

            <main id="main-content" className={elementFormatted}>
                <section id="character-banner">
        <Image
        id="character-image"
        className={`star${characterData.rarity}  character-icon-mobile`}
        src={`/images/Banners/${formatarNome(id)}_Card.png`}
        alt={characterData.name}
        width={560}
        height={315}
        loading="eager"
        priority={true}
        fetchPriority="high"
      />
      <Image
        id="character-image"
        className={`star${characterData.rarity} character-icon-pc`}
        src={`/images/Icons/${formatarNome(id)}.png`}
        alt={characterData.name}
        width={256}
        height={256}
        loading="eager"
        priority={true}
        fetchPriority="high"
      />
      
                    <div id="character-main">
                        <div id="character-header">
                            <div id="character-info">
                                   <div id="character-name-box"><h2 id="character-name" className={id=== 'sangonomiya-kokomi' ? 'compress-title' : ''}>{travelerName}</h2><span id={`r${characterData.rarity}`} aria-hidden="true">{characterData.rarity}★</span> </div>  
                                <div id="character-type">
                                    <p>
                                        <Image width={25} height={25} src={`/images/${characterData.weaponType}.webp`} alt={characterData.weaponText}/>
                                        {characterData.weaponText}
                                    </p>
                                    <p id="element">
                                        <Image width={23} height={23} src={`/images/element-${elementFormatted.toLowerCase()}.webp`} alt={elementFormatted}/>
                                        {elementFormatted}
                                    </p>
                                </div>
                            </div>
                            <p id="character-description">{extrairAtePrimeiroPonto(characterData.description)}.</p>
                        </div>
                        <CharacterStatsSlider stats={characterFolder} stats2={characterData} stats3={ptBr}/>
                    </div>
                </section>
                <section id="ascension-materials">
                    <h2 className="titles-h2">{travelerName}{" "}{ptBr.ascensionMaterials}</h2>
                    <ul id="ascension-materials-list">
                        <li className="ascension-materials-items">
                            <Image width={60} height={60} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[1].id}.png`}
                            alt={characterData.costs.ascend1[1].name}/>
                            <p>{characterData.costs.ascend1[1].name}</p>
                        </li>
                        <li className="ascension-materials-items">
                            <Image width={40} height={40} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[2].id}.png`}
                            alt={characterData.costs.ascend1[2].name}/>
                            <p>{characterData.costs.ascend1[2].name}</p>
                        </li>
                        <li className={id2=== 'aether' ? 'none' : 'ascension-materials-items'}>
                            <Image width={40} height={40} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend5[2].id}.png`}
                            alt={characterData.costs.ascend5[2].name}/>
                            <p>{characterData.costs.ascend5[2].name}</p>
                        </li>
                        <li className="ascension-materials-items">
                            <Image width={40} height={40} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[3].id}.png`}
                            alt={characterData.costs.ascend1[3].name}/>
                            <p>{characterData.costs.ascend1[3].name}</p>
                        </li>
                        <li className="ascension-materials-items">
                            <Image width={40} height={40} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterTalents.costs.lvl2[1].id}.png`}
                            alt={characterTalents.costs.lvl2[1].name}/>
                            <p>{characterTalents.costs.lvl2[1].name}</p>
                        </li>
                        <li className="ascension-materials-items">
                            <Image width={40} height={40} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterTalents.costs.lvl7[3].id}.png`}
                            alt={characterTalents.costs.lvl7[3].name}/>
                            <p>{characterTalents.costs.lvl7[3].name}</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="titles-h2">{travelerName}{" "}{ptBr.bestWeapon}</h2>
                        <div id="weapon-container">
                            <section id="weapon-section">
                                <div id="weapon-main">
                                  <Link href={`/weapons/${characterBuild.bestWeapon.toLowerCase().trim().replace(/\s+/g, '-')}`}>
                                    <Image
                                        className={`star${armasPT[0].rarity}`}
                                        src={`https://gi.yatta.moe/assets/UI/${armasPT[0].images.filename_icon}.png`}
                                        width={160}
                                        height={160}
                                        alt={armasPT[0].name}
                                    />
                                    </Link>
                                    <div id="weapon-header">
                                        <h3 className={`wa-${armasPT[0].rarity}`}>{armasPT[0].name}</h3>
                                        <div id="weapon-refinement">
                                        <WeaponStatsSlider arma2={characterWeapons} arma3={armasPT[0]} arma4={ptBr} />
                                                
                                        </div>

                                    </div>
                                </div>
                                <RefinamentoSlider arma2={ptBr} arma={armasPT[0]} />
                            </section>

                            <section id="other-weapons-section">
                                <h3 className="titles-h3">{ptBr.otherWeapons}</h3>
                                <div id="other-weapons-list">
                                    {armasPT.slice(1).map((weapons:any, i:any) => (
                                        <Link key={i} href={`/weapons/${characterBuild.otherWeapons[i].toLowerCase().trim().replace(/\s+/g, '-')}`}> 
                                        <span className="other-weapons-rank">{i+2}{ptBr.degree}</span>
                                            <Image
                                                className={`star${weapons.rarity}`}
                                                src={`https://gi.yatta.moe/assets/UI/${weapons.images.filename_icon}.png`}
                                                width={75}
                                                height={75}
                                                alt={weapons.name}
                                            />
                                        <div>
                                            <p>{weapons.name}</p>
                                            <p>{weapons.mainStatText}</p>
                                        </div>
                                        </Link>
                                    ))}
                                   
                                </div>
                            </section>
                        </div>
                </section>
                <AdComponent/>
                <section>
                    <h2 className="titles-h2">{travelerName}{" "}{ptBr.bestArtifacts}</h2>
                    <div id="artifacts-container">
                        <div id="artifacts-section">
                            <section id="artifacts-main">
                              <Link id="artifact-img-box" href={`/artifacts/${characterBuild.bestArtifacts.toLowerCase().trim().replace(/\s+/g, '-')}`}> 
                            <Image width={160} height={160} className="star5" src={`https://enka.network/ui/${artefatosPT[0].images.filename_flower}.png`} alt={artefatosPT[0].name}/>
                            </Link>
                                <div id="artifacts-header">
                                    <div>
                                        <h3 id="artifacts-h3" className="wa-5">{artefatosPT[0].name}</h3>
                                    </div>
                                    <div id="artifacts-description">
                                        <p id="artifacts-description-first-p">
                                            <b>{ptBr.twoPieces}:</b> {artefatosPT[0].effect2Pc}
                                        </p>  
                                        <p>
                                            <b>{ptBr.fourPieces}:</b> {artefatosPT[0].effect4Pc}
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section id="artifacts-main-stats-section">
                                <h3 className="titles-h3">{ptBr.artifactsMainStats}</h3>
                                <ul id="artifacts-main-stats">
                                    <li>
                                        <div className="stats-div"><Image width={30} height={30} src="/images/sands.webp" alt={ptBr.sands}/><div><div>{ptBr.sands}:</div></div></div>
                                        <p>{ptBr[characterBuild.mainStatsArtifacts[0] as keyof typeof ptBr]}</p>
                                    </li>
                                    <li>
                                        <div className="stats-div"><Image width={30} height={30} src="/images/goblet.webp" alt={ptBr.goblet}/><div><div>{ptBr.goblet}:</div></div></div>
                                        <p>{ptBr[characterBuild.mainStatsArtifacts[1] as keyof typeof ptBr]}</p>
                                    </li>
                                    <li>
                                        <div className="stats-div"><Image width={30} height={30} src="/images/circlet.webp" alt={ptBr.circlet}/><div><div>{ptBr.circlet}:</div></div></div>
                                        <p>{ptBr[characterBuild.mainStatsArtifacts[2] as keyof typeof ptBr]}</p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <section id="artifacts-sub-stats">
                            <h3 className="titles-h3">{ptBr.artifactsSubStats}</h3>
                            <ul>
                              {characterBuild.subStatsArtifacts.map((art:any,i:any) => (
                                <li key={i}><p>{ptBr[art as keyof typeof ptBr]}</p></li>
                              ))}
                            </ul>
                        </section>
                    </div>
                </section>
                {...characterBuild.otherArtifacts ? [<section>
                    <h2 className="titles-h2">{ptBr.otherArtifacts}</h2>
                    <div id="other-artifacts">
                    {artefatosPT.slice(1).map((art, i) => (
                    
                        
                    <Link key={i} href={`/artifacts/${characterBuild.otherArtifacts[i].toLowerCase().trim().replace(/\s+/g, '-')}`}> 
                            <span className="other-artifacts-set">{i+2}{ptBr.degree}</span>
                                        <div className="other-artifacts-box">
                                          <Image width={160} height={160} src={`https://enka.network/ui/${art.images.filename_flower}.png`} alt={art.name}/>
                                          <div className="other-artifacts-set-description">
                                            <span className="four-pieces-name">4x&nbsp;{art.name}</span>
                                          
                                                                          </div>
                                        </div>
                                        </Link>
                        ))}
                        {characterBuild.twoPieces!= null ? 
                        twoPiecesArtifacts.map((_, i) => {
                          // Só faz algo a cada dois itens
                          if (i % 2 !== 0) return null;
                          
                          const first = twoPiecesArtifacts[i];
                          const second = twoPiecesArtifacts[i + 1];
                          
                          
                          const pairIndex = i / 2 + 2
                          
                          return (
                            <Link key={i} href={`/artifacts/${characterBuild.twoPieces[i].toLowerCase().trim().replace(/\s+/g, '-')}`}>
                              <span className="other-artifacts-set">{(characterBuild.otherArtifacts.length === 0) ? (
  pairIndex 
): (pairIndex+1)}{ptBr.degree}</span>
                              <div className="other-artifacts-box">
                                <Image width={160} height={160} src={`https://enka.network/ui/${first.images.filename_flower}.png`} className="spp" alt={first.name} />
                                <Image width={160} height={160} src={`https://enka.network/ui/${second.images.filename_flower}.png`} alt={second.name} />
                                
                                <div className="other-artifacts-set-description">
                                  <div>
                                    <span className="two-pieces-name">2x {first.name}</span>
                                    <span className="two-pieces-name">2x {second.name}</span>
                                  </div>
                                </div>
                              </div>
                              </Link>
                          );
                        }) : ''}
                    </div >
                </section>] : []}
                
                <section id="character-talent-priority">
                    <h2 className="titles-h2">{travelerName}{" "}{ptBr.talentPriority}</h2>
                    <ol>
                        {characterBuild.talentPriority.map((stat:any) => ptBr[stat as keyof typeof ptBr]).map((tlt:any, i:any) => (
                            <li key={i}><p>{i+1}{ptBr.degree}</p><p>{tlt}</p></li>
                        ))}
                    </ol>
                </section>
                <section>
                    <h2 className="titles-h2">{travelerName}{" "}{ptBr.bestTeams}</h2>
                    <ol id="teams-list">
  {characterBuild.teams.map((team:any, i:any) => (
    <li className="team-card" key={i}>
      <table>
        <caption>Time #{i + 1}</caption> 
        <thead>
          <tr>
            {team.map((character:string, j:any) => {
              const characterFunction = Object.values(character)[0]; // Pega o nome do personagem
              return (
                <th key={j}>
                  {ptBr[characterFunction as keyof typeof ptBr]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {team.map((character:any, j:any) => {
              const characterName = Object.keys(character)[0]; // Pega o nome do personagem
              return (
                <td key={j} className="team-character">
                  <Link href={`/${characterName}`}>
                  <Image width={74} height={74}
                    src={`/images/Team-Icons/${formatarNome(characterName)}.png`} 
                    alt={formatarNomeComEspaco(formatarNome(characterName))}
                  /></Link>
                  <p>
                    {formatarNomeEspecial(formatarNomeComEspaco(formatarNome(characterName)))}
                  </p>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </li>
  ))}
</ol>

                </section>
                <AdComponent/>       
<section id="ascension-costs-section">
  <h2 className="titles-h2">{travelerName}{" "}{ptBr.ascensionCosts}</h2>
  <AscensionSlider currentCosts={characterData.costs} ptBr={ptBr}/>
</section>
<section id="talents-costs-section">
  <h2 className="titles-h2">{travelerName}{" "}{ptBr.talentCosts}</h2>
  <TalentsSlider currentCosts={characterTalents.costs} ptBr={ptBr}/>
</section>


                <section>
                <h2 className="titles-h2">{travelerName}{" "}{ptBr.talents}</h2>
            <div className="talents-ul">
            {(() => {
  const filteredItems = Object.entries(characterTalents)
    .filter(([key, p]) => key.startsWith('combat') && p); // Filtra apenas as entradas com chave "combat" e valor p existente

  // Se houver exatamente 4 itens, inverta o último com o penúltimo
  if (filteredItems.length === 4) {
    const lastIndex = filteredItems.length - 1;
    const secondLastIndex = lastIndex - 1;
    // Inverte o último e penúltimo item
    [filteredItems[lastIndex], filteredItems[secondLastIndex]] = [filteredItems[secondLastIndex], filteredItems[lastIndex]];
  }

  return filteredItems.map(([key, p]: any, index) => {
    // Verifica se 'p' tem 'name' e 'descriptionRaw' antes de renderizar a seção
    if (!p?.name || !p?.descriptionRaw) return null; // Caso não tenha, retorna null para não renderizar

    return (
      <section className="talents-box-cover" key={index}>
        <div className="talents-box">
          <h3 className="talents-name1">
            {formatCharacterName(`combat${index + 1}`)}
          </h3>
          <span
            className="talents-name"
            dangerouslySetInnerHTML={{
              __html: p.name.replace(/Ataque Normal: /g, ''),
            }}
          />
        </div>

        <div className="talents-description"
          dangerouslySetInnerHTML={{
            __html: sanitizeDescription(p.descriptionRaw)
          }}
        />
      </section>
    );
  });
})()}
            </div>
            
        </section>
                <section>
                <h2 className="titles-h2">{travelerName}{" "}{ptBr.passives}</h2>
            <div className="talents-ul">
              {Object.entries(characterTalents)
                .filter(([key]) => key.startsWith('p'))
                .map(([key, p]:any, index) => (
                  <section className="talents-box-cover" key={index}>
                    <div className="talents-box">
                      <h3 className="talents-name1">{ptBr.passive}&nbsp;{index + 1}
                      </h3>
                      <span className="talents-name">{p.name}</span>
                    </div>
                    <div className="talents-description"
          dangerouslySetInnerHTML={{
            __html: sanitizeDescription(p.descriptionRaw)}}
        />
                  </section>
              ))}
            </div>
            
            
        </section>
                <section>
                <h2 className="titles-h2">{travelerName}{" "}{ptBr.constellations}</h2>
            <div className="talents-ul">
              {Object.entries(characterConstellations)
                .filter(([key]) => key.startsWith('c'))
                .map(([key, c]:any, index) => (
                  <section className="talents-box-cover" key={index}>
                    <div className="talents-box">
                      <h3 className="talents-name1">C{index + 1}
                      </h3>
                      <span className="talents-name">{c.name}</span>
                    </div>
                    <div className="talents-description"
          dangerouslySetInnerHTML={{
            __html: sanitizeDescription(c.descriptionRaw)
          }}
        />
                  </section>
              ))}
            </div>
            
            
        </section>

            </main>
            
            <ScriptsClient/>
            <SliderHighlight />
        </>
    )
    }