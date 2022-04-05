import { Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getNutritionalRecords } from '../../api-client/nutritional-record/nutritional-record.api';
import NutritionalRecordCard from '../UI/NutritionalRecordCard';

const NutritionalRecordsList = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getNutritionalRecords()
      .then((records) => {
        console.log(records);
        setFoodList(records);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      {foodList.map((item) => {
        return (
          <Grid item key={item._id}>
            <NutritionalRecordCard
              name={item.foodName}
              image={item.foodImage}
              // URL={item.URL}
            />
          </Grid>
        );
      })}
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsList;
