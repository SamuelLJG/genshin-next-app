'use client';

import { useEffect, useState, ChangeEvent } from 'react';

const weaponOptions = [
  { label: 'Espada', value: 'WEAPON_SWORD_ONE_HAND' },
  { label: 'Espadão', value: 'WEAPON_CLAYMORE' },
  { label: 'Lança', value: 'WEAPON_POLE' },
  { label: 'Arco', value: 'WEAPON_BOW' },
  { label: 'Catalisador', value: 'WEAPON_CATALYST' }
];

export default function WeaponsFilter() {
  const [searchFilter, setSearchFilter] = useState('');
  const [activeRarity, setActiveRarity] = useState<string | null>(null);
  const [activeWeapon, setActiveWeapon] = useState<string | null>(null);

  const ignoreClasses = ['weapon-card', ...weaponOptions.map(w => w.value)];

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.weapon-card');

    cards.forEach((card) => {
      const classList = Array.from(card.classList);
      const filteredClasses = classList.filter(cls => !ignoreClasses.includes(cls));
      const nameClasses = filteredClasses.filter(cls => !/rarity-\d/.test(cls)); // ignora raridade na busca

      const matchesSearch = nameClasses.some(cls =>
        cls.toLowerCase().includes(searchFilter.toLowerCase())
      );

      const matchesRarity = activeRarity ? classList.includes(`rarity-${activeRarity}-weapon`) : true;
      const matchesWeapon = activeWeapon ? classList.includes(activeWeapon) : true;

      const isVisible = matchesSearch && matchesRarity && matchesWeapon;
      card.style.display = isVisible ? '' : 'none';
    });
  }, [searchFilter, activeRarity, activeWeapon]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const handleRarityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveRarity(value === '' ? null : value);
  };

  const handleWeaponChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setActiveWeapon(value === '' ? null : value);
  };

  return (
    <div id='filter-section2'>
      {/* Barra de Pesquisa */}
      <div className='top-name'>
        <label htmlFor='index-search'>Pesquise</label>
        <input
          type="text"
          placeholder="Digite um nome..."
          id="index-search"
          value={searchFilter}
          onChange={handleSearchChange}
        />
      </div>

      <div id='select-box'>
          {/* Select de Raridade */}
          <div className='top-name2'>
            <label htmlFor='weapons-select'>Raridade</label>
            <select onChange={handleRarityChange} value={activeRarity ?? ''} id='weapons-select'>
              <option value="">Todas</option>
              <option value="5">5 Estrelas</option>
              <option value="4">4 Estrelas</option>
              <option value="3">3 Estrelas</option>
              <option value="2">2 Estrelas</option>
              <option value="1">1 Estrela</option>
            </select>
          </div>
          {/* Select de Arma (substituto dos botões) */}
          <div className='top-name2'>
            <label htmlFor='weapon-type-select'>Tipo de Arma</label>
            <select onChange={handleWeaponChange} value={activeWeapon ?? ''} id='weapon-type-select'>
              <option value="">Todas</option>
              {weaponOptions.map(({ label, value }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
      </div>
    </div>
  );
}