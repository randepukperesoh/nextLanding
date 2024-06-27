import CourseSlider from "../courseSlider/CourseSlider"
import React from 'react'
interface StoreInterface {
    category: string,
    categories: string[],
    sortBy: string,
    search: string
}

const Store: React.FC<StoreInterface> = async ({categories, category, sortBy, search}) => {
    return(
        <div>
            {(category !== 'All courses' && category) && (
                    <CourseSlider key={category} search={search} sortBy={sortBy} category={category}/>
            )}
            {(category === 'All courses' || category === undefined ) && (
                <>
                    {categories.map(el => (
                        <CourseSlider key={el} search={search} sortBy={sortBy} category={el}/>
                    ))}
                </>
            )}
        </div>
    )
}

export default Store