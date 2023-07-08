
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';



const Map = () => {
   
  
  return (
    
    <div className="m-4">
        <div className=" mx-4 my-6 p-4 flex justify-center text-5xl font-thin font-roboto">
            <h1>LOCATION:</h1>

        </div>

    <div className="map-container">
    <StaticImage 
        src="../../static/map.png" 
        alt="image of map showing cafe location"
        height={600}
        width={600}
        placeholder="blurred"
        className="ml-4 rounded-xl hover:opacity-90"
      />
      </div>
    
    </div>
  );
};

export default Map;

