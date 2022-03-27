import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import logo from '../img/logo.svg';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    position: 'relative',
    width: 340,
    height: 80,
    left: 20,
  },
  dropdown: {
    marginLeft: 'auto',
    marginRight: 10,
  }
});

const Header = () => {
  const classes = useStyles()
  const [language, setLanguage] = React.useState('fr');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={classes.header}>
      <img className={classes.headerImage} src={logo} onClick={() => navigate('/')} />
      <Select
        className={classes.dropdown}
        native
        variant="outlined"
        value={language}
        onChange={handleChange}
      >
        <option key='fr' value={'fr'}>fr</option>
        <option key='en' value={'en'}>en</option>
      </Select>
    </div>
  )
};
export default Header;