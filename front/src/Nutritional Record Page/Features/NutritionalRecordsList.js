import { Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import NutritionalRecordCard from '../UI/NutritionalRecordCard';

const DUMMY_LIST = [
  { key: 1, name: 'BASIL', image: 'images/image_basilique.jpg', URL: '' },
  { key: 2, name: 'BLUEBERRY', image: 'images/image_blueberry.jpg', URL: '' },
  {
    key: 3,
    name: 'BROCCOLI',
    image: 'images/image_broccoli.jpg',
    URL: '/nutritionalrecords/broccoli',
  },
  { key: 4, name: 'CHERRY', image: 'images/image_cerise.jpg', URL: '' },
  { key: 5, name: 'LEMON', image: 'images/image_citron.jpg', URL: '' },
  { key: 6, name: 'ANIS', image: 'images/image_anis.jpg', URL: '' },
  { key: 7, name: 'POMEGRANATE', image: 'images/image_grenade.jpg', URL: '' },
];

const NutritionalRecordsList = () => {
  return (
    <StyledEngineProvider injectFirst>
      {DUMMY_LIST.map((item) => {
        return (
          <Grid item key={item.key}>
            <NutritionalRecordCard name={item.name} image={item.image} URL={item.URL}/>
          </Grid>
        );
      })}
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsList;
