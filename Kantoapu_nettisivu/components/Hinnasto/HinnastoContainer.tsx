import React from 'react';
import classes from '../../styles/components/Hinnasto.module.scss';
import HinnastoCard from './HinnastoCard';
import Hinnasto from '../../utils/Hinnasto';

const HinnastoContainer = () => {
  return (
    <div className={classes.HinnastoContainer}>
      <div className={classes.HinnastoContainerTitle}>
        <h1>Hinnasto</h1>
      </div>
      <div className={classes.HinnastoCardsContainer}>
        {Hinnasto.map((h) => {
          return <HinnastoCard key={h.title} {...h} />;
        })}
      </div>
      <div className={classes.HinnastoInfoContainer}>
        <p>
          <span>HUOM!</span>
          {''} Lauantaisin hintoihin lisätään +10%. Sunnuntaisin/pyhinä
          hintoihin lisätään +50%.
        </p>
        <p>
          <span>Hyvä Tietää!</span> Minimi veloitus 1,5 tuntia. Sen jälkeen
          laskutus 15 minuutin tarkkuudella. Kuopion keskustan alueella
          (postinumero 70100) veloitus alkaa, kun saavumme asiakkaan luokse ja
          loppuu kun muutto on tehty. Keskustan ulkopuolella veloitus alkaa, kun
          lähdemme ajamaan asiakkaan luokse toimistoltamme ja päättyy kun
          saavumme toimistolle. Toimisto sijaitsee Kuopion keskustassa.
        </p>
        <p>
          <span>Maksaminen</span> hoituu kätevästi muuton jälkeen pankkikortilla
          tai käteisellä. <br /> Yritysasiakkaille laskutus, verkko- tai
          sähköpostilaskuna.
        </p>
      </div>
    </div>
  );
};

export default HinnastoContainer;
