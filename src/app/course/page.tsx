import { sanityFetch } from '@/sanity/lib/client';
import SpecialOffer from '@/src/components/ui/CoursePage/specialOffer/SpecialOffer'
import Store from '@/src/components/ui/CoursePage/store/Store'
import StoreHeader from '@/src/components/ui/CoursePage/storeHeader/StoreHeader';
import { SanityDocument } from 'next-sanity';
import styles from './Page.module.css'
import { generateUrl } from '@/src/components/utils/generateUrl';

export const generateMetadata = async () => {
    const product = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'coursePage'] {keywords, title, description, ogImages}`})
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

const Page = async ({
    searchParams,
}: {
    searchParams?: {
        category?: string;
        sortBy?: string;
        search?: string;
    };
}) => {
    const categoryObjects = await sanityFetch<SanityDocument[]>({query: '*[ _type == "Category"] {category}'})
    const categories = categoryObjects.reduce((acc: string[], cur) => [...acc, cur.category], [])

    const category: string = searchParams?.['category'] || 'All courses';
    const sortBy: string = searchParams?.['sortBy'] || '';
    const search: string = searchParams?.['search'] || '';

    return(
        <main>
            <SpecialOffer/>
            <div className={styles.wrapper}>
                <StoreHeader categories={categories}/>
                <Store categories={categories} category={category} sortBy={sortBy} search={search}/>
            </div>
        </main>
    )
}

export default Page