import React from 'react';
import RecipesListSection from '../features/RecipesListSection';
import PresentationSection from '../features/PresentationSection';

const LandingPage = () => {
  return (
    <React.Fragment>
      <PresentationSection />
      <RecipesListSection />
    </React.Fragment>
  );
};

export default LandingPage;
