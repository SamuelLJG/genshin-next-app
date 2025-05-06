import Image from "next/image";
import { characters } from "@/data/characters";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tier List 5.5 | Genshin Impact ",
  description: "Confira a tier list atualizada de Genshin Impact com os melhores personagens. Veja quem está no topo do meta em 2025!",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`
  }
};

export default function Teams() {
  function formatarNome(nome: string) {
    return nome
      .split("-")
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join("_");
  }
  function formatarNomeComEspaco(nome: string) {
    return nome
      .split('_')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  }
  const ranks = ["S", "A", "B", "C", "D"];

  return (
    <main id="main-index" className="iii">
      <div id="h1-flex">
        <Image
          src="/images/sort-lowest-svgrepo-com.svg"
          className="index-h1-icon"
          width={30}
          height={30}
          alt=""
          loading="eager"
        />
        <h1 id="index-h1" style={{ display: "block" }}>
          Genshin Impact <span className="nowrap"> Tier-List 5.5</span>
        </h1>
      </div>
      <ul id="tier-list-flex">
        {ranks.map((rank) => {
          const chars = characters.filter(
            (p) => p.rank?.toUpperCase() === rank
          );

          return (
            <li className="tiers-flex" key={rank}>
              <span className="tiers">{rank}</span>
              <ul className="tier-list-characters-flex">
                {chars.map((p) => (
                  <li key={p.name}>
                    <Link href={p.name}>
                      <Image
                        width={100}
                        height={100}
                        src={`/images/Team-Icons/${formatarNome(p.name)}.png`}
                        alt={formatarNomeComEspaco(formatarNome(p.name))}
                        className={`border-${p.elementType}`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}