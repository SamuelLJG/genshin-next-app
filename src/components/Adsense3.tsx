'use client';

import Link from "next/link";

const AdBanner = () => {

  return (
    <Link href={'https://amzn.to/4mFrLLV'} className="amazonbox">
      <picture>
  <source srcSet="/images/havit.png" media="(min-width: 451px)"
  className="dsdsds"/>
  
  <img src="/images/image3.png" alt="Imagem responsiva" 
  className="dsdsds"/>
</picture>
    </Link>
  );
};
export default AdBanner;