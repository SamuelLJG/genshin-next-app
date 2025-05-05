import Image from "next/image"
import {characters} from "@/data/characters"
import Link from "next/link";
import Filter from "@/components/full-filter";
import ptBr from "@/data/pt-br.json"

export default function Home() {
    function formatarNome(nome:string) {
        return nome
          .split('-')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join('_');
      }
      function formatarNomeComEspaco(nome: string) {
        return nome
          .split('_')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join(' ');
      }
      function formatCharacterName(name: string) {
       
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
    return (
        <main id="main-index" className="iii"> 
        
        <div id="h1-flex">
            <Image src="/images/list-paper-school-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} alt="" loading="eager" /> <h1 id="index-h1">Genshin Impact {ptBr.charactersList}</h1>
          </div>
            <Filter ptBr={ptBr}/>
            <div id="main-characters-flex">
            {characters.map((char:any,i:any)=> (
                <Link href={`/${char.name}`} key={i} className={`character-card ${char.elementType} ${char.name.replace(/-/g, '').replace(/traveler/gi, "viajante")} ${char.weapon} rarity-${char.rarity}`}>
            <Image width={100} height={100} src={`/images/Team-Icons/${formatarNome(char.name)}.png`} alt="" className={`rarity-${char.rarity}`} loading="eager" priority/>
            <p>{formatCharacterName(formatarNomeComEspaco(formatarNome(char.name)))}</p>
            {char.newCharacter != null ? <span>{char.newCharacter}</span> : ''  }
            
            </Link>
            
        ))}</div></main>
    )
}