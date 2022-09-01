import React from 'react';
import classes from '../../styles/components/navbar.module.scss';
import Link from 'next/link';

const MobileNav = ({ setMobileNavOpen }: any) => {
  return (
    <div className={classes.mobileNavContainer}>
      <div className={classes.mobileNavContainerLinks}>
        <ul>
          <Link href={{ pathname: '/', hash: 'palvelut' }}>
            <li onClick={() => setMobileNavOpen(false)}>
              <p>Palvelut</p>
            </li>
          </Link>

          <Link href={{ pathname: '/', hash: 'hinnasto' }}>
            <li onClick={() => setMobileNavOpen(false)}>
              <p>Hinnasto</p>
            </li>
          </Link>

          <Link href={{ pathname: '/yrityksille' }}>
            <li onClick={() => setMobileNavOpen(false)}>
              <p>Yrityksille</p>
            </li>
          </Link>
          <Link href={{ pathname: '/toimipisteemme' }}>
            <li onClick={() => setMobileNavOpen(false)}>
              <p>Toimipisteemme</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
