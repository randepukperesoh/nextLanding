import React from 'react'
import styles from './Baner.module.css'
import Image from "next/image"
import { generateUrl } from '@/src/components/utils/generateUrl'

interface MainBanerInterface {
    data:{
        heading: string,
        paragraph: string,
        image: {
            _type: string,
            asset: {
                _ref:string,
                _type: string,
            }
        }
    }
}

const MainBaner: React.FC<MainBanerInterface> = ({data}) => {
    const { heading, image, paragraph } = data;
    return(
        <div className={styles.wrapper}>
            <div className={styles.infoWrapper}>
                <Image src='/lamp.png' width={45} height={50} alt='lamp Icon'/>
                <h1 className={styles.banerHeading}>
                    {heading}
                </h1>
                <p className={styles.banerP}>
                    {paragraph}
                </p>
                <button className={styles.button}>Get started !</button>
            </div>
            <Image src={generateUrl(image.asset._ref).url()} width={446} height={520} alt="baner image"/>
        </div>
    )
}
export default MainBaner