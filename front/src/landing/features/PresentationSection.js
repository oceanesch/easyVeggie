import { Grid, Typography, StyledEngineProvider } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './PresentationSection.module.css';

const PresentationSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.presentationSection}>
        <Grid item className={classes.presentationSectionImageBox}>
          <img
            alt="Two bowls serving a noodle soup with vegetables and tofu"
            src="images/landing_page_presentation_image.jpg"
            className={classes.presentationSectionImage}
          />
        </Grid>
        <Grid item className={classes.presentationSectionTextArea}>
          <Typography className={classes.presentationSectionTitle}>
            Easy Veggie
          </Typography>
          <Typography
            className={` ${classes.presentationSectionTitle} ${classes.presentationSectionSubTitle} `}
          >
            For the animals, for your health, for the planet
          </Typography>
          <Typography
            className={`${sharedClasses.mainText} ${classes.presentationSectionText}`}
          >
            Easy Veggie is here to help you transitioning to a vegetarian/ vegan
            diet. You will find here everything you need to help you toward a
            greener and healthier lifestyle/ from nutritional information on
            various food to delicious plant-based recipes. You will also find
            here different articles from our specialists about the impact of
            your food on the planet or on your health.{' '}
          </Typography>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default PresentationSection;
