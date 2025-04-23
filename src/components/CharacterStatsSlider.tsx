// components/CharacterStatsSlider.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function CharacterStatsSlider({ stats, stats2, stats3 }:any) {
    const [characterlvl, setCharacterStats] = useState(90)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterStats(Number(e.target.value))
    }

    const descricao1 = Math.round( stats?.[`${characterlvl}`]?.hp)
    const descricao2 = Math.round(stats?.[`${characterlvl}`]?.attack)
    const descricao3 = Math.round(stats?.[`${characterlvl}`]?.defense)
    const descricao4 = stats?.[`${characterlvl}`]?.specialized
    let calc= descricao4;
    if (stats2.substatText !== "Proficiência Elemental") {
         calc = (Math.round(descricao4 * 1000 ** 1) / 10 ** 1)+'%'
    } 
    console.log(calc)
    return (
        
        <section id="character-basic-stats">
        <div id="character-basic-stats-flex">
            <h2 id="character-basic-stats-title" className="titles-h2">Estatísticas Básicas</h2>
            <div id="character-basic-stats-level">
                <span>Nv.&nbsp;{characterlvl}</span>
                <input type="range" defaultValue="90" min="1" max="90" onChange={handleChange}/>
            </div>
        </div>
        <ul id="character-basic-stats-list">
            <li>
                <p>
                    <img src="https://www.prydwen.gg/static/8aee0c2fe3ebac754669702c71428321/8fcc8/stat_hp.webp" alt="Ícone representando Vida Básica"/>
                    {stats3.hp}
                </p>
                <span>{descricao1}</span>
            </li>
            <li>
                <p>
                    <img src="https://www.prydwen.gg/static/d8d4e909851661548e2f972ce28e60c8/8fcc8/stat_atk.webp" alt="Ícone representando Ataque Básico"/>
                    Ataque Básico
                </p>
                <span>{descricao2}</span>
            </li>
            <li>
                <p>
                    <img src="https://www.prydwen.gg/static/8761d1d45b2e04339d837d3980965105/8fcc8/stat_def.webp" alt="Ícone representando Defesa Básica"/>
                    Defesa Básica
                </p>
                <span>{descricao3}</span>
            </li>
            <li>
                <p><Image width={25} height={25} src={`/images/${stats2.substatType}.png`} alt={`${" "}${stats2.substatText}`}/>
                    {stats2.substatText}
                </p>
                <span>{calc}</span>
            </li>
        </ul>

    </section>
    )
}