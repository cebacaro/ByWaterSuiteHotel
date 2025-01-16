
import client from './client'
import imageUrlBuilder from '@sanity/image-url'

type ImageSource = {
  _type: 'image';
  asset: {
    _ref: string;
  };
};

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: ImageSource['asset']) {
  return builder.image(source)
}