import styles from './store.module.css'
import CourseSlider from "../courseSlider/CourseSlider"
import StoreHeader from "../storeHeader/StoreHeader"
import { SanityDocument } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/client'
import { headers } from 'next/headers'
import React from 'react'
interface StoreInterface {
    category: string,
    categories: string[],
    sortBy: string,
    search: string
}

const Store: React.FC<StoreInterface> = async ({categories, category, sortBy, search}) => {

    return(
        <div>
            {category !== 'All courses' && (
                    <CourseSlider key={category} search={search} sortBy={sortBy} category={category}/>
            )}
            {category === 'All courses' && (
                <>
                    {categories.map(el => (
                        <CourseSlider key={el} search={search} sortBy={sortBy} category={el}/>
                    ))}
                </>
            )}
        </div>
    )
}

export default Store