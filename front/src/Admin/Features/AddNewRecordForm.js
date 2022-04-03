import { useFormik, getIn } from 'formik';
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
} from '@mui/material';
import { MainButton } from '../../shared/Button/MainButton';
import camelCase from 'camelcase';

const microTable = [
  'Sodium',
  'Iron',
  'Potassium',
  'Calcium',
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

const AddNewRecordForm = () => {
  const formik = useFormik({
    initialValues: {
      foodName: '',
      foodDescription: '',
      foodQuantity: '',
      macroNutrition: {
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
      },

      microNutrition: {
        sodium: '',
        iron: '',
        potassium: '',
        calcium: '',
        zinc: '',
        vitaminA: '',
        vitaminB6: '',
        vitaminB12: '',
        vitaminC: '',
        vitaminD: '',
        vitaminE: '',
        vitaminK: '',
      },
    },
    validationSchema: Yup.object({
      foodName: Yup.string().required('Required.'),
      foodDescription: Yup.string().required('Required.'),
      foodQuantity: Yup.string().required('Required.'),
      macroNutrition: Yup.object({
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
      }),
      // microNutrition: Yup.object({
      //   sodium: Yup.string().required('Required.'),
      //   iron: Yup.string().required('Required.'),
      //   potassium: Yup.string().required('Required.'),
      //   calcium: Yup.string().required('Required.'),
      //   zinc: Yup.string().required('Required.'),
      //   vitaminA: Yup.string().required('Required.'),
      //   vitaminB6: Yup.string().required('Required.'),
      //   vitaminB12: Yup.string().required('Required.'),
      //   vitaminC: Yup.string().required('Required.'),
      //   vitaminD: Yup.string().required('Required.'),
      //   vitaminE: Yup.string().required('Required.'),
      //   vitaminK: Yup.string().required('Required.'),
      // }),
    }),
    onSubmit: (values) => {
      console.log(values);

      fetch('http://localhost:8080/admin/nutritionalrecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.status !== 200 && response.status !== 201) {
            throw new Error('Adding a new record failed.');
          }
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((error) => {
          console.error(error);
        });
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
        </Box>
        {/* TO DO: add the upload button */}
        <Typography component="h2" className={sharedClasses.subTitle}>
          NUTRITIONAL VALUES
        </Typography>
        <Box className={classes.arraySection}>
          <TableContainer component={Paper} className={classes.arrayContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.arrayHeadCell}>
                    Macro Nutrition Values
                  </TableCell>
                  <TableCell align="center" className={classes.arrayHeadCell}>
                    Quantity
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {macroTable.map((item, index) => {
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
                          id={`macroNutrition.${camelCase(item)}`}
                          name={`macroNutrition.${camelCase(item)}`}
                          onChange={formik.handleChange}
                          value={getIn(
                            formik.values,
                            `macroNutrition.${camelCase(item)}`
                          )}
                          error={
                            getIn(
                              formik.touched,
                              `macroNutrition.${camelCase(item)}`
                            ) &&
                            Boolean(
                              getIn(
                                formik.errors,
                                `macroNutrition.${camelCase(item)}`
                              )
                            )
                          }
                          helperText={
                            getIn(
                              formik.touched,
                              `macroNutrition.${camelCase(item)}`
                            ) &&
                            getIn(
                              formik.errors,
                              `macroNutrition.${camelCase(item)}`
                            )
                          }
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className={classes.arrayContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.arrayHeadCell}>
                    Micro Nutrition Values
                  </TableCell>
                  <TableCell align="center" className={classes.arrayHeadCell}>
                    Quantity
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {microTable.map((item, index) => {
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
                          id={`microNutrition.${camelCase(item)}`}
                          name={`microNutrition.${camelCase(item)}`}
                          onChange={formik.handleChange}
                          value={formik.values.item}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
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
