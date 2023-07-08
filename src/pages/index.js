import * as React from "react"
import Carousel from "nuka-carousel"
import { StaticImage } from 'gatsby-plugin-image';

import Nav from "../components/Nav"
import Footer from "../components/Footer";
import Hours from "../components/Hours";
import Map from "../components/Map";
import Address from "../components/Address";





const IndexPage = () => {
  return (
    <div>
    <Nav />
    <main className="flex flex-col items-center justify-center mt-4">
    <StaticImage
            src="../../static/cafe.jpg"
            alt="cafe photo by Petr Sevcovic on Unsplash"
            width={1200}
            height={550}
            placeholder="blurred"
            className="mx-3 my-10 rounded-xl hover:opacity-90"
    />

    <p className="mx-10 my-2 text-xl leading-relaxed">Clifftop Coffee is West Virginia's premier third-wave coffee shop. We
      pride ourselves on creating delicious hand-crafted drinks and food. From organic,
      freshly roasted coffee beans to locally sourced eats, there is something here that
      will delight you.
    </p>

  <div className="mx-10 my-10">
    <Carousel wrapAround="true" autoplay="true" >
      <StaticImage 
        src="../../static/espresso.jpg" 
        alt="Photo by Arisa Chattasa on Unsplash"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/tea.jpg" 
        alt="Photo by Matt Hoffman on Unsplash"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/pastry.jpg" 
        alt="Photo by Mink Mingle on Unsplash"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/pizza.jpg" 
        alt="Photo by Ivan Torres on Unsplash"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
    </Carousel>
  </div>

    <Hours />


    <Map />

    <Address />

    <StaticImage
            src="../../static/roaster.jpg"
            alt="Photo by Yanapi Senaud on Unsplash"
            width={1000}
            height={550}
            placeholder="blurred"
            className="mx-3 my-10 rounded-xl hover:opacity-90"
    />

    </main>

    <Footer />
    </div>
  )
}

export default IndexPage

