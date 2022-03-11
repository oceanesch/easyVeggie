import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './MainNavigation.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo_easy_veggie_2.png';
import MainButton from '../Button/MainButton';

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const adminButtonHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <AppBar position="static">
          <Toolbar className={classes.mainNav}>
            <IconButton>
              <SearchIcon sx={{ color: '#a4ac9e' }} />
            </IconButton>
            <Button className={classes.mainNavButton}>
              NUTRITIONAL RECORDS
            </Button>
            <Button className={classes.mainNavButton}>RECIPES</Button>
            <Button className={classes.mainNavButton}>ARTICLES</Button>
            <img
              alt="logo of the website"
              src={logo}
              className={classes.logo}
            />
            <Button
              id="admin-button"
              aria-controls={open ? 'admin-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              onClick={adminButtonHandler}
              className={classes.mainNavButton}
            >
              ADMIN
            </Button>
            <Menu
              id="admin-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={closeHandler}
              MenuListProps={{ 'aria-labelledby': 'admin-button' }}
            >
              <MenuItem className={classes.mainNavMenuItem}>
                Nutritional Records List
              </MenuItem>
              <MenuItem className={classes.mainNavMenuItem}>
                Recipes List
              </MenuItem>
              <MenuItem className={classes.mainNavMenuItem}>
                Articles List
              </MenuItem>
            </Menu>
            <Button className={classes.mainNavButton}>ABOUT US</Button>
            <Button className={classes.mainNavButton}>CONTACT US</Button>
            <MainButton className={classes.mainButton}>LOGIN</MainButton>
          </Toolbar>
        </AppBar>
      </StyledEngineProvider>
    </div>
  );
};

export default MainNavigation;
