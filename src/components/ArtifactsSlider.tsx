'use client'

import Image from "next/image"
import SliderHighlight from "./SliderHighlight";
import Link from "next/link";
import AdComponent from "./Adsense";

   // ou use um state p/ controlar o nível (de 1 a 5)
   function formatarNome(nome:string) {
    return nome
      .split('-')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join('_');
  }
  function formatarNomeComEspaco(nome: string) {
    return nome
      .split('_')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  }
 
  const artifacts = ['flower', 'plume', 'sands', 'goblet', 'circlet']
export default function WeaponSlider ({ ptData, matchedCharacters, ptBr }: any) {
    return (
        <>
            <div id="character-h1" className="icon-wa-svg">
                <div id="header-container">
                    <div className="header-icon">
                        <svg className="icon" viewBox="0 0 396.079 396.079" fill="#23242a" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M368.738,147.224c7.356-18.313,7.362-36.373-1.709-48.867c-16.381-22.556-56.126-18.441-88.78,9.187 c-32.935,27.868-37.662,71.655-34.661,80.346c2.68,8.795,32.242,41.438,75.267,44.629c42.656,3.157,77.229-16.876,77.225-44.753 C396.075,172.322,385.455,157.714,368.738,147.224z"></path> <path d="M313.314,249.568c-36.682-22.711-79.787-13.676-87.125-8.136c-7.535,5.267-29.447,43.469-19.186,85.374 c10.18,41.545,39.915,68.232,66.426,59.614c14.685-4.776,25.294-19.39,30.106-38.53c19.69,1.339,36.869-4.237,45.949-16.726 C365.874,308.615,349.682,272.086,313.314,249.568z"></path> <path d="M169.89,241.434c-7.338-5.54-50.442-14.573-87.124,8.136c-36.366,22.519-52.56,59.047-36.171,81.598 c9.08,12.488,26.258,18.063,45.948,16.726c4.813,19.142,15.424,33.756,30.107,38.53c26.511,8.618,56.248-18.069,66.425-59.614 C199.339,284.902,177.425,246.699,169.89,241.434z"></path> <path d="M77.225,232.517c43.024-3.188,72.586-35.834,75.267-44.628c3-8.692-1.728-52.477-34.662-80.347 c-32.653-27.628-72.398-31.741-88.78-9.187c-9.073,12.495-9.066,30.555-1.708,48.868C10.625,157.714,0.005,172.322,0,187.763 C-0.003,215.641,34.568,235.674,77.225,232.517z"></path> <path d="M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273 c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273 C148.664,136.937,188.848,154.962,198.04,154.794z"></path> <circle cx="198.04" cy="198.039" r="35"></circle> </g> </g> </g></svg>
                    </div>
                    <div id="h1-box">
                        <h1 id="header-title">
                            &nbsp;{ptData.name}
                        </h1>
                    </div>
                </div>
            </div>

            <main id="main-content">
                <section id="artifacts-effects" className={`wee-${ptData.rarityList[ptData.rarityList.length - 1]}`}>

                {artifacts.map((c:any,i:any) => (
                          
                          ptData.images[`filename_${c}`] != null ?
                            <Image width={140} height={140} key={i} src={`https://enka.network/ui/${ptData.images[`filename_${c}`]}.png`} alt={ptData[c].name} loading="eager" priority />
                        
                        :''
                      )) }
                </section>
                {ptData.effect1Pc != null ? 
                <section className="refinement-description2">
                <p id="effect-name">{ptBr.effect} {ptBr.onePiece}</p> {ptData.effect1Pc}
                </section>
                : 
                <>
                <section className="refinement-description2">
                <p id="effect-name">{ptBr.effect} {ptBr.twoPieces}</p> {ptData.effect2Pc}
                </section>
                <section className="refinement-description2" id="special-ref">
                <p id="effect-name">{ptBr.effect} {ptBr.fourPieces}</p> {ptData.effect4Pc}
                </section>
                </>
                }
                <AdComponent/>
                {matchedCharacters != false ? 
                                 <section>
                                 <h2 className="titles-h2">{ptBr.recommendedCharacters}</h2>
                                 <div id="character-weapons-flex">
                                 {matchedCharacters.map((c: any, i: any) => (
                                         <Link key={i} href={`/${c.name}`}>
                                             <Image width={100} height={100} src={`/images/Team-Icons/${formatarNome(c.name)}.png`} alt={formatarNomeComEspaco(formatarNome(c.name))} />
                                         </Link>
                                     ))}
                                     </div>
                             </section>
                                 : ''}   
                    <section>
                  <h2 className="titles-h2">{ptBr.artifactsPieces}</h2>
                      <div id="artifacts-flexx">
                      
                          {artifacts.map((c:any,i:any) => (
                      
                              ptData.images[`filename_${c}`] != null ?<div key={i} className="box-art">
                                <div className="box-art-flex">
                                <Image width={120} height={120} src={`https://enka.network/ui/${ptData.images[`filename_${c}`]}.png`} alt={ptData[c].name} loading="eager" priority />
                                <h3>{ ptData[c].name}</h3></div>
                             <p> { ptData[c].description}</p>
                      
                            </div>
                            :''
                          )) }
                      </div>
                    </section>
               
                        
                
            </main>
            <SliderHighlight/>
        </>
    );
}