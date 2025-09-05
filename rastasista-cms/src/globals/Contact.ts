// src/globals/Contact.ts
import { GlobalConfig } from 'payload/types';

export const Contact: GlobalConfig = {
  slug: 'contact',
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
  ],
};