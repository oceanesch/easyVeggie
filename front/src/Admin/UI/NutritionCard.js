import { StyledEngineProvider } from '@mui/material/styles';
import classes from './NutritionCard.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const NutritionCard = (props) => {
  const deleteRecordHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Card className={classes.nutritionCard}>
        <CardContent>
          <Typography className={classes.nutritionCardText}>
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteRecordHandler}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </StyledEngineProvider>
  );
};

export default NutritionCard;
