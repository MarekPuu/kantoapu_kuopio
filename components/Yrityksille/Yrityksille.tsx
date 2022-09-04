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
              Kattava palvelumme pitää sisällään muuton kaikki vaiheet
              pakkauksesta kuljetukseen ja kalusteiden asennuksesta mappien
              hyllytykseen takaisin paikoilleen. Lattiat suojataan niin ettei
              tila kärsi ylimääräistä vahinkoa lattioiden naarmuuntumisella tai
              likaantumisella. Tavarat puretaan ja pakataan turvallisesti sekä
              kuljetetaan asianmukaisesti uuteen toimitilaan.Jätteet kuljetamme
              kierrätykseen ja jäteasemalle.
            </p>
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Jakelu- ja kuljetuspalvelut</h1>
            <p>
              Kattavan kalustomme avulla pystymme hoitamaan kalusteiden
              jakelupalvelut asiakkaan tarpeen mukaan. Yleensä jakeluyritykset
              pystyvät toimittamaan tavarat asiakkaan osoitteeseen tai
              lastauslaiturille, mutta tavaroiden sisäänkanto on hoidettava
              jollain muulla tavalla. Ammattilaisemme hoitavat tavarat asiakkaan
              osoittamaan paikkaan, jonka jälkeen asentajamme purkavat
              pakkaukset, asentavat tuotteen käyttökuntoon ja tarvittaessa
              antavat myös käyttöopastuksen.
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
              Ammattitaitoiset asentajamme hoitavat kaiken toimistokalusteiden
              asennuksista, siirroista ja työstöistä sekä toimistokalusteiden
              purkamisesta aina vaativampiin asennuksiin asti. Asentajamme
              koulutetaan tehtäviin ja heillä on käytössään ajantasaiset
              työvälineet
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
