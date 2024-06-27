import { sanityFetch } from "@/sanity/lib/client"
import CourseDetail from "@/src/components/ui/CourseDetail/CourseDetail"
import { SanityDocument } from "next-sanity"

export const generateMetadata = async ({params} : {params:{courseId: string}}) => {
    const product = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ] {metaKeywords, metaTitle, metaDescription }`})
    const { metaKeywords, metaTitle, metaDescription } = product[0];
    return{
        title: metaDescription,
        description: metaTitle,
        keywords: metaKeywords
    }
}

const CourseDetails = async ({params} : {params:{courseId: string}}) => {
    const data = await sanityFetch<SanityDocument>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ]`})

    return <CourseDetail data={data[0]}/>
}

export default CourseDetails