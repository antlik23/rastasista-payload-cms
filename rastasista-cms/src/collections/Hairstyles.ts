import { CollectionConfig } from 'payload';

export const Hairstyles: CollectionConfig = {
    slug: 'hairstyles',
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
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'hairstyle-categories',
            hasMany: true,
            required: false,
            label: 'Categories',
                  admin: {
                    position: 'sidebar',
                    description: 'Select one or more categories for this hairstyle.',
                    allowCreate: true
                },
        },
        {
            name: 'gallery',
            type: 'array',
            label: 'Gallery',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
};
