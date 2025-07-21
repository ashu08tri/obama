// components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Shekhar Dixit - Official Site', 
  description = 'Follow the journey of Shekhar Dixit, a national voice for farmers, justice, and rural India.',
  keywords = 'Shekhar Dixit, Rashtriya Kisan Manch, farmers rights, rural India, political leader',
  url = 'https://yourdomain.com',
  image = 'https://yourdomain.com/og-default.jpg'
}) => (
  <Helmet>
    {/* Basic Meta */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph for Facebook/LinkedIn */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default SEO;
