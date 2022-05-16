import { Box, Grid, StyledEngineProvider, Typography } from '@mui/material';
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={classes.footerBoxBackground}>
        <Grid container className={classes.footerSection}>
          <Grid item>
            <img
              alt="logo of the website"
              src="images/logo_easy_veggie_2.png"
              className={classes.footerLogoImage}
            />
          </Grid>
          <Grid item>
            <Grid container className={classes.footerSocialMediaSection}>
              <Grid item>
                <Typography className={classes.footerSocialMediaText}>
                  Follow Us
                </Typography>
              </Grid>

              <Grid item>
                <Grid item className={classes.footerSocialMediaBox}>
                  <Grid
                    container
                    className={classes.footerSocialMediaLogoSection}
                  >
                    <Grid item>
                      <img
                        src="images/footer_icon_instagram.png"
                        alt="instagram logo"
                        className={classes.footerSocialMediaLogo}
                      />
                    </Grid>
                    <Grid item>
                      <img
                        src="images/footer_icon_pinterest.png"
                        alt="pinterest logo"
                        className={classes.footerSocialMediaLogo}
                      />
                    </Grid>
                    <Grid item>
                      <img
                        src="images/footer_icon_tiktok.png"
                        alt="tiktok logo"
                        className={classes.footerSocialMediaLogo}
                      />
                    </Grid>
                    <Grid item>
                      <img
                        src="images/footer_icon_youtube.png"
                        alt="youtube logo"
                        className={classes.footerSocialMediaLogo}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledEngineProvider>
  );
};
