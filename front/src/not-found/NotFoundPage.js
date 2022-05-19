import { Box, Grid, StyledEngineProvider, Typography } from '@mui/material';
import { MainButton } from '../shared';
import { Link as RouterLink } from 'react-router-dom';
import classes from './NotFoundPage.module.css';
import sharedClasses from '../shared/sharedCss.module.css';

const NotFoundPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={classes.notFoundFirstBlob} />
      <Box className={classes.notFoundSecondBlob} />
      <Box className={classes.notFoundThirdBlob} />
      <Grid container className={classes.notFoundMainSection}>
        <Grid item className={classes.notFoundImageContainer}>
          <img
            alt="hand sticking out of a hay field"
            src="images/not_found_image.jpg"
            className={classes.notFoundImage}
          />
        </Grid>
        <Grid item className={classes.notFoundTextContainer}>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            Opss...
          </Typography>
          <Typography component="h2" className={sharedClasses.mainTitle}>
            Page Not Found
          </Typography>
          <Typography component="p" className={sharedClasses.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.notFoundButtonSection}>
        <RouterLink to="/" className={sharedClasses.noLink}>
          <MainButton>BACK TO HOMEPAGE</MainButton>
        </RouterLink>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NotFoundPage;
