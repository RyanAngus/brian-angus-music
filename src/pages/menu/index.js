import React from "react";
import { graphql } from "gatsby";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Menu = ({ data }) => {
  const menuItems = data.allDatoCmsMenuitem.edges;

 
  return (
    <div>
      <Nav />

      <div className=" m-4 p-4 flex justify-center text-5xl font-thin font-roboto">
        <h1>MENU:</h1>
      </div>
      
      <div className="menu-div grid grid-cols-3">
        {menuItems.map(({ node: menuItem }) => (
          <div className="m-4 flex flex-col items-center" key={menuItem.itemname}>
            <h1 className="m-4 font-bungee text-3xl" >{menuItem.itemname}</h1>
            <img className="menu-image hover:opacity-90 m-4 rounded-2xl w-96 h-96" src={menuItem.menuitemimage.url} alt={menuItem.itemname} />
            <p className="m-4 max-w-xs text-lg" >{menuItem.itemdescriptionPrice}</p>
          
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;

export const query = graphql`

query MyQuery {
  allDatoCmsMenuitem(sort: {order: ASC}) {
    edges {
      node {
        itemname
        itemdescriptionPrice
        menuitemimage {
          path
          url
        }
      }
    }
  }
}

`

