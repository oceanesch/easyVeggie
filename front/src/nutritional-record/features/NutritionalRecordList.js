import { Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { getNutritionalRecords } from '../../api-client/nutritional-record/nutritional-record.api';
import NutritionalRecordCard from '../UI/NutritionalRecordCard';
import * as changeCase from 'change-case';
import SearchContext from '../../store/search-context';

const NutritionalRecordsList = (props) => {
  const searchCtx = useContext(SearchContext);

  const searchedFood = searchCtx.searchedFood

  const filter = changeCase.capitalCase(searchedFood);

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getNutritionalRecords({ filter })
      .then((records) => {
        setFoodList(records);
      })
      .catch((error) => console.error(error));
  }, [filter]);

  return (
    <StyledEngineProvider injectFirst>
      {foodList.map((item) => {
        return (
          <Grid item key={item._id}>
            <NutritionalRecordCard
              id={item._id}
              name={item.foodName}
              image={item.foodImage}
            />
          </Grid>
        );
      })}
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsList;
