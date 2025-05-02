import Link from "next/link"
import Image from "next/image"

export default function Nav() {
    return (
        <nav>
                        <h2>Menu Principal de Navegação</h2>
                        <Link href="/" id="titlessss">
                            <div>
                            <Image width={52} height={52} loading="eager" src={`/images/Icons/Layla.png`} alt=""/></div>
                            <div id="logo">genshinbuild.com</div>
                        </Link>
                        <Link href="/tier-list" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/tierlist.svg" alt=""/>
                            </div>
                            <span className="names">Tier-List</span>
                        </Link>
                        <Link href="/weapons" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/weapons.svg" alt=""/>
                            </div>
                            
                            <span className="names">Armas</span>
                        </Link>
                        <Link href="/" className="links" id="home">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/home.svg" alt=""/>
                            </div>
                            <span className="names">Início</span>
                        </Link>    
                        <Link href="/artifacts" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/artifacts.svg" alt=""/>
                            </div>
                            <span className="names">Artefatos</span>
                        </Link>
                        <Link href="/teams" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/teams.svg" alt=""/>
                            </div>    
                            <span className="names">Times</span>
        
                        </Link>
                    </nav>
    )
}