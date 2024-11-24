import BannerHome from "./banner-home"
import TopCategories from "./carousel-bbq-home"
import TopDiscount from "./carousel-market-home"
import { AccordionHOme } from "./faq-home"


type Props = {}

const Home = (props: Props) => {
  return (
    <section>
      <div className=" mx-auto h-screen p-4">
        <BannerHome />
        <TopCategories />
        <TopDiscount />
        <AccordionHOme />
      </div>
    </section>
  )
}

export default Home
