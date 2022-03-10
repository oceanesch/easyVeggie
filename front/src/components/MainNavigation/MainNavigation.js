import { StyledEngineProvider } from '@mui/material/styles';
import classes from './MainNavigation.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import logo from '../../images/logo_easy_veggie_2.png';

const MainNavigation = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <AppBar position="static">
          <Toolbar className={classes.mainNav}>
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
            <Button className={classes.mainNavButton}>ADMIN</Button>
            <Button className={classes.mainNavButton}>ABOUT US</Button>
            <Button className={classes.mainNavButton}>CONTACT US</Button>
            <Button className={classes.mainButton}>LOGIN</Button>
          </Toolbar>
        </AppBar>
      </StyledEngineProvider>
    </div>
  );
};

export default MainNavigation;
