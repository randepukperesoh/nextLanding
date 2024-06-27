import { defineField, defineType } from 'sanity'

export const teacher = defineType({
    name:'Teacher',
    type: 'document',
    title: 'Teacher',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'rating',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
    ]
})
