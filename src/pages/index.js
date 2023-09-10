import * as React from "react"
import Carousel from "nuka-carousel"
import { StaticImage } from 'gatsby-plugin-image';

import Nav from "../components/Nav"
import Footer from "../components/Footer";






const IndexPage = () => {
  return (
    <>
    <div className="index-page" >
    <Nav />
    
    <main className="flex flex-col items-center justify-center">
    
    <h1 className="site-title ml-4 mt-2 font-thin text-white text-7xl border-transparent hover:border-white">
          Brian Angus
    </h1>



    {/* <StaticImage
            src="../../static/brian.jpeg"
            alt="photo of man beside motorcycle"
            width={800}
            height={600}
            placeholder="blurred"
            className="mx-3 my-10 rounded-xl hover:opacity-90"
    /> */}


  


    </main>

    
    </div>

    <div className="bg-yellow-200">
    <div className="carousel mx-auto py-10">
    <Carousel wrapAround="true" autoplay="true" >
      <StaticImage 
        src="../../static/campguitar.jpeg" 
        alt="people playing guitars"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/campstaffone.jpeg" 
        alt="people pose for camp photo"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/campstafftwo.jpeg" 
        alt="people pose for camp photo"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
      <StaticImage 
        src="../../static/brianhair.jpeg" 
        alt="man with crazy hair"
        height={550}
        width={1200}
        placeholder="blurred"
        className="rounded-xl hover:opacity-90"
      />
    </Carousel>
  </div>
    </div>

    <Footer />

    </>
  )
}

export default IndexPage

