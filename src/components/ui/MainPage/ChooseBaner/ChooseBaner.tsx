import Image from 'next/image'
import styles from './ChooseBaner.module.css'
import { image } from '@/src/app/page'
import { generateUrl } from '@/src/components/utils/generateUrl'

interface ChooseBanerInterface {
    data:{
        carts:{
            heading: string,
            paragraph: string,
            image: image,
        }[],
        heading: string,
    }
}

const ChooseBaner: React.FC<ChooseBanerInterface> = ({data}) => {

    const {carts, heading} = data;

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.cartWrapper}>
                {carts.map((el, i) => (
                    <div className={styles.cart} key={i}>
                        <Image className={styles.cartImage} src={generateUrl(el.image.asset._ref).url()} width={126} height={126} alt={el.heading}/>
                        <h6 className={styles.cartHeading}>{el.heading}</h6>
                        <p className={styles.cartParagraph}>{el.paragraph}</p>
                    </div>
                ))}
            </div>
            <div className={styles.orange}></div>
        </div>
    )
}

export default ChooseBaner