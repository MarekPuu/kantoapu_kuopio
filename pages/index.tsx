import type { NextPage } from 'next';
import classes from '../styles/Pages/Etusivu.module.scss';
import PageHero from '../components/PageHero/PageHero';
import MeidanTarina from '../components/MeidänTarina/MeidanTarina';
import MeidanTarinaForm from '../components/form/MeidanTarinaForm';
import PalvelutContainer from '../components/Palvelut/PalvelutContainer';
import PyydaTarjous from '../components/PyydaTarjous';
import HinnastoContainer from '../components/Hinnasto/HinnastoContainer';

const Home: NextPage = () => {
  return (
    <>
      <PageHero />
      <div className={classes.width_80}>
        <div className={classes.MeidanTarinaJaForm}>
          <div className={classes.child_50}>
            <MeidanTarina />
          </div>
          <div className={classes.child_50}>
            <MeidanTarinaForm />
          </div>
        </div>
        <div id="palvelut">
          <PalvelutContainer />
        </div>
        <div id="hinnasto">
          <HinnastoContainer />
        </div>
      </div>
      <PyydaTarjous />
    </>
  );
};

export default Home;
