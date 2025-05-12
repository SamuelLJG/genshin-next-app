import Image from "next/image"
import Nav from "@/components/nav-en"
import Footer from "@/components/footer-en"

export default function Loading() {
    return (
        <html lang="en">
            <body>
                <Nav/>
        <main id="loading-main">
            <Image width={1000} height={600} src={'/images/characters-loading.gif'} loading="eager" unoptimized alt="Loading..."/>
        </main>
        <Footer/>
            </body>

        </html>
    )
}