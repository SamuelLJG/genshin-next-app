import Image from "next/image"
import {characters} from "@/data/characters"
import Link from "next/link";
import Filter from "@/components/full-filter";

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
            <Filter/>
            <hr />
            <div id="main-characters-flex">
            {characters.map((char:any,i:any)=> (
                <Link href={`/${char.name}`} key={i} className={`character-card ${char.elementType} ${char.name} ${char.weapon}`}>
            <Image width={169} height={169} src={`/images/Icons/${formatarNome(char.name)}.png`} loading="eager" alt=""/>
            <p>{formatCharacterName(formatarNomeComEspaco(formatarNome(char.name)))}</p>
            {char.newCharacter != null ? <span>{char.newCharacter}</span> : ''  }
            
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