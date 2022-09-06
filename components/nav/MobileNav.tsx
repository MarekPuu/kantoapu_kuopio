import React, { useEffect, useState } from 'react';
import classes from '../../styles/components/mobilenav.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={classes.MobileNavContainer}>
      <div className={classes.MobileNavcontent}>
        <Link href={'/'}>
          <div
            onClick={() => setIsOpen(false)}
            className={classes.MobileNavLogo}
          >
            <Image
              width={128}
              height={72}
              src={'/KantoapuLogo.png'}
              alt="Kantoapu"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </Link>

        <div
          onClick={() => setIsOpen((b) => !b)}
          className={`${classes.Menu_btn} ${isOpen && classes.open}`}
        >
          <div className={`${classes.Menu_btn_burger}`}></div>
        </div>
      </div>

      <div
        id="fixedNav"
        className={`${classes.MobileMenuContainer}  ${
          isOpen && classes.MobileMenuContainerActive
        }`}
      >
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <Link href={{ pathname: '/', hash: 'palvelut' }}>Palvelut</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href={{ pathname: '/', hash: 'hinnasto' }}>Hinnasto</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href={{ pathname: '/muuttajalle' }}>Muuttajalle</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href={{ pathname: '/yrityksille' }}>Yrityksille</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href={{ pathname: '/', hash: 'yhteystiedot' }}>
              Yhteystiedot
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="https://www.kantoapujoensuu.fi/">Kantoapu Joensuu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
