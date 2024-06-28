import { generateUrl } from '@/src/components/utils/generateUrl';
import styles from './TeacherCard.module.css'
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Stars from '../../Stars/Stars';

interface TeacherCardInterface {
    data: SanityDocument
}

const TeacherCard: React.FC<TeacherCardInterface> = ({data}) => {
    const {image, name, rating, description} = data;

    return(
        <div className={styles.wrapper}>
            <Image src={generateUrl(image).url()} width={242} height={229} alt="Teacher image"/>
            <h5>{name}</h5>
            <Stars numberOfStars={rating}/>
            <p>{description}</p>
        </div>
    )
}

export default TeacherCard
