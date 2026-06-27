import { useEffect } from 'react';
import CollectionPage from '../pages/CollectionPage';
import SEO from '../components/SEO';

const CollectionModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Men's Fashion Collection | LoMen Fashion Club"
        description="Shop stylish men's fashion collections from LoMen Fashion Club, including modern outfits, shirts, t-shirts, pants, and premium menswear for everyday style."
        keywords="men's fashion collection, LoMen collection, men's clothing online, stylish menswear, shirts, t-shirts, pants, jackets India"
        canonical="/collection"
      />
      <CollectionPage />
    </>
  );
};

export default CollectionModule;
