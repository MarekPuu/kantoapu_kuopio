import React, { useEffect, useState } from 'react';
import classes from '../../styles/components/pagehero.module.scss';

const PageHero = () => {
  const [isSafari, setIsSafari] = useState<boolean>(false);
  useEffect(() => {
    if (!navigator.userAgent) return;
    let userAgent = navigator.userAgent;
    let safari = false;
    if (userAgent.indexOf('Safari') > -1) safari = true;
    if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') > -1)
      safari = false;
    setIsSafari(safari);
  }, []);

  return (
    <div
      style={
        isSafari
          ? {
              background:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/KantoapuHeroMobile.png')",
            }
          : {}
      }
      className={classes.pageheroContainer}
    >
      <div className={classes.textContainer}>
        <h1>
          Me muutamme <span>arjen</span>
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
