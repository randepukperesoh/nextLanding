import React from 'react'
import styles from './SmallCourseCart.module.css'
import { sanityFetch } from '@/sanity/lib/client'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import { generateUrl } from '../../utils/generateUrl'

interface SmallCourseCartInterface {
    data: SanityDocument,
}

const SmallCourseCart: React.FC<SmallCourseCartInterface> = async({data}) => {
    const { realCoasts, description, title, image, fakeCoasts } = data

    return(
        <div className={styles.wrapper}>
            <Image src={generateUrl(image).url()} width={96} height={96} alt='Course Image'/>
            <div>
                <h5 className={styles.similarHeading}>{title}</h5>
                <p className={styles.similarP}>{description}</p>
                <p className={styles.price}>{realCoasts}$ <span>{fakeCoasts}$</span></p>
            </div>
        </div>
    )
}

export default SmallCourseCart