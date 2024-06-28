import Image from 'next/image'
import styles from './StudyingBaner.module.css'
import { image } from '@/src/app/page'
import { generateUrl } from '@/src/components/utils/generateUrl'

interface StudyingBanerInterface {
    data:{
        image: image,
        heading: string,
        list: string[],
    }
}

const StudyingBaner: React.FC<StudyingBanerInterface> = ({data}) => {
    const {list, image, heading} = data
    return(
        <div className={styles.wrapper}>
            <Image src={generateUrl(image.asset._ref).url()} width={633} height={590} alt='dsa'/>
            <div>
                <h2 className={styles.heading}>{heading}</h2>
                <ul className={styles.list}>
                    {list.map((el, i) => (
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StudyingBaner