import Image from 'next/image';
import React from 'react';
import classes from '../../styles/components/MeidanTarina.module.scss';

const MeidanTarina = () => {
  return (
    <div className={classes.MeidanTarinaContainer}>
      <div className={classes.MeidanTarinaTitle}>
        <h1>Meidän tarinamme</h1>
      </div>
      <div className={classes.MeidanTarinaText}>
        <p>Kantoapu Kuopio Oy on muuttopalveluja tarjoava yritys.</p>
        <p>
          Firma sai alkunsa kun Kantoapu Joensuu perustettiin Joensuuhun vuonna
          2018 ja nyt vuonna 2021 olemme laajentaneet toimintaamme myös
          Kuopioon! Olemme myös opiskelijoita Savonia ammattikorkeakoulusta.
          Muuttotyöstä meillä on kokemusta yhteensä yli seitsemän vuotta
          isompien yritysten palkkalistoilla ja nyt itse yrittäjinä. Meille
          tärkeitä arvoja ovat rehellisyys, luotettavuus ja asiakkaan
          tyytyväisyys.
        </p>
        <p>
          Muutto on monella tapaa erittäin stressaava tilanne ja tehtävää on
          paljon. Asiakkaat ovat meille tärkeitä ja haluamme omalta osaltamme
          tarjota heille mahdollisimman vaivattoman tavaroiden siirron asunnosta
          toiseen.
        </p>
        <p>Ota yhteyttä ja suunnitellaan juuri sinulle sopiva muutto!</p>
      </div>
      <div className={classes.MeidanTarinaImage}>
        <Image
          width={500}
          height={500}
          src={'/groupPhoto.jpg'}
          alt="Kantoapu"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MeidanTarina;
