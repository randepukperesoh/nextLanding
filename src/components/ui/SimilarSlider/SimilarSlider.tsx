import { sanityFetch } from "@/sanity/lib/client"
import SmallCourseCart from "../SmallCourseCart/SmallCourseCart"
import { SanityDocument } from "next-sanity"
import styles from './SimilarSlider.module.css'
import Link from "next/link"
import React from "react"

interface SimilarSliderInterface {
    nativeId: string
}

const SimilarSlider: React.FC<SimilarSliderInterface> = async ({nativeId}) => {

    const categoryRef = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'course' && nativeId == ${nativeId}] {category}`})
    // console.log(categoryRef[0])
    const categoryName = await sanityFetch<SanityDocument[]>({query: `*[_type == 'Category' && _id == '${categoryRef[0].category._ref}']`})
    // console.log(categoryName)
    const query = `*[ _type == 'course' && nativeId != ${nativeId} && category._ref in *[_type == 'Category' && category == '${categoryName[0].category}']._id ] [0 ... 3]`
    const data = await sanityFetch<SanityDocument[]>({query: query})

    return(
        <div className={styles.sliderWrapper}>
            <div className={styles.cartWrapper}>
                {data.map(el => <Link key={el._id} href={`/course/${el.nativeId}`}><SmallCourseCart data={el}/></Link>)}
            </div>
        </div>
    )
}

export default SimilarSlider