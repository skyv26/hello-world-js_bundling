import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <header className={style.Header}>
    <h1 className={style.Logo}>GreetingApp</h1>
    <nav className={style.Navigation}>
      <ul className={style.UnorderedList}>
        <li className={style.List}>
          <NavLink to="/greetings" className={({ isActive }) => `${style.Link} ${(isActive ? style.Active : '')}`}>Greeting</NavLink>
        </li>
        <li className={style.List}>
          <NavLink to="/about" className={({ isActive }) => `${style.Link} ${(isActive ? style.Active : '')}`}>About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
