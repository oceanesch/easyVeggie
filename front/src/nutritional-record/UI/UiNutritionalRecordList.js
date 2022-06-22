import { Grid, StyledEngineProvider } from '@mui/material';
import NutritionalRecordCard from './NutritionalRecordCard';
import { getImageUrl } from '../helpers/get-image-url';

const UiNutritionalRecordList = (props) => {
    return <StyledEngineProvider injectFirst>
        {props.nutritionalRecords.map((item) => {
        return (
          <Grid item key={item._id}>
            <NutritionalRecordCard
              id={item._id}
              name={item.foodName}
              image={getImageUrl(item._id)}
            />
          </Grid>
        );
      })}
    </StyledEngineProvider>
};

export default UiNutritionalRecordList;
