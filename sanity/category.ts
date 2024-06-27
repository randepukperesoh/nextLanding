import { defineField, defineType } from 'sanity'

export const category = defineType({
    name:'Category',
    type: 'document',
    title: 'Category',
    fields:[
        defineField({
            name: 'category',
            type: 'string',
            title: 'Category'
        })
    ]
})
