import React from 'react'
import CourseSlider from '../CoursePage/courseSlider/CourseSlider'
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