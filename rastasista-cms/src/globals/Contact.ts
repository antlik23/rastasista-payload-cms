// src/globals/Contact.ts
import { GlobalConfig } from 'payload';

export const Contact: GlobalConfig = {
  slug: 'contact',
    access: {
        read: () => true,
    },
  label: 'Contact Information',
  fields: [
    {
      name: 'email',
      type: 'text',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Studio Address',
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'Facebook URL',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Instagram URL',
    },
  ],
};