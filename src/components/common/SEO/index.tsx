import * as React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  legalName,
  foundingDate,
  logo,
} from 'data/config';

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const structuredDataOrganization = JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'Organization',
    legalName: legalName,
    url: url,
    logo: logo,
    foundingDate: foundingDate,
    founders: [
      {
        '@type': 'Person',
        name: legalName,
      },
    ],
    sameAs: [socialLinks.twitter, socialLinks.instagram, socialLinks.github],
  });

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}/?ref=eliine.dev`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
