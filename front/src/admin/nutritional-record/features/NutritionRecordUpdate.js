import { useEffect, useState } from 'react';
import {
  editNutritionalRecord,
  getNutritionalRecord,
} from '../../../api-client/nutritional-record/nutritional-record.api';
import NutritionRecordForm from '../UI/NutritionRecordForm';

const NutritionRecordUpdate = (props) => {
  const foodId = props.foodId;
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    getNutritionalRecord(foodId)
      .then((record) => {
        setFoodData(record);
      })
      .catch((error) => console.error(error));
  }, [foodId]);

  const onSubmitHandler = async (nutritionalRecord) => {
    try {
      const editResponse = await editNutritionalRecord(
        foodId,
        nutritionalRecord
      );
      console.log(editResponse.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NutritionRecordForm onSubmit={onSubmitHandler} nutrientRecord={foodData} />
  );
};

export default NutritionRecordUpdate;
