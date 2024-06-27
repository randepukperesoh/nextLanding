import { sanityFetch } from "@/sanity/lib/client"
import CourseDetail from "@/src/components/ui/CourseDetail/CourseDetail"
import { generateUrl } from "@/src/components/utils/generateUrl"
import { SanityDocument } from "next-sanity"

export const generateMetadata = async ({params} : {params:{courseId: string}}) => {
    const data = await sanityFetch<SanityDocument>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ]`})
    // const {image} = data[0]
    const url = generateUrl(data[0].assets._ref).url()
    const product = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ] {metaKeywords, metaTitle, metaDescription }`})
    const { metaKeywords, metaTitle, metaDescription } = product[0];
    return{
        title: metaDescription,
        description: metaTitle,
        keywords: metaKeywords,
        images: url
    }
}

const CourseDetails = async ({params} : {params:{courseId: string}}) => {
    const data = await sanityFetch<SanityDocument>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ]`})

    return <CourseDetail data={data[0]}/>
}

export default CourseDetails