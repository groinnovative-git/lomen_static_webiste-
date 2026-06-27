import { useEffect } from 'react';
import CollectionPage from '../pages/CollectionPage';
import SEO from '../components/SEO';

const SITE_URL = "https://lomenfclub.in";

const collectionJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Collection", "item": `${SITE_URL}/collection` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Men's Fashion Collection | LoMen Fashion Club",
    "url": `${SITE_URL}/collection`,
    "description": "Shop stylish men's fashion collections from LoMen Fashion Club, including modern outfits, shirts, t-shirts, pants, and premium menswear for everyday style.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const CollectionModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Men's Fashion Collection | LoMen Fashion Club"
        description="Shop the full men's fashion collection at LoMen Fashion Club — shirts, t-shirts, pants, jackets, hoodies, blazers, and more. Premium menswear for everyday style."
        keywords="men's fashion collection, LoMen collection, men's clothing online India, stylish menswear, shirts t-shirts pants jackets hoodies"
        canonical="/collection"
        jsonLd={collectionJsonLd}
      />
      <CollectionPage />
    </>
  );
};

export default CollectionModule;
