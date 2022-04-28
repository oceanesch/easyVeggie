import React from 'react';
import RecipesListSection from '../features/RecipesListSection';
import PresentationSection from '../features/PresentationSection';
import SubscribeSection from '../features/SubscribeSection';

const LandingPage = () => {
  return (
    <React.Fragment>
      <PresentationSection />
      <RecipesListSection />
      <SubscribeSection />
    </React.Fragment>
  );
};

export default LandingPage;
