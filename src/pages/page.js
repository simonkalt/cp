import React from 'react';
import { useContentful } from 'react-contentful';

const Page = props => {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'Page',
    query: {
      'fields.slug[in]': `/${props.match.slug || ''}`,
    }
  });
 
  if (loading || !fetched) {
    return null;
  }
 
  if (error) {
    console.error(error);
    return null;
  }
 
  if (!data) {
    return <p>Page does not exist.</p>;
  }
 
  // See the Contentful query response
  console.debug(data);
 
  // Process and pass in the loaded `data` necessary for your page or child components.
  return (
    data
  );
}
export default Page.data;