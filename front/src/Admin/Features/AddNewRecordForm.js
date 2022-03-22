import { useFormik } from 'formik';
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
  'Total fat',
  'Saturated fat',
  'Unsaturated fat',
  'Trans fat',
  'Cholesterol',
  'Total carbs',
  'Dietary fiber',
  'Total sugars',
  'Proteins',
];

const AddNewRecordForm = () => {
  const formik = useFormik({
    initialValues: {
      foodName: '',
      foodDescription: '',
      foodQuantity: '',
      macroNutrition: macroTable,
      microNutrition: microTable,
    },
    onSubmit: (values) => {
      console.log(values);
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="foodQuantity"
            name="foodQuantity"
            label="Nutritional values for this quantity of food"
            onChange={formik.handleChange}
            value={formik.values.foodQuantity}
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
                {formik.initialValues.macroNutrition.map((item, index) => {
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
                          id={item}
                          name={item}
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
                {formik.initialValues.microNutrition.map((item, index) => {
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
                          id={item}
                          name={item}
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
