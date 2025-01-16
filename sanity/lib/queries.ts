// /sanity/lib/queries.ts
export const EVENTS_QUERY = `
  *[_type == 'event' && defined(slug.current)] | order(_id desc) {
    _id, 
    title, 
    image {
      asset {
        _ref
      }
    },
    slug, 
    description,
  }
`;