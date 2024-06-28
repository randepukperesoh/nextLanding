'use client'
import Image from "next/image"
import { ReactNode, useRef, useState } from "react"
import styles from './SliderButton.module.css'

interface SliderButtonsInterface {
    children: ReactNode[]
}

const SliderButtons: React.FC<SliderButtonsInterface> = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const prevSlide = () => {
        setCurrentSlide( cur => cur < 2 ? cur : cur - 1 )
    };

    const nextSlide = () => {
        setCurrentSlide( cur => cur === (children.length - 2) ? cur : cur + 1 )
    };

    return(
        <>
            <Image onClick={prevSlide} src={'/prevButton.png'} width={48} height={48} alt="btn icon"/>
            <div className={styles.cartsWrapper}>
                {children[currentSlide-1]}
                {children[currentSlide]}
                {children[currentSlide+1]}
            </div>
            <Image onClick={nextSlide} src={'/nextButton.png'} width={48} height={48} alt="btn icon"/>
        </>
    )
}

export default SliderButtons