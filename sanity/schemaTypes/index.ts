import { type SchemaTypeDefinition } from 'sanity'
import  {event}  from './events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event],
}
