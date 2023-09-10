import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { graphql } from "gatsby";




const MusicPage = () => {

  return (
    <div className="bg-yellow-200" >
      <Nav />
      <h1 className="flex flex-col items-center site-title ml-4 mt-2 font-barlow font-thin text-white text-7xl border-transparent hover:border-white">
          Brian Angus
      </h1>
        
        <div className="flex items-center justify-center">
        <h3 className="w-10/12 text-xl text-gray-800 mx-4 my-8 leading-loose">I grew up playing the folk/acoustic rock songs of the 60's and 70's on the guitar. After I was saved in 1975 I began to play “Jesus music” for an Inter-varsity group on campus that also helped me develop a personal relationship with Jesus Christ. As a result I began to write songs and perform my own style of folk/gospel music. God put it on my heart to record this and I hope you enjoy the results.</h3>
        </div>
        

        <div className="flex items-center justify-center">

          <div className="menu-div grid grid-cols-3 gap-8 m-4">
            <div>
              <iframe title="runningOutOfTime" className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=4145210959/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://brianangus.bandcamp.com/album/running-out-of-time">Running Out of Time by Brian Angus</a></iframe>    
            </div>
          
            <div>
              <iframe title="whoAmI" className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3872111341/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://brianangus.bandcamp.com/album/who-am-i-that-you-know-my-name">Who Am I That You Know My Name by Brian Angus</a></iframe>
            </div>
            
            <div>
              <iframe title="allOverTheWorld" className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3409186828/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://brianangus.bandcamp.com/album/all-over-the-world-demo">All Over The World (Demo) by Brian Angus</a></iframe>
            </div>
          </div>

        </div>

        

    
    
    <Footer />
    </div>
  )

}
  
  
  
  export default MusicPage


  



  