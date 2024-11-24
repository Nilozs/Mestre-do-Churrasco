import BannerHome from "./banner-home"
import TopCategories from "./carousel-bbq-home"
import TopDiscount from "./carousel-market-home"
import { AccordionHome } from "./faq-home"



type Props = {}

const Home = (props: Props) => {
  return (
    <section>
      <div className=" mx-auto h-screen p-4">
        <BannerHome />
        <TopCategories />
        <TopDiscount />
        <AccordionHome />

      </div>
    </section>
  )
}

export default Home
