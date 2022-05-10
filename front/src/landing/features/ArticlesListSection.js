import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import ArticleCard from '../UI/ArticleCard';
import classes from './ArticlesListSection.module.css';

const DUMMY_ARTICLES_LIST = [
  {
    key: 1,
    articleTitle: 'Health benefit of spices',
    articleMainImage: 'images/landing_page_article_image_1.jpg',
    articleAbstract:
      'everything you need to know about spices from their anti-inflammatory properties to their anti-cancer values',
  },
  {
    key: 2,
    articleTitle: 'Soy: discerning the facts from fiction',
    articleMainImage: 'images/landing_page_article_image_2.jpg',
    articleAbstract:
      'sorting the controversy. What is the impact of soy ? Is it a health risk or does it have health benefits ?',
  },
  {
    key: 3,
    articleTitle: 'Plant Protein: everything you need to know',
    articleMainImage: 'images/landing_page_article_image_3.jpg',
    articleAbstract:
      'everything your need to know about proteins: What quantity do you need ? How to obtain them on a plant-based diet?',
  },
];

const ArticlesListSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container>
        <Grid item className={classes.articlesListHeadSection}>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            LATEST RECIPES
          </Typography>
          </Grid>
          <Grid container className={classes.articlesListMainSection}>
            {DUMMY_ARTICLES_LIST.map((article) => {
              return (
                <Grid item key={article.key} className={classes.articlesListCardSection}>
                <ArticleCard
                  articleKey={article.key}
                  articleTitle={article.articleTitle}
                  articleMainImage={article.articleMainImage}
                  articleAbstract={article.articleAbstract}
                />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
    </StyledEngineProvider>
  );
};

export default ArticlesListSection;
