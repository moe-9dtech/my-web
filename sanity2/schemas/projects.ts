import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectImage',
      title: 'ProjectImage',
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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'linktoProject',
      title: 'LinktoProject',
      type: 'url',
    }),
  ],
})
