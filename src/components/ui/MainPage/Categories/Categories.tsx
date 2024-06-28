import { sanityFetch } from "@/sanity/lib/client"
import { generateUrl } from "@/src/components/utils/generateUrl"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import styles from './Categories.module.css'
import Link from "next/link"

interface MainBanerInterface {
    data:{
        heading: string,
        paragraph: string,
        image: {
            _type: string,
            asset: {
                _ref:string,
                _type: string,
            }
        }
    }
}

type categoryObj = {
    category: string,
    icon: string
}

const Categories: React.FC<MainBanerInterface> = async () => {
    const category = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'Category'] {category, icon}`})
    const data = category.reduce((acc: categoryObj[], cur) => [...acc, {category: cur.category, icon: generateUrl(cur.icon?.asset?._ref).url()}], [])

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Lessons revolve around 4 areas</h2>
            <p className={styles.paragraph}>
                Diverse lessons around 4 subjects: Math, literature, English, drawing help children improve their comprehensive knowledge
            </p>
            <div className={styles.categoryWrapper}>
                {data.map(el =>{
                    return (
                        <Link key={el.category} href={`/course?category=${el.category}`}>
                            <div className={styles.categoryItem}>
                                <Image src={el.icon} width={28} height={28} alt={el.category}/>
                                <h3>{el.category}</h3>
                            </div>
                        </Link>
                )})}
            </div>
        </div>
    )
}

export default Categories