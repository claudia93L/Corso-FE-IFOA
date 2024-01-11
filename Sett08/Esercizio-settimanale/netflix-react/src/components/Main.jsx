import { useState, useEffect } from 'react';
import CategorySection from './CategorySection';

const Main = () => {
  const [pageTitle, setPageTitle] = useState('Gallery');
  return (
    <>
      <CategorySection></CategorySection>
    </>
  );
};

export default Main;
