// components/WeaponStatsSlider.tsx
'use client'
import { useState } from 'react'

export default function WeaponStatsSlider({ arma2,arma3 }: { arma2: any, arma3:any }) {
    const [weaponstats, setWeaponStats] = useState(90)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeaponStats(Number(e.target.value))
    }

    const descricao1 = arma2?.[`${weaponstats}`]?.attack
    const descricao2 = arma2?.[`${weaponstats}`]?.specialized
    
    return (
            <div id="weapon-stats">
            <div id="weapon-level">
                Nível. {weaponstats}
            <input className="slider" type="range" defaultValue="90" min="1" max="90" onChange={handleChange} />
            </div>
                <ul id="weapon-main-stats">
            <li>
                <span>ATQ Básico</span>
                <hr/>
                <span>{Math.round(descricao1)}</span>
            </li>
            <li>
                <span>{arma3.mainStatText}</span>
                <hr/>
                <span>{Math.round(descricao2 * 1000 ** 1) / 10 ** 1}%</span>
            </li>
        </ul>
        </div>
    )
}