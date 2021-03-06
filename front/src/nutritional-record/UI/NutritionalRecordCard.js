import { Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { noCase } from 'change-case';
import classes from './NutritionalRecordCard.module.css';

const NutritionalRecordCard = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Card className={classes.card}>
        <CardActionArea component={RouterLink} to={`/nutritionalrecords/${noCase(props.id)}`}>
          <CardMedia
            component="img"
            image={props.image}
            alt="Image of basil leaves"
            className={classes.cardImage}
          />
          <CardContent className={classes.cardContent}>
            <Typography component="h5" className={classes.cardTitle}>
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordCard;
