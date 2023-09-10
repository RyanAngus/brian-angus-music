import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { graphql } from "gatsby";




const SchedulePage = ({ data }) => {
  const scheduleItems = data.allDatoCmsSchedule.edges;
  console.log(scheduleItems)

  return (
    <div className="bg-yellow-200" >
      <Nav />
      <h1 className="flex flex-col items-center site-title ml-4 mt-2 font-barlow font-thin text-white text-7xl border-transparent hover:border-white">
          Brian Angus
      </h1>

    <div className="flex flex-col justify-center">

    {scheduleItems.map(({ node: scheduleItem }) => (
          <div className="m-4 flex justify-between items-center bg-blue-200 rounded-full text-gray-800"  key={scheduleItem.id}>
            <h1 className="item-name m-4 font-barlow text-3xl" >{scheduleItem.eventname}</h1>
            <p className="m-4 max-w-xs font-barlow text-lg" >{scheduleItem.eventlocation}</p>
            <p className="m-4 max-w-xs font-barlow text-lg" >{scheduleItem.eventdate}</p>
            <p className="m-4 max-w-xs font-barlow text-lg" >{scheduleItem.eventtime}</p>
          
          </div>
        ))}


    </div>
         

        

    
    
    <Footer />
    </div>
  )

}
  
  
  
  export default SchedulePage

  export const query = graphql`

  query MyQuery {
    allDatoCmsSchedule {
      edges {
        node {
          eventname
          eventlocation
          eventdate
          eventtime
          id
        }
      }
    }
  }
  
  `
  



  