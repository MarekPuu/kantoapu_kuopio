import React from 'react';
import classes from '../../styles/components/Yrityksille.module.scss';
import Image from 'next/image';
import PyydaTarjous from '../PyydaTarjous';

const Yrityksille = () => {
  return (
    <>
      <div className={classes.Title}>
        <h1>Yrityksille</h1>
      </div>
      <div className={classes.VinkitMuuttajalleContainer}>
        <div className={`${classes.VinkitMuuttajalleItem}`}>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/PakkaaSopivasti.png'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Yritysmuutto</h1>
            <p>
              Palvelumme pitää sisällään muuton kaikki vaiheet
              pakkauksesta kuljetukseen ja kalusteiden asennukseen. Suojaamme lattiat siten että tilat välttyvät naarmuilta ja likaantumiselta.
              Puramme ja pakkaamme tavarat turvallisesti sekä
              kuljetetamme ne asianmukaisesti uuteen toimitilaan. Hoidamme myös jätteiden kierrätyksen.
            </p>
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Jakelu- ja kuljetuspalvelut</h1>
            <p>
              Kattavan kalustomme avulla pystymme hoitamaan kalusteiden
              jakelupalvelut sisäänkannolla ja paikalle asennettuna asiakkaan tarpeen mukaan.
            </p>
          </div>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/SuojaaHuonekalut.png'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/IrrotaLaitteet.png'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Asennuspalvelut</h1>
            <p>
              Kokeneet ja ammattitaitoiset asentajamme hoitavat kaiken toimistokalusteiden
              asennuksista, siirroista ja työstöistä sekä toimistokalusteiden
              purkamisen.
            </p>
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Rakennustyömaille tarjottavat palvelut</h1>
            <p>
              Tarjoamme rakennustyömaille materiaali- ja kalustesiirrot sekä
              kodinkonesiirrot ja -asennukset. Toimimme uudisrakennuksilla sekä
              saneeraus- ja toimitilakohteissa.
            </p>
          </div>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/OleValmiinaMuuttopaivana.png'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/IrrotaLaitteet.png'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Sopimusasiakkaat</h1>
            <p>
              Tarjoamme sopimusasiakkaille erilaisia ratkaisuja kuljetus,
              kantoapu tai pidempi aikaisiin sopimuksiin mm. työmaa asennuksiin
            </p>
          </div>
        </div>
      </div>
      <PyydaTarjous />
    </>
  );
};

export default Yrityksille;
