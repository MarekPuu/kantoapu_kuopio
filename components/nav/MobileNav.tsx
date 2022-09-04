import React from 'react';
import classes from '../../styles/components/mobilenav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MobileNav = () => {
  return (
    <div className={classes.nav}>
      <nav role="navigation">
        <div className={classes.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className={classes.menu}>
            <Link href={{ pathname: '/', hash: 'palvelut' }}>
              <li>
                <p>Palvelut</p>
              </li>
            </Link>

            <Link href={{ pathname: '/', hash: 'hinnasto' }}>
              <li>
                <p>Hinnasto</p>
              </li>
            </Link>

            <Link href={{ pathname: '/yrityksille' }}>
              <li>
                <p>Yrityksille</p>
              </li>
            </Link>
            <Link href={{ pathname: '/toimipisteemme' }}>
              <li>
                <p>Toimipisteemme</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
