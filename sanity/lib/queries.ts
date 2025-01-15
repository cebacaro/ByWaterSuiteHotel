// /lib/queries.js
export const EVENTS_QUERY = `
  *[_type == 'event' && defined(slug.current)] | order(_id desc) {
    _id, 
    title, 
    image, 
    slug, 
    description
  }
`;
