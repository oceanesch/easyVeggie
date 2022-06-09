import {
  Box,
  FormControl,
  Grid,
  Input,
  OutlinedInput,
  StyledEngineProvider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import camelCase from 'camelcase';
import sharedClasses from '../../../shared/sharedCss.module.css';
import arraySharedClasses from '../../shared/arraySharedClasses.module.css';
import classes from './RecipeForm.module.css';
import { MainButton } from '../../../shared/Button/MainButton';
import { CancelButton } from '../../../shared/Button/CancelButton';
import { useState } from 'react';

const generalInfoTable = ['Servings', 'Total Time', 'Prep Time', 'Cook Time'];

const RecipeForm = () => {
  const [uploadedRecipeImage, setUploadedRecipeImage] = useState();
  const [previewImage, setPreviewImage] = useState();

  const uploadedImageChangeHandler = (event) => {
    event.preventDefault();
    setUploadedRecipeImage(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    console.log(uploadedRecipeImage);
  };

  const formik = useFormik({
    initialValues: {
      recipeName: '',
      recipeAbstract: '',
      servings: '',
      totalTime: '',
      cookTime: '',
      prepTime: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Typography component="h2" className={sharedClasses.subTitle}>
          GENERAL
        </Typography>
        <Grid container className={classes.generalSection}>
          <Grid item>
            <Grid container className={classes.generalInfoSection}>
              <TextField
                variant="outlined"
                margin="normal"
                id="recipeName"
                name="recipeName"
                label="Title of the recipe"
                value={formik.values.recipeName}
                onChange={formik.handleChange}
              />
              <TextField
                multiline
                rows={10}
                id="recipeAbstract"
                name="recipeAbstract"
                label="Quick summary of the recipe"
                value={formik.values.recipeAbstract}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.arraySection}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={arraySharedClasses.arrayHeadCell}>
                      SERVINGS & TIME
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generalInfoTable.map((item, index) => {
                    return (
                      <TableRow key={index} hover>
                        <TableCell
                          align="center"
                          className={arraySharedClasses.arrayBodyCell}
                        >
                          {item}
                        </TableCell>
                        <TableCell align="center">
                          <FormControl>
                            <OutlinedInput
                              id={camelCase(item)}
                              name={camelCase(item)}
                              onChange={formik.handleChange}
                              value={formik.values[camelCase(item)]}
                              className={arraySharedClasses.arrayInputCell}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Box
          container
          className={`${classes.uploadedImageSection} ${
            previewImage ? classes.uploadedImageSectionActive : ''
          }`}
        >
          <Box item>
            <label htmlFor="recipeImage">
              <Input
                onChange={uploadedImageChangeHandler}
                id="recipeImage"
                name="recipeImage"
                file="file"
                accept="image/*"
                style={{ display: 'none' }}
              />
              <MainButton component="span">UPLOAD IMAGE OF RECIPE</MainButton>
            </label>
          </Box>
          <Box item className={previewImage ? classes.uploadImageBox : ''}>
            {previewImage && (
              <img className={classes.imagePreview} src={previewImage} alt="" />
            )}
          </Box>
        </Box>

        <Grid container className={arraySharedClasses.actionButtonSection}>
          <Grid item>
            <MainButton type="submit">SUBMIT</MainButton>
          </Grid>
          <Grid item>
            <CancelButton type="reset">CANCEL</CancelButton>
          </Grid>
        </Grid>
      </form>
    </StyledEngineProvider>
  );
};

export default RecipeForm;
