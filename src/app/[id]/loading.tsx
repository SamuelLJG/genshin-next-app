import Image from "next/image"
import Link from "next/link"

export default function Loading() {
    return (
        <body id="loading-body">
            
        <main id="loading-main">
            <Image width={1000} height={600} src={'/images/characters-loading.gif'} unoptimized alt=""/>
        </main>
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