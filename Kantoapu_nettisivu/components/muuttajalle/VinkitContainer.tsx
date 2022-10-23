import React from 'react';
import classes from '../../styles/components/Muuttajalle.module.scss';
import Image from 'next/image';
import PyydaTarjous from '../PyydaTarjous';

const VinkitContainer = () => {
  return (
    <>
      <div className={classes.Title}>
        <h1>Vinkit muuttajalle</h1>
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
            <h1>Pakkaa tavarat huolellisesti</h1>
            <p>
              Kaikki irtain tavara kaapeista, hyllyistä, laatikoista, pöydiltä,
              lattioilta ym. muutettavasta tilasta tyhjennetään ja pakataan
              muuttolaatikoihin tai muihin vastaaviin, esim. banaani- tai
              pahvilaatikoihin. Helposti särkyvät tavarat kannattaa suojata
              erityisen hyvin pehmusteilla. Jätä laatikon yläreunaan tyhjää
              tilaa, että ne voidaan pakata päällekkäin. Laita vain 4 laatikkoa
              päällekkäin. Pakkaa jäteseäkit/pussit siten, että jaksaisit itse
              nostaa niitä. Sulje säkin suuaukko hyvin narulla tai teipillä,
              ettei se aukea muuton aikana. Muuton nopeuttamiseksi ja meidän
              työn helpottamiseksi voit vuokrata meiltä muuttolaatikoita.
            </p>
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Suojaa huonekalut</h1>
            <p>
              Suojaa kaikki huonekalut ja pinnoiltaan arat kalusteet hyvin
              voimakuplakalvolla tai kuplakalvolla käsikiristekalvoa apuna
              käyttäen. Teippaa lipastojen ja kaappien ovet, jotta ne eivät
              aukea kuljetuksen tai muuton yhteydessä. Poista huonekaluista
              irtonaiset hyllyt.
            </p>
          </div>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/SuojaaHuonekalut.jpg'}
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
            <h1>Irrota laiteet</h1>
            <p>
              Irrota mukaan lähtevät pesukoneet, kuivausrummut ja tiskikoneet
              ennen muuton alkamista. Teippaa letkut ja sähköjohdot kiinni
              koneiden taakse tai päälle. Valuta letkuista vesi, jotta vesi ei
              pääse valumaan letkuista muuton tai kuljetuksen aikana lattialle.
              Irrota pesutornien lukitus ennen muutton alkamista.
            </p>
          </div>
        </div>
        <div className={classes.VinkitMuuttajalleItem}>
          <div className={classes.VinkitMuuttajalleItemText}>
            <h1>Ole valmiina muuttopäivänä</h1>
            <p>
              Ethän pakkaa tavaroita niin, että ne olisivat tiellä kun
              muuttomiehet saapuvat. Varmista että käytävillä on tarpeeksi tilaa
              kantaa isoimmat huonekalut ja että lattialla ei ole tavaraa, joka
              estäisi nokkakärryjen vetämistä. Erittele tavarat selkeästi
              sellaisiin pinoihin jotka lähtevät mukaan uuteen asuntoon ja,
              jotka jää vanhaan asuntoon.
            </p>
          </div>
          <div className={classes.VinkitMuuttajalleItemImage}>
            <Image
              src={'/OleValmiinaMuuttopaivana.jpg'}
              alt="Vinkit muuttajalle"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <PyydaTarjous />
    </>
  );
};

export default VinkitContainer;
