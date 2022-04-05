import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './AddNewRecordForm.module.css';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TableCell,
  TableBody,
  Typography,
  Box,
  Paper,
  Input,
} from '@mui/material';
import { MainButton } from '../../shared/Button/MainButton';
import camelCase from 'camelcase';
import { createNutritionalRecord } from '../../api-client/nutritional-record/nutritional-record.api';

const microTable = [
  'Sodium',
  'Iron',
  'Potassium',
  'Calcium',
  'Magnesium',
  'Zinc',
  'Vitamin A',
  'Vitamin B6',
  'Vitamin B12',
  'Vitamin C',
  'Vitamin D',
  'Vitamin E',
  'Vitamin K',
];

const macroTable = [
  'Calories',
  'Total Fat',
  'Saturated Fat',
  'Unsaturated Fat',
  'Trans fat',
  'Cholesterol',
  'Total carbs',
  'Dietary fiber',
  'Total sugars',
  'Protein',
];

const nutrientGroups = [
  { name: 'Macro Nutrition Values', nutrients: macroTable },
  { name: 'Micro Nutrition Values', nutrients: microTable },
];

const AddNewRecordForm = () => {
  const formik = useFormik({
    initialValues: {
      foodName: '',
      foodDescription: '',
      foodQuantity: '',
      foodImage: '',
      //macroNutrition
      calories: '',
      totalFat: '',
      saturatedFat: '',
      unsaturatedFat: '',
      transFat: '',
      cholesterol: '',
      totalCarbs: '',
      dietaryFiber: '',
      totalSugars: '',
      protein: '',
      //microNutrition
      sodium: '',
      iron: '',
      potassium: '',
      calcium: '',
      magnesium: '',
      zinc: '',
      vitaminA: '',
      vitaminB6: '',
      vitaminB12: '',
      vitaminC: '',
      vitaminD: '',
      vitaminE: '',
      vitaminK: '',
    },
    validationSchema: Yup.object({
      foodName: Yup.string().required('Required.'),
      foodDescription: Yup.string().required('Required.'),
      foodQuantity: Yup.string().required('Required.'),
      foodImage: Yup.string().required('Required.'),

      calories: Yup.string().required('Required.'),
      totalFat: Yup.string().required('Required.'),
      saturatedFat: Yup.string().required('Required.'),
      unsaturatedFat: Yup.string().required('Required.'),
      transFat: Yup.string().required('Required.'),
      cholesterol: Yup.string().required('Required.'),
      totalCarbs: Yup.string().required('Required.'),
      dietaryFiber: Yup.string().required('Required.'),
      totalSugars: Yup.string().required('Required.'),
      protein: Yup.string().required('Required.'),
      sodium: Yup.string().required('Required.'),
      iron: Yup.string().required('Required.'),
      potassium: Yup.string().required('Required.'),
      calcium: Yup.string().required('Required.'),
      magnesium: Yup.string().required('Required.'),
      zinc: Yup.string().required('Required.'),
      vitaminA: Yup.string().required('Required.'),
      vitaminB6: Yup.string().required('Required.'),
      vitaminB12: Yup.string().required('Required.'),
      vitaminC: Yup.string().required('Required.'),
      vitaminD: Yup.string().required('Required.'),
      vitaminE: Yup.string().required('Required.'),
      vitaminK: Yup.string().required('Required.'),
    }),
    onSubmit: (values) => {
      console.log(values);

      createNutritionalRecord(JSON.stringify(values))
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Adding a new record failed.');
          }
          return response;
        })
        .then((responseData) => console.log(responseData.data.message))
        .catch((error) => console.error(error));
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={formik.handleSubmit}>
        <Typography component="h2" className={sharedClasses.subTitle}>
          GENERAL
        </Typography>
        <Box className={classes.generalSection}>
          <TextField
            variant="outlined"
            margin="normal"
            id="foodName"
            name="foodName"
            label="Name of the food"
            value={formik.values.foodName}
            onChange={formik.handleChange}
            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
            helperText={formik.touched.foodName && formik.errors.foodName}
          />
          <TextField
            multiline
            rows={5}
            margin="normal"
            id="foodDescription"
            name="foodDescription"
            label="Description of the food"
            value={formik.values.foodDescription}
            onChange={formik.handleChange}
            error={
              formik.touched.foodDescription &&
              Boolean(formik.errors.foodDescription)
            }
            helperText={
              formik.touched.foodDescription && formik.errors.foodDescription
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="foodQuantity"
            name="foodQuantity"
            label="Nutritional values for this quantity of food"
            onChange={formik.handleChange}
            value={formik.values.foodQuantity}
            error={
              formik.touched.foodQuantity && Boolean(formik.errors.foodQuantity)
            }
            helperText={
              formik.touched.foodQuantity && formik.errors.foodQuantity
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="foodImage"
            name="foodImage"
            label="Adress URL of the food's image"
            onChange={formik.handleChange}
            value={formik.values.foodQuantity}
            error={formik.touched.foodImage && Boolean(formik.errors.foodImage)}
            helperText={formik.touched.foodImage && formik.errors.foodImage}
          />
        </Box>
        {/* TO DO: add the upload button */}
        {/* <label htmlFor="food-image-upload-button">
          <Input id="food-image-upload-button" type="file" />
          <MainButton component="span">UPLOAD IMAGE OF FOOD</MainButton>
        </label> */}
        <Typography component="h2" className={sharedClasses.subTitle}>
          NUTRITIONAL VALUES
        </Typography>
        <Box className={classes.arraySection}>
          {nutrientGroups.map((group, index) => {
            return (
              <TableContainer
                key={index}
                component={Paper}
                className={classes.arrayContainer}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        className={classes.arrayHeadCell}
                      >
                        {group.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.arrayHeadCell}
                      >
                        Quantity
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {group.nutrients.map((item, index) => {
                      return (
                        <TableRow key={index} hover>
                          <TableCell
                            align="center"
                            className={classes.arrayBodyCell}
                          >
                            {item}
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              variant="outlined"
                              className={classes.arrayInputCell}
                              id={camelCase(item)}
                              name={camelCase(item)}
                              onChange={formik.handleChange}
                              value={formik.values[camelCase(item)]}
                              error={
                                formik.touched[camelCase(item)] &&
                                Boolean(formik.errors[camelCase(item)])
                              }
                              helperText={
                                formik.touched[camelCase(item)] &&
                                formik.errors[camelCase(item)]
                              }
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            );
          })}
        </Box>
        <Typography component="h2" className={sharedClasses.subTitle}>
          TAGS
        </Typography>
        <MainButton type="submit">Submit</MainButton>
      </form>
    </StyledEngineProvider>
  );
};

export default AddNewRecordForm;
