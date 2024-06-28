import { SanityDocument } from "next-sanity";
import TeacherCard from "./TeacherCard/TeacherCard"
import { sanityClientFetch } from "@/sanity/lib/client";
import styles from './TeacherPage.module.css'

const TeacherPage = async () => {
    const data = await sanityClientFetch<SanityDocument[]>({query: `*[ _type == 'teacherCard']`});
    return(
        <main>
            <h2 className={styles.heading}>A team of experienced teachers at Edudu</h2>
            <div className={styles.cardWrapper}>
                {data.map(el => <TeacherCard key={el._id} data={el}/>)}
            </div>
        </main>
    )
}

export default TeacherPage