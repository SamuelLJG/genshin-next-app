import Image from "next/image"
import {characters} from "@/data/characters"
import Link from "next/link";

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
        <body>
            
        <main id="main-index"> 
            <h1 id="index-h1">Genshin Impact Lista de Personagens</h1>
            <br />
            <div id="main-characters-flex">
            {characters.map((char:any,i:any)=> (
                <Link href={`/${char.name}`} key={i} className={`character-card ${char.elementType}`}>
            <Image width={100} height={100} src={`/images/Team-Icons/${formatarNome(char.name)}.png`} alt=""/>
            <p>{formatCharacterName(formatarNomeComEspaco(formatarNome(char.name)))}</p>
            </Link>
        ))}</div></main>
        <nav>
                        <h2>Menu Principal de Navegação</h2>
                        <Link href="" id="titlessss">
                            <div>
                            <Image width={52} height={52} loading="eager" src={`/images/Icons/Layla.png`} alt=""/></div>
                            <div id="logo">genshinbuild.com</div>
                        </Link>
                        <a href="/" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/tierlist.svg" alt=""/>
                            </div>
                            <span className="names">Tier-List</span>
                        </a>
                        <a href="/" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/weapons.svg" alt=""/>
                            </div>
                            
                            <span className="names">Armas</span>
                        </a>
                        <a href="/" className="links" id="home">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/home.svg" alt=""/>
                            </div>
                            <span className="names">Início</span>
                        </a>    
                        <a href="/" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/artifacts.svg" alt=""/>
                            </div>
                            <span className="names">Artefatos</span>
                        </a>
                        <a href="/" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/farming.svg" alt=""/>
                            </div>    
                            <span className="names">Farming</span>
        
                        </a>
                    </nav>
        </body>
    )
}