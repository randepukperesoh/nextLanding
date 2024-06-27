import { sanityFetch } from "@/sanity/lib/client"
import CourseDetail from "@/src/components/ui/CourseDetail/CourseDetail"
import { generateUrl } from "@/src/components/utils/generateUrl"
import { SanityDocument } from "next-sanity"

export const generateMetadata = async ({params} : {params:{courseId: string}}) => {
    const product = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ] {metaKeywords, metaTitle, metaDescription, image }`})
    const { metaKeywords, metaTitle, metaDescription, image } = product[0];
    const url = generateUrl(image.asset._ref).url()
    return{
        title: metaDescription,
        description: metaTitle,
        keywords: metaKeywords,
        openGraph:{
            images: url,
            title: metaTitle,
            description: metaDescription,
            keywords: metaKeywords
        }
    }
}

const CourseDetails = async ({params} : {params:{courseId: string}}) => {
    const data = await sanityFetch<SanityDocument>({query: `*[ _type == 'course' && nativeId == ${params.courseId} ]`})

    return <CourseDetail data={data[0]}/>
}

export default CourseDetails