import Link from 'next/link';
import React from 'react';
import classes from '../../styles/components/PyydaTarjous.module.scss';
import Image from 'next/image';

const PyydaTarjous = () => {
  return (
    <div className={classes.PyydaTarjousContainer}>
      <Link href={{ pathname: '/', hash: '#form' }}>
        <div className={classes.PyydaTarjousLinkContainer}>
          <div className={classes.NavInfoLinkContainer}>
            <div className={classes.NavInfoLinkContainerLogo}>
              <Image
                width={30}
                height={30}
                src="/clarity_form-line-black.png"
                alt="form"
              />
            </div>
            <div className={classes.NavInfoLinkContainerInfo}>
              <div className={classes.title}>
                <p>Pyydä tarjous</p>
              </div>
              <div className={classes.info}>
                <p>Siirry Lomakkeeseen</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PyydaTarjous;
