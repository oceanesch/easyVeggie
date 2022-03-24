import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordsPage.module.css';
import SearchSection from '../Features/SearchSection';

// src="images/logo_easy_veggie_2.png"

const NutritionalRecordsPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
        <SearchSection />
      </Grid>
      <Grid container className={classes.cardSection}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="images/image_basilique.jpg"
                alt="Image of basil leaves"
                className={classes.cardImage}
              />
              <CardContent>
                <Typography component="h5" className={classes.cardTitle}>
                  BASIL
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="images/image_grenade.jpg"
                alt="Image of a pomegranate"
                className={classes.cardImage}
              />
              <CardContent>
                <Typography component="h5" className={classes.cardTitle}>
                  POMEGRANATE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
