'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image';

const elementOptions = ['anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', 'pyro'];
const weaponOptions = ['WEAPON_SWORD_ONE_HAND', 'WEAPON_CLAYMORE', 'WEAPON_POLE', 'WEAPON_BOW', 'WEAPON_CATALYST'];

export default function CharacterFilters() {
  const [searchFilter, setSearchFilter] = useState('');
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [activeWeapon, setActiveWeapon] = useState<string | null>(null);
  const ignoreClasses = ['character-card', 'anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', 'pyro','WEAPON_SWORD_ONE_HAND', 'WEAPON_CLAYMORE', 'WEAPON_POLE', 'WEAPON_BOW', 'WEAPON_CATALYST'];
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.character-card');

    cards.forEach((card) => {
      const filteredClasses = Array.from(card.classList).filter(
        (cls) => !ignoreClasses.includes(cls)
      );
      const classList = Array.from(card.classList);
      const nameClasses = classList.filter(
        (cls) => !elementOptions.includes(cls) && !weaponOptions.includes(cls) && cls !== 'character-card'
      );

      const matchesSearch = filteredClasses.some(cls =>
        cls.toLowerCase().includes(searchFilter.toLowerCase())
      );

      const matchesElement = activeElement ? classList.includes(activeElement) : true;
      const matchesWeapon = activeWeapon ? classList.includes(activeWeapon) : true;

      const isVisible = matchesSearch && matchesElement && matchesWeapon;
      card.style.display = isVisible ? '' : 'none';
    });
  }, [searchFilter, activeElement, activeWeapon]);

  const toggleElement = (element: string) => {
    setActiveElement(prev => (prev === element ? null : element));
  };

  const toggleWeapon = (weapon: string) => {
    setActiveWeapon(prev => (prev === weapon ? null : weapon));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div id='filter-section'>
      {/* Barra de Pesquisa */}
      <div className='top-name'>
        <p>Pesquise</p>
        <input
          type="text"
          placeholder="Digite um nome..."
          id="index-search"
          value={searchFilter}
          onChange={handleSearchChange}
        />
    </div>


      <div id='we-section'>
          <div className='top-name'>
            <p>Elementos</p>
          <div className='buttons-flex'>
            {elementOptions.map((element) => (
              <button
                key={element}
                onClick={() => toggleElement(element)}
                className={`${activeElement === element
                    ? 'button-active'
                    : `button-not-active ${element}`
                }`}
              >
                <div>
                <Image width={30} height={30} src={`/images/element-${element}.webp`} alt=''/>
                </div>
              </button>
            ))}
          </div>
          </div>
          
          <div className='top-name'>
            <p>Armas</p>
            <div className='buttons-flex buttons-weapons'>
              {weaponOptions.map((weapon) => (
                <button
                  key={weapon}
                  onClick={() => toggleWeapon(weapon)}
                  className={`${activeWeapon === weapon
                    ? 'button-active'
                    : `button-not-active ${weapon}`
                }`}
                >
                  <div>
                <Image width={30} height={30} src={`/images/${weapon}.webp`} alt=''/>
                </div>
                </button>
              ))}</div>
            </div>
      </div>
    
    </div>
)}
    