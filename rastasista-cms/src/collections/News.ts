import { CollectionConfig } from 'payload';

export const News: CollectionConfig = {
    slug: 'news',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            type: 'textarea',
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
        {
            name: 'publishedDate',
            type: 'date',
            label: 'Published Date',
            required: true,
            defaultValue: new Date(),
        },
    ],
};
