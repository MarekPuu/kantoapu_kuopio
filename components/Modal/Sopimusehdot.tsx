import React from 'react';
import classes from '../../styles/components/sopimusehdotModal.module.scss';
import Link from 'next/link';
import { AiFillCloseSquare } from 'react-icons/ai';

const SopimusehdotFI = () => {
  return (
    <div className={classes.SopimusehdotContainer}>
      <div className={classes.TitleContainer}>
        <h1>YLEISET SOPIMUSEHDOT KOTIMUUTTOIHIN, Kantoapu Kuopio Oy</h1>
        <Link href={'/'}>
          <button>
            <AiFillCloseSquare cursor={'pointer'} size={30} color="red" />
          </button>
        </Link>
      </div>
      <div className={classes.Content}>
        <p>1. Sovellettavuus </p>
        <p>
          Näitä ehtoja sovelletaan Suomen rajojen sisäpuolella tapahtuvassa
          yksityiseen tai yritys tarkoitukseen tilatussa muuttopalvelussa.
          Kuluttajaa/yritysasiakasta kutsutaan näissä määräyksissä tilaajaksi.
          Osapuolta, joka ottaa muuton tehtäväkseen, kutsutaan
          muuttopalveluyritykseksi eli tässä yhteydessä Kantoapu Joensuu Oy ja
          Kantoapu Kuopio Oy. Muuttopalveluyritys on vastuussa näiden määräysten
          mukaisesti palvelun suorittamisesta kokonaisuudessaan, vaikka joku
          toinen osapuoli muuttopalveluyrityksen toimeksiannosta suorittaa
          palvelun kokonaan tai osittain.{' '}
        </p>
        <p>2. Sopimuksen syntyminen </p>
        <p>
          Muuttopalveluyrityksen tulee tarjota asiakkaalleen mahdollisuus
          tarjouspyynnön tekemiseen yrityksen internetsivujen kautta. Asiakas
          täyttää tarjouspyyntö lomakkeen ja lähettää sen
          muuttopalveluyritykselle, joka tekee yksilöllisen tarjouksen
          asiakkaalle. Mikäli asiakas tekee tarjouspyynnön puhelimitse tai
          sähköisesti, muuttopalveluyritys antaa tarjouksen vastaavalla tavalla.
          Sopimus asiakkaan ja yrityksen välillä syntyy, kun asiakas hyväksyy
          hänelle annetun tarjouksen ja yritys vahvistaa sopimuksen syntymisen.{' '}
        </p>
        <p>3. Toimeksiannon kattavuus </p>
        <p>
          Toimeksianto käsittää irtaimiston siirron sovitusta lähtöosoitteesta
          huoneiston sisältä sovittuun vastaanotto- osoitteeseen huoneiston
          sisälle, sisältäen muuttotavaroiden lastauksen ajoneuvoon, niiden
          purkamisen ajoneuvosta ja siirtämisen huoneiston sisälle
          määräpaikassa. Toimeksiannon kattavuus ja alkamisajankohta ilmenevät
          tilausvahvistuksesta. Mikäli ei ole erikseen sovittu, toimeksianto ei
          pidä sisällään seuraavia palveluita:
        </p>
        <ol>
          <li>
            asuntoon kuuluvien kiinteidenkalusteiden ja erilaisten kodinkoneiden
            irrotukset/kiinnitykset eikä näiden ja siirrettävien kalusteiden
            purku/kasaus tai asennustyöt.
          </li>
          <li>
            kiinteistön pintojen sekä muutettavien kalusteiden suojaaminen{' '}
          </li>
          <li>
            arvoesineiden, rahan, pankkikirjat, arvopaperit, jalometallit, korut
            tai muiden näitä vastaavien arvoesineiden kuljetus{' '}
          </li>
          <li>
            kassakaappien, pianojen tai muiden erityisen raskaiden esineiden
            siirrot
          </li>
          <li>
            henkilöille ja tai omaisuudelle vaaraa aiheuttavien esineiden
            kuljetus esim. tulenarat aineet, räjähteet, syövyttävät tai
            pahanhajuiset aineet, aseet ja ammukset{' '}
          </li>
          <li>
            eläinten ja elävien kasvien sekä näiden säilytystilojen kuljetus
            (esim. akvaario){' '}
          </li>
          <li>siivouspalvelut </li>
          <li>
            lämpösäädeltyä kuljetusta edellyttävien tavaroiden muuttaminen{' '}
          </li>
          <li>muuttolaatikot ja pakkausmateriaali </li>
        </ol>
        <p>4. Tilaajan velvollisuudet </p>
        <p>
          Tilaajan tulee ilmoittaa kaikista niistä seikoista, joilla voidaan
          katsoa olevan merkitystä toimeksiannon suorittamiseen: o Muutettavan
          irtaimiston määrä, asuinpinta-alat, asunnon kerrokset sekä
          varastotilat lähtö- ja määränpäissä. o Sisäänajotie ja hissien
          toimivuus sekä niiden painorajoitukset molemmissa osoitteissa o
          Erityisen painavat ja tilaa vievät esineet, kuten piano ja isot
          kaapit, o Esine tai esineet, jotka voivat ominaisuuksiensa takia
          aiheuttaa vahinkoa henkilöille tai kuljetusvälineille o Erityisen
          arvokkaat esineet tai esineryhmät sekä helposti särkyvät esineet o
          Työturvallisuutta mahdollisesti vaarantavat seikat o Tavaramäärän
          lisääntyminen mahdollisen tilauksen jälkeen. Tilaajan tulee tehdä
          luettelo erityisen arvokkaista tai helposti särkyvistä esineistä kuten
          tauluista ja antiikkiesineistä. Tilaajan tulee antaa kirjallinen arvio
          näiden esineiden markkina-arvosta. Mikäli tilaaja ei anna
          muuttopalveluyritykselle etukäteen tässä kohdassa mainittuja tietoja,
          vastaa tilaaja muuttotavaroille mahdollisesti aiheutuneista
          vahingoista sen mukaisesti mitä mainitaan kohdassa yhdeksän. Mikäli
          tilaaja ilman muuttopalveluyrityksen kirjallista suostumusta antaa
          toimitettavaksi kohdassa kolme mainittuja tuotteita, vastaa tilaaja
          tavarasta toimeksiannon aikana ja on velvollinen korvaamaan
          muuttopalveluyritykselle kysymyksessä olevan tavaran toimituksen ja
          sen aikana mahdollisesti aiheutuneen vahingon siltä osin kuin se
          johtuu tilaajan virheestä tai laiminlyönnistä. Vaarallisen tavaran
          osalta noudatetaan, mitä tiekuljetussopimuslaissa on säädetty.{' '}
        </p>
        <p>5. Muuttopalveluyrityksen velvollisuudet </p>
        <p>
          Muuttopalveluyrityksen velvollisuus on suorittaa toimeksianto
          ammattimaisesti ja asiaankuuluvalla huolellisuudella.
          Muuttopalveluyrityksen tulee myös asianmukaisella huolellisuudella
          ottaa huomioon tilaajan etu. Yrityksellä on salassapitovelvollisuus
          kaikista tilaajan toimeksiantoon liittyvistä tiedoista, esineistä ja
          niiden arvoista. Muuttopalveluyritys on vastuussa tavaroiden
          katoamisesta, vähentymisestä tai vahingoittumisesta sen
          kuljetettavaksi ottamisen ja luovuttamisen välisenä aikana.
          Yrityksellä on tiekuljetussopimuslain mukainen vakuutus kuljetettavaa
          tavaraa koskevan vastuun varalta (tiekuljetusvakuutus) sekä
          vastuuvakuutus kolmannelle osapuolelle aiheutettujen henkilö- ja
          esinevahinkojen varalta (toiminnanvastuuvakuutus). Muuttopalveluyritys
          antaa tilaajalle neuvoja muuttotavaroiden suojaamisesta ja
          pakkaamisesta, jos ne eivät kuulu toimeksiannon sisältöön. Jos tilaaja
          on tehnyt luettelon erityisen arvokkaista tai helposti särkyvistä
          esineistä kohdan neljä mukaisesti, tulee muuttopalveluyrityksen
          tarkastaa luetteloidut esineet toimeksiannon alkaessa sekä päättyessä.
          Mikäli tilaaja on itse suorittanut pakkaamisen, tarkastaa
          muuttopalveluyritys nämä kollit ja näkyvissä olevan muuttoirtaimiston
          ulkoisesti.{' '}
        </p>
        <p>6. Hinnoitteluperusteet </p>
        <p>
          Muuttopalveluyrityksen palveluiden hinnoitteluperusteet ovat
          kuluttajan nähtävillä yrityksen kotisivuilla tai kuluttaja voi pyytää
          ne yritykseltä. Hinnat sisältävät kulloinkin voimassa olevan
          arvonlisäveron. Tarjouspyyntöön annetut hinnat ovat aina arvioita ja
          lopullinen hinta muodostuu käytettyjen työtuntien mukaan, ellei ole
          erikseen sovittu urakkahinnoittelua. Yrityksen kotisivuilla
          määritellään palvelun maksuehdot. Muuttopalveluyritys voi vaatia
          tilaajalta vakuuden maksusaatavan turvaamiseksi, mikäli mahdollisen
          luottotietojen tarkistamisen yhteydessä selviää asiakkaalla olevan
          maksuhäiriömerkintä. Mikäli tilaaja ei maksa palvelua sopimuksen
          mukaisesti, on muuttopalveluyrityksellä oikeus veloittaa
          viivästyskorkoa Suomen Pankin kulloinkin ilmoittaman viivästyskoron
          mukaisesti. Kotimuutoissa palvelu maksetaan viipymättä muuton jälkeen
          käteisellä tai pankkikortilla. Asiakkaalla on oikeus saada
          maksutapahtumasta tosite (kuitti).{' '}
        </p>
        <p>7. Toimeksiannon peruuttaminen </p>
        <p>
          Tilaajalla on oikeus peruuttaa toimeksianto. Mikäli peruutus tehdään
          vähintään viisi arkipäivää ennen kuin toimeksiannon on määrä alkaa, ei
          muuttopalveluyrityksellä ole oikeutta peruutuksesta johtuviin
          korvauksiin. Mikäli toimeksianto perutaan vähemmän kuin viisi
          arkipäivää ennen sen alkamista, on yrityksellä oikeus laskuttaa
          kyseiseen työhön varatun kapasiteetin kahden tunnin veloitusta
          vastaava korvaus. Mikäli toimeksianto perutaan sen jo alettua, on
          yrityksellä oikeus korvauksiin kokonaisuudessaan toimeksiannosta jo
          kulutetun ajan osalta sekä kahden työtunnin veloitusta vastaava
          korvaus.{' '}
        </p>
        <p>8. Muuttopalveluyrityksen korvausvelvollisuus </p>
        <p>
          Muuttopalveluyritys on korvausvelvollinen asiakkaalle aiheuttamastaan
          vahingosta ja koti- irtaimiston menetyksestä̈, mikäli
          muuttopalveluyritys ei pysty osoittamaan, että vahinko tai
          koti-irtaimiston menetys johtuu sellaisista seikoista tai esteistä,
          joihin se ei ole pystynyt vaikuttamaan ja joihin se ei ole pystynyt
          varautumaan sopimusta tehtäessä ja joiden seurauksia se ei ole
          pystynyt välttämään tai muutoin estämään. Muuttopalveluyrityksen
          korvausvelvollisuus kuljetettavaksi otetun tavaran katoamisesta,
          vähentymisestä tai vahingoittumisesta rajoittuu kotimuutossa
          tiekuljetussopimuslain mukaiseen korvaukseen. Kotimaankuljetuksessa
          korvauksen enimmäismäärä on 20 euroa tavaran kokonaispainosta
          puuttuvaa kiloa kohti. Korvausvelvollisuus ei koske tunnearvoa,
          välillisiä vahinkoja tai menetyksiä. Muuttopalveluyrityksen
          korvausvastuuta voidaan rajoittaa tai se voidaan poistaa kokonaan,
          mikäli muuttopalveluyritys osoittaa, että kuljetettavaksi otetulle
          tavaralle sattunut vahinko johtuu seuraavista seikoista:{' '}
        </p>
        <ol>
          <li>
            Virhe tai laiminlyönti tilaajantaholta (esimerkiksi tilaajan
            virheellisesti suorittama pakkaaminen, purkaminen, lastaaminen,
            epätäydellinen tai virheellinen tavaroiden merkitseminen, tilaajan
            antama virheellinen ohjeistus tai kohdan neljä mukaisen
            ilmoitusvelvollisuuden laiminlyönti){' '}
          </li>
          <li>
            Muuttotavarat, jotka ominaisuuksiensa takia ovat erityisen alttiita
            pienille vaurioille tai sään vaihteluille muuttojen yhteydessä
            (esim. elävät kasvit, ruokatarvikkeet, lämpöherkät muuttotavarat,
            vähäiset vahingot kalusteiden pinnoissa)
          </li>
          <li>
            Elektronisiin laitteisiin tulleet vahingot, jotka ovat syntyneet,
            vaikka muuttopalveluyritys on osoittanut riittävää huolellisuutta.
          </li>
          <li>
            Muuttopalveluyritys osoittaa, että esineelle sattunut vahinko johtuu
            yksinomaan esineen vaillinaisesta laadusta. Esimerkiksi huonekalujen
            huono kunto tai niiden alun perin puutteellinen tai ohjeiden
            vastainen kokoaminen. Muuttoon kuuluville yksittäisille esineille
            voidaan ottaa erityinen esinevakuutus (muuttovakuutus) tilaajan
            laskuun, jos tilaaja katsoo, ettei tiekuljetussopimuslain mukainen
            enimmäiskorvaus ole riittävä.
          </li>
        </ol>
        <p>9. Tilaajasta johtuva laiminlyönti </p>
        <p>
          Mikäli on sovittu, että tilaaja osallistuu toimeksiannon
          suorittamiseen, esimerkiksi pakkaamalla tai kantoavulla, eikä hän tätä
          suorita toimeksiannon suorittamisen kannalta olennaisessa ajassa, voi
          muuttopalveluyritys keskeyttää työt, kunnes tilaaja on osuutensa
          hoitanut. Yrityksellä on tällöin oikeus korvaukseen kuluista, jotka
          johtuvat tilaajan aiheuttamasta laiminlyönnistä, ellei tilaaja pysty
          osoittamaan, että laiminlyönti on tapahtunut muuttopalveluyrityksen
          taholta. Muuttopalveluyritys voi purkaa sopimuksen, mikäli tilaajasta
          johtuvalla laiminlyönnillä on olennainen merkitys toimeksiannon
          suorittamiseen. Tilaajan korvausvastuu määräytyy kohdan seitsemän
          mukaisesti.
        </p>
        <p>10. Reklamaatio ja reklamointiajat </p>
        <p>
          Mikäli tilaaja haluaa esittää muuttopalveluyritykselle vaatimuksen,
          tulee hänen ilmoittaa tästä yritykselle viimeistään päivä työn
          suorittamisen jälkeen. Tilaajan tulee tarkastaa muuttotavarat ja
          todentaa mahdolliset kuljetusvahingot kohtuullisessa ajassa
          toimeksiannon suorituksen jälkeen. Näkyvistä virheistä tai
          vahingoittumisista tulee ilmoittaa luovutuksen yhteydessä, muista
          virheistä tai vahingoista pääsääntöisesti kahden viikon kuluessa.
          Reklamaatio ja ilmoitus vaatimuksista tulee antaa kirjallisena tai
          muuten todistettavasti.{' '}
        </p>
        <p>11. Erimielisyydet </p>
        <p>
          Mikäli tilaajan ja muuttopalveluyrityksen välillä syntyy
          erimielisyyksiä, tulee ensisijaisesti pyrkiä kahdenkeskiseen
          sopimukseen. Mikäli sopimukseen ei päästä, voi tilaaja kääntyä
          kuluttajaneuvonnan puoleen. Mikäli tämänkään jälkeen asiaa ei saada
          sovituksi tilaajan ja muuttopalveluyrityksen välillä, voi tilaaja
          viedä asian kuluttajariitalautakunnan ratkaistavaksi. Jos riita
          saatetaan tuomioistuimen ratkaistavaksi niin asia käsitellään
          vastaajan kotipaikan yleisessä alioikeudessa. Tilaaja voi kuitenkin
          esittää vaatimuksensa muuttopalveluyritystä kohtaan myös oman
          asuinpaikkansa yleisessä alioikeudessa ja saattaa
          muuttopalveluyrityksen kotipaikan yleisen tuomioistuimen
          ratkaistavaksi.
        </p>
        <p>12.Rekisterin sisältämät tiedot</p>
        <p>
          Rekisteriin talletetaan ainoastaan internet-lomakkeella tai
          asiakaspalvelussamme ilmoittamasi tiedot.
          <strong>
            Henkilötunnus tallennetaan laskutusasiakkaiden luottotietojen
            tarkastamiseksi.
          </strong>
          Luottotietojen tuloksia ei säilytetä.
        </p>
      </div>
      <div className={classes.Bottom}>
        <Link href={'/'}>
          <button>Sulje</button>
        </Link>
      </div>
    </div>
  );
};

export default SopimusehdotFI;
