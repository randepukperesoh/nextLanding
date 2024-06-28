import { image } from '@/src/app/page'
import styles from './ReviewBlock.module.css'
import SliderItem from './SliderItem/SliderItem'
import SliderButtons from './SliderButton/SliderButtons'


interface ReviewBlockInterface {
    data:{
        carts: {
            image: image,
            paragraph: string,
            heading: string,
            rating: number
        }[],
        heading: string
    }
}

const ReviewBlock: React.FC<ReviewBlockInterface> = ({data}) => {
    const {carts, heading} = data
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.sliderWrapper}>
                <SliderButtons>
                    {carts.map(el => (
                        <SliderItem key={el.heading} data={el}/>
                    ))}
                </SliderButtons>
            </div>
        </div>
    )
}
export default ReviewBlock