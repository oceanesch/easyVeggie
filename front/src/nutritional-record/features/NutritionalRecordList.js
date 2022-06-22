import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getNutritionalRecords } from '../../api-client/nutritional-record/nutritional-record.api';
import UiNutritionalRecordList from '../UI/UiNutritionalRecordList';
import NutritionalRecordFilters from './NutritionalRecordFilters';

const NutritionalRecordsList = (props) => {
  const [nutritionalRecords, setNutritionalRecords] = useState([]);
  const [nutritionalRecordFilters, setNutritionalRecordFilters] = useState({foodName:'',});

  useEffect(() => {
    getNutritionalRecords(nutritionalRecordFilters)
      .then((records) => {
        setNutritionalRecords(records);
      })
      .catch((error) => console.error(error));
  }, [nutritionalRecordFilters, props.nutritionalRecordFilters]);

  const onChangeHandler = (filters) => {
    setNutritionalRecordFilters(filters);
    props.onChange(filters);
  };

  return (
    <StyledEngineProvider injectFirst>
      <NutritionalRecordFilters
        onChange={onChangeHandler}
        nutritionalRecordFilters={nutritionalRecordFilters}
      />
      <UiNutritionalRecordList nutritionalRecords={nutritionalRecords} />
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsList;
