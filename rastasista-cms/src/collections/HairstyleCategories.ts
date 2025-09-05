import { CollectionConfig } from 'payload';

export const HairstyleCategories: CollectionConfig = {
  slug: 'hairstyle-categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};
