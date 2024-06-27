import styles from './CourseDetail.module.css'
import { SanityDocument } from "next-sanity"
import Image from 'next/image'
import React from "react"
import SimilarSlider from '../SimilarSlider/SimilarSlider'
import { generateUrl } from '../../utils/generateUrl'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import Stars from '../Stars/Stars'
import { sanityFetch } from '@/sanity/lib/client'

interface CourseDetailInterface {
    data: SanityDocument
}

const CourseDetail: React.FC<CourseDetailInterface> = async ({data}) => {
    const {completeTime,nativeId, rating, image, WhatYouLearnInThisCourse,
        teacher, courseDetails, numberOfLessons,
        Certification, realCoasts, StudentsHaveLearned, title,
        WhoThisCourseIsFor
        } = data

    const teacherName = await sanityFetch<SanityDocument[]>({query: `*[_type == 'Teacher' && _id == '${teacher._ref}'] {name}`})

    return(
        <main className={styles.wrapper}>
            <div className={styles.shortInfo}>
                <div>
                    <Image src={generateUrl(image).url()} width={512} height={328} alt='Image Course Detail'/>
                </div>
                <div>
                    <h2 className={styles.courseTitle}>{title}</h2>
                    <p key={numberOfLessons} className={styles.infoList}>Number of lessons: <span>{numberOfLessons}</span></p>
                    <p key={completeTime} className={styles.infoList}>Completion time: <span>{completeTime}</span></p>
                    <p key={teacherName[0].name} className={styles.infoList}>Teacher: <span>{teacherName[0].name}</span></p>
                    <p key={StudentsHaveLearned} className={styles.infoList}>Students have learned: <span>{StudentsHaveLearned}</span></p>
                    <p key={rating} className={styles.infoList}>Review: <Stars numberOfStars={rating}/></p>
                    <p key={realCoasts} className={styles.infoList}>Price: <span>{realCoasts}</span></p>
                    <div className={styles.btnWrapper}>
                        <button className={styles.saleBtn}>Add to cart</button>
                        <button className={styles.trialBtn}>Free trial lesson</button>
                    </div>
                </div>
            </div>
            <div className={styles.longInfo}>
                <h3 className={styles.paragraphHeading}>Course Details</h3>
                <p className={styles.paragraph}>{courseDetails}</p>
                <h3 className={styles.paragraphHeading}>Certification</h3>
                <p className={styles.paragraph}>{Certification}</p>
                <h3 className={styles.paragraphHeading}>Who this course is for</h3>
                <p className={styles.paragraph}>{WhoThisCourseIsFor}</p>
                <h3 className={styles.paragraphHeading}>What you'll learn in this course:</h3>
                <ul className={styles.paragraph}>
                    {WhatYouLearnInThisCourse.map((el:string) => (
                        <li>{el}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className={styles.paragraphHeading}>Similar Courses</h3>
                <SimilarSlider nativeId={nativeId}/>
            </div>
            <FeedbackForm/>
        </main>
    )
}

export default CourseDetail