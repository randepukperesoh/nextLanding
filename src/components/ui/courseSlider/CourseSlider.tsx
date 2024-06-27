import Link from 'next/link';
import CourseCart from '../CourseCart/CourseCart'
import styles from './courseSlider.module.css'
import React from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import { SanityDocument } from "next-sanity";

interface CourseSliderInterface {
    category: string,
    sortBy: string,
    search: string
}

const CourseSlider:React.FC<CourseSliderInterface> = async ({category, sortBy, search}) => {
    const query = `*[_type == 'course' && category._ref in *[_type == 'Category' && category == '${category}']._id ]`
    const data = await sanityFetch<SanityDocument[]>({query: query});


    return(
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderHeading}>
                <h2>Course {category}</h2>
                <Link href={''} className={styles.moreBtn}>See more --</Link>
            </div>
            <div className={styles.cartWrapper}>
                {data.map(el => <Link href={`/course/${el.nativeId}`}><CourseCart data={el} key={el._id}/></Link>)}
            </div>
        </div>
    )
}

export default CourseSlider