import { createNutritionalRecord } from '../../../api-client/nutritional-record/nutritional-record.api';
import NutritionRecordForm from '../UI/NutritionRecordForm';

const NutritionRecordCreate = () => {
  const onSubmitHandler = async ({uploadedImage, ...nutritionalRecord}) => {
    console.log(nutritionalRecord);
    const formData = new FormData();
    Object.entries(nutritionalRecord).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('image', uploadedImage);

    try {
      const createResponse = await createNutritionalRecord(formData);
      console.log(createResponse.data.message);
    } catch (error) {
      console.error(error);
      //TODO: user message: Something went wrong
    }
  };

  return <NutritionRecordForm onSubmit={onSubmitHandler} />;
};

export default NutritionRecordCreate;
