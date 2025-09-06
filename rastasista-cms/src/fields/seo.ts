// src/fields/seo.ts
import { Field } from 'payload';

export const seoFields: Field[] = [
  {
    name: 'metaTitle',
    type: 'text',
    label: 'Meta Title',
    maxLength: 60,
  },
  {
    name: 'metaDescription',
    type: 'textarea',
    label: 'Meta Description',
    maxLength: 160,
  },
  {
    name: 'ogImage',
    type: 'upload',
    label: 'Open Graph Image',
    relationTo: 'media',
  },
];