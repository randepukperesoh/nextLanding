import { defineField, defineType } from 'sanity'
import { teacher } from './teacher'

export const course = defineType({
    name:'course',
    type: 'document',
    title: 'course',
    fields:[
        defineField({
            name: 'nativeId',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'fakeCoasts',
            type: 'number',
        }),
        defineField({
            name: 'realCoasts',
            type: 'number',
        }),
        defineField({
            name: 'rating',
            type: 'number',
        }),
        defineField({
            name: 'numberOfLessons',
            type: 'string',
        }),
        defineField({
            name: 'completeTime',
            type: 'string',
        }),
        defineField({
            name: 'teacher',
            type: 'reference',
            to: [{type: 'Teacher'}]
        }),
        defineField({
            name: 'StudentsHaveLearned',
            type: 'number',
        }),
        defineField({
            name: 'courseDetails',
            type: 'string',
        }),
        defineField({
            name: 'Certification',
            type: 'string',
        }),
        defineField({
            name: 'WhoThisCourseIsFor',
            type: 'string',
        }),
        defineField({
            name: 'WhatYouLearnInThisCourse',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'category',
            type: 'reference',
            to:[{type: 'Category'}]
        }),
        defineField({
            name: 'students',
            type: 'string',
        }),
        defineField({
            name: 'metaTitle',
            type: 'string',
        }),
        defineField({
            name: 'metaDescription',
            type: 'string',
        }),
        defineField({
            name: 'metaKeywords',
            type: 'string',
        }),
    ]
})
