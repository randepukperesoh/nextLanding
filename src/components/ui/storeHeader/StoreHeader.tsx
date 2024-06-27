'use client'
import Image from 'next/image'
import styles from './StoreHeader.module.css'
import React from 'react'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface StoreHeaderInterface {
    categories: string[],
}

const StoreHeader:React.FC<StoreHeaderInterface> = ({categories}) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')?.toString() || '';
    const pathName = usePathname();
    const router = useRouter();

    const category = searchParams.get('category') || ''

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams)
        const value = e.target.value;
        value ? params.set('search', value) : params.delete('search')
        router.replace(`${pathName}?${params.toString()}`)
    }

    const handleChangeCategory = ( str:string ) => {
        const params = new URLSearchParams(searchParams)
        str ? params.set('category', str) : params.delete('category')
        router.replace(`${pathName}?${params.toString()}`)
    }

    const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams)
        value ? params.set('sortBy', value) : params.delete('category')
        router.replace(`${pathName}?${params.toString()}`)
    }

    return(
        <div className={styles.storeHeaderWrapper}>
            <nav>
                <ul className={styles.navMenu}>
                    <li key={'All courses'} onClick={() => handleChangeCategory('All courses')} className={`${styles.menuItem} ${(category === 'All courses' || category === '') && styles.activeItem}`}>All Courses</li>
                    {categories.map(el => (
                        <li key={el} onClick={() => handleChangeCategory(el)} className={`${styles.menuItem} ${category === el && styles.activeItem}`}>{el}</li>
                    ))}
                </ul>
            </nav>
            <div className={styles.sortWrapper}>
                <div className={styles.inputWrapper}>
                    <input defaultValue={search} className={styles.input} onChange={handleChangeInput} placeholder='Serach Course, Teacher name' type='text'/>
                    <button className={styles.searchBtn}>
                        <Image src='/outline.png' width={24} height={24} alt='search logo'/>
                    </button>
                </div>
                <p>Sort by:
                    <select onChange={(e) => handleChangeSortBy(e)}>
                        <option value='asc'>latest</option>
                        <option value='desc'>oldest</option>
                    </select>
                    </p>
            </div>
        </div>
    )
}

export default StoreHeader