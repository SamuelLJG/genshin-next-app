import Image from "next/image"


export default function Loading() {
    return (
        <main id="loading-main">
            <Image width={1000} height={600} src={'/images/characters-loading.gif'} loading="eager" unoptimized alt="Loading..."/>
        </main>
    )
}