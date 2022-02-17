import * as React from 'react';
import '../css/style.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} />
      <a>LanguageSection component</a>
    </div>
  )
};
export default Header;