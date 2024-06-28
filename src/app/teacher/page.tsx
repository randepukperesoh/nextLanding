import { Metadata } from 'next'
import TeacherPage from '../../components/ui/TeacherPage/TeacherPage'
import { sanityFetch } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';
import { generateUrl } from '@/src/components/utils/generateUrl';

export const generateMetadata = async () => {
    const product = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'teacherPage'] {keywords, title, description, ogImages}`})
    const {keywords, title, description, ogImages } = product[0];
    const url = generateUrl(ogImages.asset._ref).url()
    return{
        title: description,
        description: title,
        keywords: keywords,
        openGraph:{
            images: url,
            title: title,
            description: description,
            keywords: keywords
        }
    }
}

export const metadata: Metadata = {
    title: 'Edudu преподователи',
    description: 'Все учителя школы Edudu',
    keywords: 'Обучение, курсы, дети, школа, репетитор'
}

const Teacher = () => {
    return <TeacherPage/>
}

export default Teacher