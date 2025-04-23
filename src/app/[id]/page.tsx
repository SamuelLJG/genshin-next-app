import Image from "next/image";
import {characters} from "@/data/characters"
import RefinamentoSlider from '@/components/RefinamentSlider'
import WeaponStatsSlider from "@/components/WeaponStatsSlider";
import CharacterStatsSlider from "@/components/CharacterStatsSlider";
import SliderHighlight from '@/components/SliderHighlight';
import ptBr from '@/data/pt-br.json'
import ScriptsClient from '@/components/scripts-client'
 
export default async function Home( { params }:any ) {
    const { id } = await params;
    const characterBuild:any = characters.find(p => p.name === id);
    const nomesDasArmas = [characterBuild.bestWeapon, ...characterBuild.otherWeapons];
    async function getArmas() {
      const baseURL = 'https://genshin-db-api.vercel.app/api/v5/weapons?query=';
      const responsesPT = await Promise.all(
        nomesDasArmas.map(nome => {
          const nomeLimpo = encodeURIComponent(nome.trim());
          return fetch(`${baseURL}${nomeLimpo}&resultLanguage=portuguese`, { cache: 'reload' });
        })
      );
      const armasPT = await Promise.all(responsesPT.map(res => res.json()));
      const responsesEN = await Promise.all(
        nomesDasArmas.map(nome => {
          const nomeLimpo = encodeURIComponent(nome.trim());
          return fetch(`${baseURL}${nomeLimpo}`, { cache: 'reload' });
        })
      );
      const armasEN = await Promise.all(responsesEN.map(res => res.json()));
      return { armasPT, armasEN };
    }
    const { armasPT, armasEN } = await getArmas();
    async function getData() {
      const armaNomeOriginal = encodeURIComponent(armasEN[0].name);
      const urls = [
        `https://genshin-db-api.vercel.app/api/v5/characters?query=${id}&resultLanguage=portuguese`,
        `https://genshin-db-api.vercel.app/api/v5/stats?folder=characters&query=${id}`,
        `https://genshin-db-api.vercel.app/api/v5/stats?folder=weapons&query=${armaNomeOriginal}`,
        `https://genshin-db-api.vercel.app/api/v5/talents?query=${id}&resultLanguage=portuguese`
      ];
      const responses = await Promise.all(urls.map(url => fetch(url, { cache: 'reload' })));
      const data = await Promise.all(responses.map(res => res.json()));
      return {
        characterData: data[0],
        characterFolder: data[1],
        characterWeapons: data[2],
        characterTalents: data[3]
      };
    }
    const { characterData, characterFolder, characterWeapons, characterTalents } = await getData();
    return (
        <body id={characterData.elementText}>
            <SliderHighlight />
            <h1>
                <div id="header-container">
                    <div className="header-icon">
                        <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="var(--sub)"
                                d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z">
                            </path>
                        </svg>
                    </div>
                    <div id="header-title">
                    &nbsp;{characterData.name}{" "}Build{" "}
                        
                    </div>
                </div>
            </h1>
            <main id="main-content">
                <section id="character-banner">
                    <picture>
                        <source srcSet={`images/${characterData.images.filename_icon}.png`} media="(max-width: 825px)"/>
                        <img id="character-image" className={`star${characterData.rarity}`} src={`images/${characterData.name}.png`} alt="example" />
                    </picture>
                    <div id="character-main">
                        <div id="character-header">
                            <div id="character-info">
                                    <h2 id="character-name">{characterData.name} <span id={`r${characterData.rarity}`} aria-hidden="true">{characterData.rarity}★</span> </h2>
                                <div id="character-type">
                                    <p>
                                        <img src={`images/${characterData.weaponType}.webp`} alt=""/>
                                        {characterData.weaponText}
                                    </p>
                                    <p id="element">
                                        <img src={`images/${characterData.elementText}.webp`} alt=""/>
                                        {characterData.elementText}
                                    </p>
                                </div>
                            </div>
                            <p id="character-description">{characterData.description}</p>
                        </div>
                        <CharacterStatsSlider stats={characterFolder} stats2={characterData} stats3={ptBr}/>
                    </div>
                </section>
                <section id="ascension-materials">
                    <h2 className="titles-h2">{characterData.name}{" "}{ptBr.ascensionMaterials}</h2>
                    <ul id="ascension-materials-list">
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[1].id}.png`}
                            alt=""/>
                            <p>{characterData.costs.ascend1[1].name}</p>
                        </li>
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[2].id}.png`}
                            alt=""/>
                            <p>{characterData.costs.ascend1[2].name}</p>
                        </li>
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend5[2].id}.png`}
                            alt=""/>
                            <p>{characterData.costs.ascend5[2].name}</p>
                        </li>
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterData.costs.ascend1[3].id}.png`}
                            alt=""/>
                            <p>{characterData.costs.ascend1[3].name}</p>
                        </li>
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterTalents.costs.lvl2[1].id}.png`}
                            alt=""/>
                            <p>{characterTalents.costs.lvl2[1].name}</p>
                        </li>
                        <li>
                            <Image width={256} height={256} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${characterTalents.costs.lvl7[3].id}.png`}
                            alt=""/>
                            <p>{characterTalents.costs.lvl7[3].name}</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="titles-h2">{characterData.name}{" "}{ptBr.bestWeapon}</h2>
                        <div id="weapon-container">
                            <section id="weapon-section">
                                <div id="weapon-main">
                                    <Image
                                        className={`star${armasPT[0].rarity}`}
                                        src={`https://gi.yatta.moe/assets/UI/${armasPT[0].images.filename_icon}.png`}
                                        width={160}
                                        height={160}
                                        alt={armasPT[0].name}
                                    />
                                    <div id="weapon-header">
                                        <h3>{armasPT[0].name}</h3>
                                        <div id="weapon-refinement">
                                        
                                                <RefinamentoSlider arma2={ptBr} arma={armasPT[0]} />
                                        </div>

                                    </div>
                                </div>
                                <WeaponStatsSlider arma2={characterWeapons} arma3={armasPT[0]} />
                            </section>

                            <section>
                                <h3 className="titles-h3">{ptBr.otherWeapons}</h3>
                                <ol id="other-weapons-list">
                                    <li>
                                        <span className="other-weapons-rank">{ptBr.second}</span>
                                            <Image
                                                className={`star${armasPT[1].rarity}`}
                                                src={`https://gi.yatta.moe/assets/UI/${armasPT[1].images.filename_icon}.png`}
                                                width={75}
                                                height={75}
                                                alt={armasPT[1].name}
                                            />
                                        <div>
                                            <p>{armasPT[1].name}</p>
                                            <p>{armasPT[1].mainStatText}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="other-weapons-rank">{ptBr.third}</span>
                                            <Image
                                                className={`star${armasPT[2].rarity}`}
                                                src={`https://gi.yatta.moe/assets/UI/${armasPT[2].images.filename_icon}.png`}
                                                width={75}
                                                height={75}
                                                alt={armasPT[2].name}
                                            />
                                        <div>
                                            <p>{armasPT[2].name}</p>
                                            <p>{armasPT[2].mainStatText}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="other-weapons-rank">{ptBr.fourth}</span>
                                            <Image
                                                className={`star${armasPT[3].rarity}`}
                                                src={`https://gi.yatta.moe/assets/UI/${armasPT[3].images.filename_icon}.png`}
                                                width={75}
                                                height={75}
                                                alt={armasPT[3].name}
                                            />
                                        <div>
                                            <p>{armasPT[3].name}</p>
                                            <p>{armasPT[3].mainStatText}</p>
                                        </div>
                                    </li>
                                </ol>
                            </section>
                        </div>
                </section>
                <section>
                    <h2 className="titles-h2">{characterData.name}{" "}{ptBr.bestArtifacts}</h2>
                    <div id="artifacts-container">
                        <div id="artifacts-section">
                            <section id="artifacts-main">
                            <img className="star5" src="images/Item_Visitante_do_Labirinto.webp" alt=""/>
                                <div id="artifacts-header">
                                    <div>
                                        <h3 id="artifacts-h3">Nighttime Whispers</h3>
                                    </div>
                                    <div id="artifacts-description">
                                        <p id="artifacts-description-first-p">
                                            <b>{ptBr.twoPieces}:</b> Efeito de Cura do Personagem aumenta em 15%
                                        </p>  
                                        <p>
                                            <b>{ptBr.fourPieces}:</b> Depois que as Habilidades Elementais ou Supremos acertam os oponentes,
                                            a RES Dendro dos alvos serão reduzidas em 30% por 8s. Esse efeito pode ser desencadeado mesmo se o
                                            personagem equipando este conjunto não estiver em campo.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section id="artifacts-main-stats-section">
                                <h3 className="titles-h3">{ptBr.artifactsMainStats}</h3>
                                <ul id="artifacts-main-stats">
                                    <li>
                                        <div className="stats-div"><img src="images/amp.webp" alt=""/><div>{ptBr.sands}:</div></div>
                                        <p>Proficiência Elemental</p>
                                    </li>
                                    <li>
                                        <div className="stats-div"><img src="images/calicee3.webp" alt=""/><div>{ptBr.goblet}:</div></div>
                                        <p>Bônus de Dano Dendro</p>
                                    </li>
                                    <li>
                                        <div className="stats-div"><img src="images/tiara.webp" alt=""/><div>{ptBr.circlet}:</div></div>
                                        <p>Taxa Crítica ou Dano Crítico</p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <section id="artifacts-sub-stats">
                            <h3 className="titles-h3">Sub-Status dos artefatos</h3>
                            <ul>
                                <li><p>Dano Crítico</p></li>
                                <li><p>Taxa Crítica</p></li>
                                <li><p>Proficiência Elemental</p></li>
                                <li><p>Recarga de Energia</p></li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section>
                    <h2 className="titles-h2">{ptBr.otherArtifacts}</h2>
                    <div id="other-artifacts">
                        <section>
                            <h3 className="other-artifacts-set">4x Sonhos Dourados</h3>
                                <div className="other-artifacts-set-img-list">
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15026_4.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15026_2.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15026_5.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15026_1.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15026_3.png" alt=""/>
                                </div>
                                <div className="other-artifacts-set-description">
                                    <p>
                                        <b>2 Peças:</b>{" "}Bônus de Dano Dendro +15%</p>
                                        <p>
                                    <b>4 Peças:</b>{" "}Depois que as Habilidades Elementais ou Supremos acertam os oponentes, a RES Dendro dos alvos serão reduzidas em 30% por 8s. Esse efeito pode ser desencadeado mesmo se o personagem equipando este conjunto não estiver em campo.</p>
                                </div>
                        </section>
                        <section>
                            <h3 className="other-artifacts-set">4x Crônicas do Pavilhão do Deserto</h3>
                                <div className="other-artifacts-set-img-list">
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15017_4.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15017_2.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15017_5.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15017_1.png" alt=""/>
                                    <img src="https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15017_3.png" alt=""/>
                                </div>
                                <div className="other-artifacts-set-description">
                                    <p>
                                        <b>2 Peças:</b>{" "}Aumenta o dano da Habilidade Elemental em 20%
                                    </p>
                                    <p>
                                    <b>4 Peças:</b>{" "}Aumenta o Dano da Habilidade Elemental em 25%. Além disso, quando o personagem não está no campo de batalha, o Dano da Habilidade Elemental aumenta em mais 25%. Este efeito será removido 2s após o personagem entrar no campo de batalha.
                                    </p>
                                </div>
                                
                        </section>
                    </div>
                </section>
                <section id="character-talent-priority">
                    <h2 className="titles-h2">{characterData.name}{" "}{ptBr.talentPriority}</h2>
                    <ol>
                        <li><p>{ptBr.first}</p><p>{characterBuild.talentPriority[0]}</p></li>
                        <li><p>{ptBr.second}</p><p>{characterBuild.talentPriority[1]}</p></li>
                        <li><p>{ptBr.third}</p><p>{characterBuild.talentPriority[2]}</p></li>
                    </ol>
                </section>
                <section>
                    <h2 className="titles-h2">{characterData.name}{" "}{ptBr.bestTeams}</h2>
                    <ol id="teams-list">
                        <li className="team-card">
                            <table>
                                <caption>#1 FURINA TIME DE VAPORIZAÇÃO</caption>
                                <thead>
                                    <tr>
                                        <th>Main DPS</th>
                                        <th>Sub-DPS</th>
                                        <th>Suporte</th>
                                        <th>Suporte</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="team-character"><img src="images/Icons/mavuika.png" alt="Mavuika"/><p>Mavuika</p></td>
                                        <td className="team-character"><img src="images/Icons/furina.png" alt="{characterData.name}"/><p>{characterData.name}</p></td>
                                        <td className="team-character">
                                        <img src="images/Icons/xilonen.png" alt="Xingqiu"/>
                                        <p>Xilonen</p>
                                        </td>
                                        <td className="team-character">
                                        <img src="images/Icons/bennett.png" alt="Sangonomiya Kokomi"/>
                                        <p>Bennett</p>
                                        </td>
                            </tr>
                            </tbody>
                            </table>
                    
                    
                    
                        </li>
                        
                    </ol>
                </section>
            </main>
            <nav>
                <h2>Menu Principal de Navegação</h2>
                <a href="" id="titlessss">
                    <div><Image width={52} height={52} src={`/images/${characterData.name}.png`} alt=""/></div>
                    <div id="logo">genshinbuild.com</div>
                </a>
                <a href="/" className="links">
                    <div>
                        <img src="images/header-icons/tierlist.svg" alt=""/>
                    </div>
                    <span className="names">Tier-List</span>
                </a>
                <a href="/" className="links">
                    <div>
                    <img src="images/header-icons/weapons.svg" alt=""/>
                    </div>
                    
                    <span className="names">Armas</span>
                </a>
                <a href="/" className="links" id="home">
                    <div>
                        <img src="images/header-icons/home.svg" alt=""/>
                    </div>
                    <span className="names">Início</span>
                </a>    
                <a href="/" className="links">
                    <div>
                    <img src="images/header-icons/artifacts.svg" alt=""/>
                    </div>
                    <span className="names">Artefatos</span>
                </a>
                <a href="/" className="links">
                    <div>
                    <img src="images/header-icons/farming.svg" alt=""/>
                    </div>    
                    <span className="names">Farming</span>

                </a>
            </nav>
            <ScriptsClient/>
        </body>
    )}