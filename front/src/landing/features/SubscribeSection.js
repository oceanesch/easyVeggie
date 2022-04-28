import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { SearchBar } from '../../shared/SearchBar/SearchBar';
import classes from './SubscribeSection.module.css';

const SubscribeSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.subscribeSection}>
        <Grid item className={classes.subscribeSectionImageBox}>
          <img
            src="/images/landing_page_subscribe_image.jpg"
            alt="Rows of various antique mail boxes"
            className={classes.subscribeSectionImage}
          />
        </Grid>
        <Grid container className={classes.subscribeSectionContent}>
          <Grid item sx={{ zIndex: 1 }}>
            <Typography
              component="h1"
              className={classes.subscribeSectionTitle}
            >
              Subscribe to our newsletter
            </Typography>
          </Grid>
          <SearchBar
            className={classes.subscribeSectionInputField}
            label={'Enter your email'}
          />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default SubscribeSection;
