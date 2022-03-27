import * as React from 'react';
import '../css/style.css';
import logo from '../img/logo.svg';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Header = () => {
  const [language, setLanguage] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  /*
    <FormControl className='dropdown'>
      <InputLabel class='inputLabel'>Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>FR</MenuItem>
        <MenuItem value={20}>EN</MenuItem>
      </Select>
    </FormControl>
  */

  return (
    <div className='header'>
      <img src={logo} onClick={() => navigate('/')} />
      <a>LanguageSection component</a>
    </div>
  )
};
export default Header;