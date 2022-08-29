import React from 'react';
import classes from '../../styles/components/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { ImHome } from 'react-icons/im';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterUpperContent}>
        <div className={classes.Content}>
          <div>
            <p>Seuraa meitä somessa</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100076212821703"
            >
              <FaFacebookSquare size={25} color="white" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/kantoapukuopio"
            >
              <GrInstagram size={25} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.FooterContent}>
        <div className={classes.FooterLowerContent}>
          <div className={classes.FooterCompanyLogo}>
            <h1>Kantoapu Kuopio Oy</h1>
            <p>Y-tunnus: 3244327-9</p>
            <div
              style={{
                position: 'relative',
                width: '150px',
                marginTop: '20px',
              }}
            >
              <Image
                src={'/KantoapuLogo.png'}
                width={150}
                height={100}
                alt="Kantoapu"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={classes.FooterLinks}>
            <h1>Hyödylliset linkit</h1>
            <div className={classes.Links}>
              <ul>
                <li>
                  <Link href={{ pathname: '/', hash: 'palvelut' }}>
                    Palvelut
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: '/', hash: 'hinnasto' }}>
                    Hinnasto
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: '/yrityksille' }}>Yrityksille</Link>
                </li>
                <li>
                  <Link href={{ pathname: '/toimipisteemme' }}>
                    Toimipisteemme
                  </Link>
                </li>
              </ul>
              <ul className={classes.padding}>
                <li>
                  <Link href={{ pathname: '/', hash: 'palvelut' }}>
                    Palvelut
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: '/', hash: 'hinnasto' }}>
                    Hinnasto
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: '/yrityksille' }}>Yrityksille</Link>
                </li>
                <li>
                  <Link href={{ pathname: '/toimipisteemme' }}>
                    Toimipisteemme
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.FooterContanct}>
            <h1>Yhteystiedot</h1>
            <p>
              <ImHome style={{ marginRight: '10px' }} size={15} color="white" />
              Rinnekatu 2-4b, 70600 Kuopio
            </p>
            <p>
              <GiRotaryPhone
                style={{ marginRight: '10px' }}
                size={15}
                color="white"
              />
              044 238 8271
            </p>
            <p>
              <MdEmail
                style={{ marginRight: '10px' }}
                size={15}
                color="white"
              />
              info@kantoapukuopio.fi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
