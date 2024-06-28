import Image from 'next/image'
import styles from './CourseCart.module.css'
import { SanityDocument } from 'next-sanity'
import React from 'react'
import { generateUrl } from '@/src/components/utils/generateUrl'

interface CourseCartInterface {
    data: SanityDocument
}

const CourseCart: React.FC<CourseCartInterface> = ({data}) => {

    const {realCoasts, description, title, fakeCoasts, image, students} = data
    const url = generateUrl(image.asset._ref).url()

    return(
        <div className={styles.cartWrapper}>
            <Image className={styles.imageCart} width={302} height={172} src={url} alt='cart picture'/>
            <div className={styles.studentsInfo}>{students}</div>
            <div className={styles.contentWrapper}>
                <h5 className={styles.headingCart}>{title}</h5>
                <p className={styles.descriptionP}>{description}</p>
                <div className={styles.priceWrapper}>
                    <p>$ {realCoasts} <span>${fakeCoasts}</span></p>
                    <button className={styles.cartBtn}>
                        <Image style={{zIndex:'10'}} width={22} height={22} src='/shopping-cart.png' alt='cart icon'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCart