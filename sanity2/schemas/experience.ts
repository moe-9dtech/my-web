import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type:"reference", to: { type: "skills" } }],
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'string',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'string',
    }),
    defineField({
      name: 'isCurrentlyWorking',
      title: 'IsCurrentlyWorking',
      type: 'boolean',
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: "string" }],
    }),
  ],
})
