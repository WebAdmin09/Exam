// Header.js

import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import logojon from '../../../assets/logojon.svg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={style["main__wrapper"]}>
        <div className="container">
          <div className={style['wrapper']}>
            <div className={style["logo__div"]}>
              <a href="/">
                <img className={style['logo']} src={logojon} alt='logojon' />
              </a>
            </div>
            <div className={style["navbar__links"]}>
              <div className={`${style['navlink-inner']} ${style['desktop']}`}>
                <NavLink className={style['navlink']} to='/'>Home</NavLink>
                <NavLink className={style['navlink']} to='/about'>About</NavLink>
                <NavLink className={style['navlink']} to='/blogs'>Blogs</NavLink>
                <NavLink className={style['navlink']} to='/register'>Register</NavLink>
                <NavLink className={style['login__btn']} to='/login'>Login</NavLink>
              </div>

              <div className={`${style['navlink-inner']} ${style['mobile']}`}>
                <button className={style['burger-button']} onClick={toggleMenu}>☰</button>
                <div className={style['burger-menu']} style={{ display: isMenuOpen ? 'flex' : 'none' }}>
                  <NavLink className={style['navlink']} to='/'>Home</NavLink>
                  <NavLink className={style['navlink']} to='/about'>About</NavLink>
                  <NavLink className={style['navlink']} to='/blogs'>Blogs</NavLink>
                  <NavLink className={style['navlink']} to='/register'>Register</NavLink>
                  <NavLink className={style['login__btn']} to='/login'>Login</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
