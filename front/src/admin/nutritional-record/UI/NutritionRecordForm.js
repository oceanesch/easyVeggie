import { useFormik } from 'formik';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../../shared/sharedCss.module.css';
import classes from './NutritionRecordForm.module.css';
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
  FormControl,
  FormHelperText,
  Grid,
  OutlinedInput,
} from '@mui/material';
import { MainButton } from '../../../shared/Button/MainButton';
import { CancelButton } from '../../../shared/Button/CancelButton';
import camelCase from 'camelcase';
import { useState } from 'react';
import { nutritionalRecordValidator } from '../helpers/nutritional-record-validator';
import { nutrientGroups } from '../helpers/nutrient-groups';

const NutritionRecordForm = (props) => {
  const nutrientRecord = props.nutrientRecord || {};
  const [uploadedImage, setUploadedImage] = useState();
  const [previewImage, setPreviewImage] = useState();

  const uploadedImageChangeHandler = (event) => {
    event.preventDefault();
    setUploadedImage(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      foodName: `${nutrientRecord.foodName || ''}`,
      foodDescription: `${nutrientRecord.foodDescription || ''}`,
      foodQuantity: `${nutrientRecord.foodQuantity || ''}`,
      //macroNutrition
      calories: `${nutrientRecord.calories || ''}`,
      totalFat: `${nutrientRecord.totalFat || ''}`,
      saturatedFat: `${nutrientRecord.saturatedFat || ''}`,
      unsaturatedFat: `${nutrientRecord.unsaturatedFat || ''}`,
      transFat: `${nutrientRecord.transFat || ''}`,
      cholesterol: `${nutrientRecord.cholesterol || ''}`,
      totalCarbs: `${nutrientRecord.totalCarbs || ''}`,
      dietaryFiber: `${nutrientRecord.dietaryFiber || ''}`,
      totalSugars: `${nutrientRecord.totalSugars || ''}`,
      protein: `${nutrientRecord.protein || ''}`,
      //microNutrition
      sodium: `${nutrientRecord.sodium || ''}`,
      iron: `${nutrientRecord.iron || ''}`,
      potassium: `${nutrientRecord.potassium || ''}`,
      calcium: `${nutrientRecord.calcium || ''}`,
      magnesium: `${nutrientRecord.magnesium || ''}`,
      zinc: `${nutrientRecord.zinc || ''}`,
      vitaminA: `${nutrientRecord.vitaminA || ''}`,
      vitaminB6: `${nutrientRecord.vitaminB6 || ''}`,
      vitaminB12: `${nutrientRecord.vitaminB12 || ''}`,
      vitaminC: `${nutrientRecord.vitaminC || ''}`,
      vitaminD: `${nutrientRecord.vitaminD || ''}`,
      vitaminE: `${nutrientRecord.vitaminE || ''}`,
      vitaminK: `${nutrientRecord.vitaminK || ''}`,
    },
    validationSchema: nutritionalRecordValidator,
    onSubmit: async (values) => {
      console.log(values);
      props.onSubmit({ ...values, uploadedImage });
      formik.resetForm();
      setUploadedImage(null);
      setPreviewImage(null)
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
          <Box
            container
            className={`${classes.uploadImageSection} ${
              previewImage ? classes.uploadImageSectionActive : ''
            }`}
          >
            <Box item>
              <label htmlFor="image">
                <Input
                  onChange={uploadedImageChangeHandler}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <MainButton component="span">UPLOAD IMAGE OF FOOD</MainButton>
              </label>
            </Box>
            <Box item className={previewImage ? classes.uploadImageBox : ''}>
              {previewImage && (
                <img
                  className={classes.imagePreview}
                  src={previewImage}
                  alt=""
                />
              )}
            </Box>
          </Box>
        </Box>

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
                            <FormControl>
                              <OutlinedInput
                                id={camelCase(item)}
                                className={
                                  formik.touched[camelCase(item)] &&
                                  formik.errors[camelCase(item)]
                                    ? ''
                                    : classes.arrayInputCell
                                }
                                name={camelCase(item)}
                                onChange={formik.handleChange}
                                value={formik.values[camelCase(item)]}
                                error={
                                  formik.touched[camelCase(item)] &&
                                  Boolean(formik.errors[camelCase(item)])
                                }
                              />
                              {formik.touched[camelCase(item)] &&
                                formik.errors[camelCase(item)] && (
                                  <FormHelperText error>
                                    Required
                                  </FormHelperText>
                                )}
                            </FormControl>
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
        <Grid container className={classes.actionButtonSection}>
          <Grid item>
            <MainButton type="submit">Submit</MainButton>
          </Grid>
          <Grid item>
            <CancelButton onClick={props.onCancel} type="reset">
              Cancel
            </CancelButton>
          </Grid>
        </Grid>
      </form>
    </StyledEngineProvider>
  );
};

export default NutritionRecordForm;
