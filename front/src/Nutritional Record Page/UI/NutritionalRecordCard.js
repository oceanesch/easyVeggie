import { Link as RouterLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import classes from './NutritionalRecordCard.module.css';

const NutritionalRecordCard = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Card className={classes.card}>
        <CardActionArea
          // component={RouterLink}
          // to={props.URL}
        >
          <CardMedia
            component="img"
            image={props.image}
            alt="Image of basil leaves"
            className={classes.cardImage}
          />
          <CardContent>
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
