import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '../styles/global.css';


const Nav = () => {
  return (

    <div className="flex items-center m-2">
      
      <StaticImage
            src="../images/clifftop-logo-blue.png"
            alt="site logo"
            style={{ maxWidth: '7%' }}
            className="m-3 rounded-2xl hover:opacity-90"
          />

 
      <div className="flex flex-grow justify-center">
            <h1 className="site-title text-white font-bungee text-6xl border-t-2 border-transparent hover:border-white">Clifftop Coffee</h1>
      </div>
      
      

      <div className="text-white text-2xl">
        <Link className="mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-white" to="/">
          Home
        </Link>
        <Link className="mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-white" to="/menu">
          Menu
        </Link>
        <Link className="mr-4 pb-1 cursor-pointer border-b-2 border-transparent hover:border-white" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}

export default Nav;
