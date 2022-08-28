import React from 'react';
import classes from '../../styles/components/pagehero.module.scss';

const PageHero = () => {
  return (
    <div className={classes.pageheroContainer}>
      <div className={classes.textContainer}>
        <h1>
          Me muutamme <span>arjen</span>
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
