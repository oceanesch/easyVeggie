import React from 'react';
import RecipesListSection from '../features/RecipesListSection';
import PresentationSection from '../features/PresentationSection';
import SubscribeSection from '../features/SubscribeSection';
import ArticlesListSection from '../features/ArticlesListSection';
import { Footer } from '../../shared/footer/Footer';

const LandingPage = () => {
  return (
    <React.Fragment>
      <PresentationSection />
      <RecipesListSection />
      <SubscribeSection />
      <ArticlesListSection />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
