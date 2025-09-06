import { CollectionConfig } from 'payload';
import { seoFields } from '../fields/seo';

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
        {
            name: 'slug',
            type: 'text',
            label: 'URL Slug',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value }) => {
                        // Converts the slug to lowercase and replaces spaces with dashes
                        if (typeof value === 'string') {
                            return value.toLowerCase().replace(/\s+/g, '-');
                        }
                        return value;
                    },
                ],
            },
            unique: true,
            required: true,
        },
        {
            name: 'mainImage',
            type: 'upload',
            label: 'Main Category Image',
            relationTo: 'media',
            required: true,
            hasMany: false,
            admin: {
                description: 'Minimum resolution is 400x400 pixels.',
            },
            filterOptions: {
                // This is where you would enforce minimum resolution if the image upload handler supports it
                // However, this is usually handled by frontend validation or a hook after the file has been uploaded
            },
        },
        ...seoFields,
    ],
};
