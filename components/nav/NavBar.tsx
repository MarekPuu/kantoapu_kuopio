import React, { useState } from 'react';
import classes from '../../styles/components/navbar.module.scss';
import LowerNav from './LowerNav';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const NavBar = () => {
  return (
    <>
      <div className={classes.NavBarContainer}>
        <div className={classes.NavBarContent}>
          <Link href={'/'}>
            <div
              style={{ cursor: 'pointer' }}
              className={classes.NavBarLogoContainer}
            >
              <Image
                width={128}
                height={72}
                src={'/KantoapuLogo.png'}
                alt="Kantoapu"
              />
            </div>
          </Link>

          <div className={classes.NavBarLinksContainer}>
            <a href="tel:+358442388271">
              <div className={classes.NavInfoLinkContainer}>
                <div className={classes.NavInfoLinkContainerLogo}>
                  <Image
                    width={30}
                    height={30}
                    src={'/bxs_phone-call.png'}
                    alt="phone"
                  />
                </div>
                <div className={classes.NavInfoLinkContainerInfo}>
                  <div className={classes.title}>
                    <p>Marek Puurunen</p>
                  </div>
                  <div className={classes.info}>
                    <p>044 238 8271</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="mailto:info@kantoapukuopio.fi">
              <div className={classes.NavInfoLinkContainer}>
                <div className={classes.NavInfoLinkContainerLogo}>
                  <Image
                    width={30}
                    height={30}
                    src={'/clarity_email-solid.png'}
                    alt="email"
                  />
                </div>
                <div className={classes.NavInfoLinkContainerInfo}>
                  <div className={classes.title}>
                    <p>Lähetä viestiä</p>
                  </div>
                  <div className={classes.info}>
                    <p>info@kantoapukuopio.fi</p>
                  </div>
                </div>
              </div>
            </a>
            <div className={classes.button}>
              <button>
                <div className={classes.NavInfoLinkContainer}>
                  <div className={classes.NavInfoLinkContainerLogo}>
                    <Image
                      width={30}
                      height={30}
                      src="/clarity_form-line.png"
                      alt="form"
                    />
                  </div>

                  <Link href={{ pathname: '/', hash: '#form' }}>
                    <div className={classes.NavInfoLinkContainerInfo}>
                      <div className={classes.title}>
                        <p>Pyydä tarjous</p>
                      </div>
                      <div className={classes.info}>
                        <p>Siirry Lomakkeeseen</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <LowerNav />
      <MobileNav />
    </>
  );
};

export default NavBar;
