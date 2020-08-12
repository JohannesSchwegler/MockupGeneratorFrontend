import React from 'react';

import { Link } from 'components/link/Link';
/* import { ReactComponent as Logo } from "../../assets/svg/logo.svg" */
import { ReactComponent as Logo2 } from "assets/svg/logo.svg"

import s from './Header.scss';
import { Button } from "../button/Button"

export const Header = () => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <Logo2 className={s.header__logoSvg} />

        </Link>

        <ul className={s.header__navigation}>
          <li>
            <a href="#product" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
          </li>
          <li>
            <a href="#product" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
          </li>
        </ul>


        <div className={s.header__cta}><Button href="/signup"><span className="Button--button__text--1oNiy">Sign up</span><svg className="Button--button__arrowIcon--ny3GQ" width="12" height="14" viewBox="0 0 12 14"><path d="M5.17 10V.17h2V10l3.24-3.24 1.42 1.41-5.66 5.66-1.41-1.42L.51 8.17l1.42-1.41z"></path></svg> </Button></div>

      </div>
    </div>
  </header>
);
