import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
  const [checked, setChecked] = useState(false);
  function toggle() {
    var elm = document.getElementById('checkbox');
    if (checked) {
      if (!elm) return;
      elm.click();
      setChecked(false);
    }
  }
  return (
    <nav id="mobileNav" role="navigation">
      <div className="navImg">
        <button onClick={toggle}>
          <Link href={{ pathname: '/' }}>
            <Image
              width={70}
              height={40}
              src={'/KantoapuLogo.png'}
              alt="Kantoapu"
            />
          </Link>
        </button>
      </div>

      <div id="menuToggle">
        <input onClick={() => setChecked(true)} id="checkbox" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <button onClick={toggle}>
              <Link href={{ pathname: '/', hash: 'palvelut' }}>Palvelut</Link>
            </button>
          </li>

          <li>
            <button onClick={toggle}>
              <Link href={{ pathname: '/', hash: 'hinnasto' }}>Hinnasto</Link>
            </button>
          </li>
          <li>
            <button onClick={toggle}>
              <Link href={{ pathname: '/muuttajalle' }}>Muuttajalle</Link>
            </button>
          </li>
          <li>
            <button onClick={toggle}>
              <Link href={{ pathname: '/yrityksille' }}>Yrityksille</Link>
            </button>
          </li>
          <li>
            <Link href="https://www.kantoapujoensuu.fi/">Kantoapu Joensuu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
