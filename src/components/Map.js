
import React from 'react';
import GoogleMapReact from 'google-map-react';



const MapMarker = ({ icon }) => <div className="text-4xl text-blue-600 hover:scale-110">{icon}</div>;

const Map = () => {
   
  
  return (
    
    <div className="m-4">
        <div className=" mx-4 my-6 p-4 flex justify-center text-5xl font-thin font-roboto">
            <h1>LOCATION:</h1>

        </div>

    <div className="map-container">
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
            defaultCenter={{ lat: 38.39646502277806, lng: -82.30722006156408 }} // Set the initial center coordinates
            defaultZoom={15} // Set the initial zoom level
        >

        <MapMarker
                lat={38.39646502277806}
                lng={-82.30722006156408}
                icon='☕'
        />

        </GoogleMapReact>
      </div>
    
    </div>
  );
};

export default Map;


// 38.39646502277806, -82.30722006156408