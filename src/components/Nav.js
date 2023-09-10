import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from "react-icons";
import { AiFillFacebook } from "react-icons/ai";
import { FaBandcamp } from "react-icons/fa";
import '../styles/global.css';



const Nav = () => {
  return (
    <div className="nav-div flex items-center justify-between m-0">
    
    <div className="flex gap-3">

    <IconContext.Provider value={{ color: "#323232", size: "2.25em"}}>
      <div className="m-1">
      <a className="w-8 h-8" href="https://www.facebook.com/brian.angus.16"> <AiFillFacebook /> </a>
      </div>
    </IconContext.Provider>

    <IconContext.Provider value={{ color: "#323232", size: "2em"}}>
      <div className="m-1">
      <a className="w-8 h-8" href="https://brianangus.bandcamp.com/"> <FaBandcamp /> </a>
      </div>
    </IconContext.Provider>;


     

     
    </div>
      
    
       
        
      

      <div className="text-gray-800 text-2xl mt-2">
        <Link className="font-barlow mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-gray-800" to="/">
          Home
        </Link>
        <Link className="mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-gray-800" to="/schedule">
          Schedule
        </Link>
        <Link className="mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-gray-800" to="/music">
          Music
        </Link>
      </div>
    </div>
  );
}

export default Nav;
