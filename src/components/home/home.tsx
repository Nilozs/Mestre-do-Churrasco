import React from "react"
import BannerHome from "./banner-home"
import TopCategories from "./carousel-bbq-home"
import TopDiscount from "./carousel-market-home"
import { AccordionHOme } from "./faq-home"
import LocationBar from "./location-home"
import SearchBar from "./search-bar-home"

type Props = {}

const Home = (props: Props) => {
  return (
    <section>
      <div className="max-w-xl mx-auto bg-gray-50 h-screen p-4">
        <LocationBar />
        <SearchBar />
        <BannerHome />
        <TopCategories />
        <TopDiscount />
        <AccordionHOme />
      </div>
    </section>
  )
}

export default Home
