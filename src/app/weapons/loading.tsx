import Image from "next/image"
import Nav from "@/components/navGeneric"

export default function Loading() {
    return (
        <body id="loading-body">
            
        <main id="loading-main">
            <Image width={1000} height={600} src={'/images/characters-loading.gif'} loading="eager" unoptimized alt=""/>
        </main>
       <Nav/>
        </body>
    )
}