import MainBaner from "../components/ui/MainPage/MainBaner/MainBaner";
import Categories from "../components/ui/MainPage/Categories/Categories";
import StudyingBaner from "../components/ui/MainPage/StudyingBaner/StudyingBaner";
import ChooseBaner from "../components/ui/MainPage/ChooseBaner/ChooseBaner";
import ClassBaner from "../components/ui/MainPage/ClassBaner/ClassBaner";
import FeedbackForm from "../components/ui/FeedbackForm/FeedbackForm";
import ReviewBlock from "../components/ui/MainPage/ReviewBlock/ReviewBlock";
import { sanityFetch } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

export type image = {
  _type: string,
    asset: {
      _ref:string,
      _type: string,
    }
}

const Home = async () => {
  const source = await sanityFetch<SanityDocument[]>({query: `*[ _type == 'mainPage'] {mainBaner, categoryBaner, studyingBaner, chooseBaner, classBaner, reviewBaner, feedbackForm }`} )
  const {
    chooseBaner,
    classBaner,
    reviewBaner,
    mainBaner,
    categoryBaner,
    studyingBaner,
    feedbackForm
  } = source[0]

  return(
    <main>
      { mainBaner.visible && <MainBaner data={mainBaner}/> }
      { categoryBaner.visible && <Categories data={categoryBaner}/>}
      { studyingBaner.visible && <StudyingBaner data={studyingBaner}/>}
      { chooseBaner.visible && <ChooseBaner data={chooseBaner}/>}
      { classBaner.visible && <ClassBaner data={classBaner}/>}
      { reviewBaner.visible && <ReviewBlock data={reviewBaner}/>}
      { feedbackForm && <FeedbackForm/>}
    </main>
);
}
// поправить названия у mainPage
export default Home