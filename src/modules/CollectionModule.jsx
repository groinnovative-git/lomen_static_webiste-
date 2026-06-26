import React, { useEffect } from 'react';
import CollectionPage from '../pages/CollectionPage';

const CollectionModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CollectionPage />
    </>
  );
};

export default CollectionModule;
