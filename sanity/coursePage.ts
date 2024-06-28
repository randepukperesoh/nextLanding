import { defineField, defineType } from 'sanity'

export const coursePage = defineType({
    name:'coursePage',
    type: 'document',
    title: 'coursePage',
    fields:[
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'ogImages',
            type: 'image',
            title: 'og Images'
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description'
        }),
        defineField({
            name: 'keywords',
            type: 'string',
            title: 'keywords'
        }),
    ]
})
