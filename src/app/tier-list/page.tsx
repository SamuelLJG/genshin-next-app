import Image from "next/image"
import {characters} from "@/data/characters"
import Link from "next/link";
import ptBr from "@/data/pt-br.json"
import React from "react";

export default function Teams() {
    function formatarNome(nome:string) {
        return nome
          .split('-')
          .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
          .join('_');
      }
      
      type Role = 'mainDps' | 'subDps' | 'support';

const functions: Role[] = ['mainDps', 'subDps', 'support'];

const functionLabels: Record<Role, string> = {
  mainDps: 'Main DPS',
  subDps: 'Sub-DPS',
  support: 'Suporte',
};
      
      const ranks = ['S', 'A', 'B', 'C', 'D'];
    return (
        <main id="main-index" className="iii"> 
        
        <div id="h1-flex">
            <Image src="/images/sort-lowest-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} alt="" loading="eager" />
            <h1 id="index-h1" style={{display:'block'}}>Genshin Impact {" "} <span className="nowrap"> Tier-List</span></h1>
            </div>
            <ul id="tier-list-flex">
      {ranks.map((rank) => (
        <li className="tiers-flex" key={rank}>
          <span className="tiers">{rank}</span>
          <ul className="tiers-functions">
            {functions.map((func) => {
              const chars = characters.filter(
                (p) =>
                  p.rank?.toUpperCase() === rank &&
                  p.function?.toLowerCase() === func.toLowerCase()
              );

              return (
                <React.Fragment key={func}>
                  <li className="function-name">{functionLabels[func]}</li>
                  <li className="tier-list-characters-flex">{chars.map((p) => <Link href={p.name} key={p.name}><Image width={100} height={100} src={`/images/Team-Icons/${formatarNome(p.name)}.png`} alt="" /></Link>)}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
            </main>
    )
}