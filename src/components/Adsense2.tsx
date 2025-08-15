'use client';

import Link from "next/link";

const AdBanner = () => {

  return (
    <Link href={'https://amzn.to/45kiRxQ'} className="amazonbox">
      <picture>
  <source srcSet="/images/logitech.png" media="(min-width: 451px)"
  className="dsdsds"/>
  
  <img src="/images/image.png" alt="Imagem responsiva" 
  className="dsdsds"/>
</picture>
    </Link>
  );
};
export default AdBanner;