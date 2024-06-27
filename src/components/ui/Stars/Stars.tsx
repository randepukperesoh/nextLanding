import React from 'react'
import styles from './Stars.module.css'
import Image from 'next/image'

interface StarsInterface {
    numberOfStars: number,
}

const Stars: React.FC<StarsInterface> = ({numberOfStars}) => {
    const arr = new Array(numberOfStars).fill(1)
    return(
        <span>
            {arr.map((el, i) => <Image key={i} src='/Vector.png' width={16} height={15.3} alt='star'/> )}
        </span>
    )
}

export default Stars