import React from 'react';
import classes from '../../styles/components/navbar.module.scss';
import Link from 'next/link';

const LowerNav = () => {
  return (
    <div className={classes.LowerNavContainer}>
      <div className={classes.LowerNavLinks}>
        <ul>
          <li>
            <Link href={{ pathname: '/', hash: 'palvelut' }}>Palvelut</Link>
          </li>
          <li>
            <Link href={{ pathname: '/', hash: 'hinnasto' }}>Hinnasto</Link>
          </li>
          <li>
            <Link href={{ pathname: '/yrityksille' }}>Yrityksille</Link>
          </li>
          <li>
            <Link href={{ pathname: '/toimipisteemme' }}>Toimipisteemme</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LowerNav;
