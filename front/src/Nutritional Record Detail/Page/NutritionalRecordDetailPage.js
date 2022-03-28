import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import NutritionalRecordMainSection from '../Features/NutritionalRecordMainSection';

const NutritionalRecordDetailPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Grid item>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            NUTRITIONAL RECORD - BROCCOLI
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" className={sharedClasses.mainText}>
            Broccoli are a variety of cabbage originated from Sicily. Broccolis
            are high in water so low in energy but high in other minerals.
            Various different studies have shown that broccolis like other
            brassicaceae are an anti-cancer food. It has a preventive action
            against certain cancer because they are high in fiber and various
            antioxidants. This vegetable can also fight existing cancer and can
            increase the chance of survival.
          </Typography>
        </Grid>
      </Grid>
      <NutritionalRecordMainSection />
    </StyledEngineProvider>
  );
};

export default NutritionalRecordDetailPage;
