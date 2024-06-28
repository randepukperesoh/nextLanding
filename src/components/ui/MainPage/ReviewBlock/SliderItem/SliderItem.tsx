import { generateUrl } from "@/src/components/utils/generateUrl"
import Stars from "../../../Stars/Stars"
import Image from "next/image"
import { image } from "@/src/app/page"
import React from "react"
import styles from './SliderItem.module.css'

interface SliderItemInterface {
    data :{
        image: image,
        paragraph: string,
        heading: string,
        rating: number
    }
}

const SliderItem: React.FC<SliderItemInterface> = ({data}) => {
    const { heading, image, rating, paragraph} = data
    return(
        <div className={styles.wrapper}>
            <Image src={generateUrl(image.asset._ref).url()} width={56} height={56} alt='Review'/>
            <h5 className={styles.heading}>{heading}</h5>
            <Stars numberOfStars={rating}/>
            <p>{paragraph}</p>
        </div>
    )
}

export default SliderItem