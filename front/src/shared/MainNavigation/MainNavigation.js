import React, { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './MainNavigation.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { MainButton } from '../Button/MainButton';
import { SearchBar } from '../SearchBar/SearchBar';

export const MainNavigation = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);

  const openSearchBarHandler = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const openResponsiveMenuHandler = () => {
    setOpenResponsiveMenu(!openResponsiveMenu);
  };

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <AppBar position="static">
          <Toolbar className={classes.mainNav}>
            <IconButton onClick={openSearchBarHandler}>
              <SearchIcon sx={{ color: '#a4ac9e' }} />
            </IconButton>
            <Button className={classes.mainNavButton}>
              NUTRITIONAL RECORDS
            </Button>
            <Button className={classes.mainNavButton}>RECIPES</Button>
            <Button className={classes.mainNavButton}>ARTICLES</Button>
            <img
              alt="logo of the website"
              src="images/logo_easy_veggie_2.png"
              className={classes.logo}
            />
            <Button className={classes.mainNavButton}>ADMIN</Button>
            <Button className={classes.mainNavButton}>ABOUT US</Button>
            <Button className={classes.mainNavButton}>CONTACT US</Button>
            <MainButton>LOGIN</MainButton>
          </Toolbar>
        </AppBar>
        <AppBar position="static">
          <Toolbar className={classes.responsiveMainNav}>
            <IconButton onClick={openSearchBarHandler}>
              <SearchIcon sx={{ color: '#a4ac9e' }} />
            </IconButton>
            <img
              alt="logo of the website"
              src="images/logo_easy_veggie_2.png"
              className={classes.logo}
            />
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openResponsiveMenuHandler}
            >
              <MenuIcon sx={{ color: '#a4ac9e' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {openResponsiveMenu && (
          <Box className={classes.responsiveMenu}>
            <Button className={classes.mainNavButton}>
              NUTRITIONAL RECORDS
            </Button>
            <Button className={classes.mainNavButton}>RECIPES</Button>
            <Button className={classes.mainNavButton}>ARTICLES</Button>
            <Button className={classes.mainNavButton}>ADMIN</Button>
            <Button className={classes.mainNavButton}>ABOUT US</Button>
            <Button className={classes.mainNavButton}>CONTACT US</Button>
            <MainButton>LOGIN</MainButton>
          </Box>
        )}
        {openSearchBar && (
          <Box className={classes.searchSection}>
            <SearchBar />
          </Box>
        )}
      </StyledEngineProvider>
    </React.Fragment>
  );
};
