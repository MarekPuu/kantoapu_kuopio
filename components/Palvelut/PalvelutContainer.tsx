import React from 'react';
import classes from '../../styles/components/Palvelut.module.scss';
import Palvelut from '../../utils/Palvelut';
import PalvelutCard from './PalvelutCard';

const PalvelutContainer = () => {
  return (
    <div className={classes.palvelutContainer}>
      <div className={classes.PalvelutContainerTitle}>
        <h1>
          Enemmän kuin <span>kantoapu!</span>
        </h1>
      </div>
      <div className={classes.PalvelutCardContainer}>
        {Palvelut.map((palvelu, i) => {
          return <PalvelutCard index={i} key={palvelu.title} {...palvelu} />;
        })}
      </div>
    </div>
  );
};

export default PalvelutContainer;
