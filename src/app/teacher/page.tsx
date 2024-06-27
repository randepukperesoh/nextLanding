import { Metadata } from 'next'
import TeacherPage from '../../components/ui/TeacherPage/TeacherPage'

export const metadata: Metadata = {
    title: 'Edudu преподователи',
    description: 'Все учителя школы Edudu',
    keywords: 'Обучение, курсы, дети, школа, репетитор'
}

const Teacher = () => {
    return <TeacherPage/>
}

export default Teacher