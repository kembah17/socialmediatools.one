export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SocialMediaTools.one',
    url: 'https://socialmediatools.one',
    description: 'Free online social media tools: hashtag generator, caption generator, Instagram bio generator, YouTube tag generator, Twitter character counter, LinkedIn formatter, and image resizer.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://socialmediatools.one/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
