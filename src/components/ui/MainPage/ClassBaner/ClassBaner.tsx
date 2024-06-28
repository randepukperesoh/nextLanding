import Image from 'next/image'
import styles from './ClassBaner.module.css'
import { image } from '@/src/app/page'
import { generateUrl } from '@/src/components/utils/generateUrl'

interface ClassBanerInterface {
    data:{
        heading: string,
        image: image,
        carts: {
            heading: string,
            icon: image
        }[],
        paragraph: string
    }
}

const ClassBaner: React.FC<ClassBanerInterface> = ({data}) => {

    const {heading, carts, paragraph, image} = data
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.paragraph}>
                {paragraph}
            </p>
            <button className={styles.trialBtn}>
                Free trial lesson
            </button>
            <div>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={generateUrl(image.asset._ref).url()} width={1000} height={570} alt='Class Image'/>
                </div>
                <div className={styles.btnWrapper}>
                    {carts.map(el => (
                        <button key={el.heading} className={styles.button}>
                            <Image width={80} height={80} alt={el.heading} src={generateUrl(el.icon.asset._ref).url()}/>
                            {el.heading}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClassBaner