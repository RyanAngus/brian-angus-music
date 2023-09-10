import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const blogItems = data.allDatoCmsBlogPost.edges;



    return (
      <div>
      <Nav />

      <div className=" m-4 p-4 flex justify-center text-5xl font-thin font-roboto">
        <h1>BLOG:</h1>
      </div>

      <div className="flex flex-col justify-center">
        {blogItems.map(({ node: blogItem }) => (
          <div className="ml-4 mt-8 flex flex-col items-start" key={blogItem.id}>
            <h1 className="mx-4 my-6 font-roboto font-bold text-6xl tracking-wide" >{blogItem.title}</h1>
            <h2 className="ml-4 my-4 font-roboto text-xl">Date: {blogItem.date}</h2>
            <img className="menu-image hover:opacity-90 m-4 rounded-2xl w-11/12 h-4/5" src={blogItem.image.url} alt={blogItem.itemname} />
            <div className="m-4 text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: blogItem.bodyNode.childMarkdownRemark.html }} />

          </div>
        
        ))}
      </div>
      <Footer />
      </div>
    )
  }
  
  export default Blog


  export const query = graphql`
  query MyQuery {
    allDatoCmsBlogPost(sort: {date: DESC}) {
      edges {
        node {
          title
          id
          image {
            url
          }
          body
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          date
        }
      }
    }
  }

`



  