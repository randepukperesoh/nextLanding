import { type SchemaTypeDefinition } from 'sanity'
import { course } from './course'
import { teacher } from './teacher'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ course, teacher, category],
}
