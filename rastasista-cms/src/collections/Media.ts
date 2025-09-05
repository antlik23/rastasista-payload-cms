// src/collections/Media.ts
import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
  ],
};