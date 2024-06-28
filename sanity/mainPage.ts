import { defineField, defineType } from 'sanity'

export const mainPage = defineType({
    name:'mainPage',
    title: 'Main page',
    type: 'document',
    fields:[
        defineField({
            name: 'mainBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {name: 'paragraph', type: 'string'},
                {name: 'image', type: 'image',}
            ],
            title: 'Main Baner'
        }),
        defineField({
            name: 'categoryBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {name: 'paragraph', type: 'string'}
            ],
            title: 'Category Baner'
        }),
        defineField({
            name: 'studyingBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {name: 'list', type: 'array', of:[{type: 'string'}]},
                {type: 'image', name: 'image'}
            ],
            title: 'Studying Baner'
        }),
        defineField({
            name: 'chooseBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {
                    name: 'carts',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields:[
                                {type:'string', name: 'heading'},
                                {type:'string', name: 'paragraph'},
                                {type:'image', name: 'image'}
                            ]
                        }
                    ]
                }
            ],
            title: 'Choose Baner'
        }),
        defineField({
            name: 'classBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {type:'image', name:'image'},
                {
                    name: 'carts',
                    type: 'array',
                    of:[
                        {
                            type: 'object', fields:[
                                {type: 'string', name: 'heading'},
                                {type: 'image', name: 'icon'}
                            ]
                        }
                    ]
                },
                {type: 'text', name: 'paragraph'}
            ],
            title: 'Class Baner'
        }),
        defineField({
            name: 'reviewBaner',
            type: 'object',
            fields:[
                {type:'boolean', name:'visible'},
                {type:'string', name:'heading'},
                {name: 'carts', type: 'array', of:[
                    {
                        type: 'object',
                        fields: [
                            {type: 'string', name: 'heading'},
                            {type: 'string', name: 'paragraph'},
                            {type: 'number', name: 'rating'},
                            {type: 'image', name: 'image'},
                        ]
                    }
                ]}
            ],
            title: 'Review Baner'
        }),
        defineField({
            name: 'feedbackForm',
            type: 'boolean'
        })
    ]
})
