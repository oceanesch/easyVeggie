import { useFormik } from 'formik';
import sharedClasses from '../../shared/sharedCss.module.css';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TableCell,
  TableBody,
  Typography,
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
  'Folate',
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
    <form onSubmit={formik.handleSubmit}>
      <Typography component="h2" className={sharedClasses.subTitle}>
        GENERAL
      </Typography>
      <TextField
        variant="outlined"
        id="foodName"
        name="foodName"
        label="Name of the food"
        value={formik.values.foodName}
        onChange={formik.handleChange}
      />
      <TextField
        multiline
        rows={5}
        id="foodDescription"
        name="foodDescription"
        label="Description of the food"
        value={formik.values.foodDescription}
        onChange={formik.handleChange}
      />
      <TextField
        variant="outlined"
        id="foodQuantity"
        name="foodQuantity"
        label="Nutritional values for this quantity of food"
        onChange={formik.handleChange}
        value={formik.values.foodQuantity}
      />
      <Typography component="h2" className={sharedClasses.subTitle}>
        NUTRITIONAL VALUES
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Macro Nutrition Values</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formik.initialValues.macroNutrition.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item}</TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Micro Nutrition Values</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formik.initialValues.microNutrition.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item}</TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
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
      <Typography component="h2" className={sharedClasses.subTitle}>
        TAGS
      </Typography>
      <MainButton type="submit">Submit</MainButton>
    </form>
  );
};

export default AddNewRecordForm;
