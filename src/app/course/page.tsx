import { sanityFetch } from '@/sanity/lib/client';
import SpecialOffer from '@/src/components/ui/specialOffer/SpecialOffer'
import Store from '@/src/components/ui/store/Store'
import StoreHeader from '@/src/components/ui/storeHeader/StoreHeader';
import { SanityDocument } from 'next-sanity';
import styles from './Page.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Edudu курсы',
    description: 'Все курсы нашей школы Edudu',
    keywords: 'Обучение, курсы, дети, школа, репетитор'
}

const Page = async ({
    searchParams,
}: {
    searchParams?: {
        query?: Record<string, string>;
    };
}) => {
    const categoryObjects = await sanityFetch<SanityDocument[]>({query: '*[ _type == "Category"] {category}'})
    const categories = categoryObjects.reduce((acc: string[], cur) => [...acc, cur.category], [])

    const category: string = searchParams['category'];
    const sortBy: string = searchParams['sortBy'];
    const search: string = searchParams['search'];

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