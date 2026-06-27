import { Helmet } from 'react-helmet-async';

const SITE_NAME = "LoMen Fashion Club";
const SITE_URL = "https://lomenfclub.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_TITLE = "LoMen Fashion Club | Premium Men's Fashion & Clothing Collection";
const DEFAULT_DESC = "Explore LoMen Fashion Club for premium men's fashion, stylish clothing collections, trending outfits, and modern menswear designed for everyday confidence.";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd,
}) => {
  const pageTitle = title || DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const pageCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL + '/';
  const pageOgImage = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} - Premium Men's Fashion`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageOgImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - Premium Men's Fashion`} />

      {/* Inline JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
