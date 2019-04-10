import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import {graphql} from 'gatsby'
export default function({data}){
    const images = data.allFile.edges
    return(
        <Layout>
            <h1>All the Images</h1>
            {
                images.map( ({ node },index) => {
                    return <img key={index} src={node.childImageSharp.fluid.src} alt={`img ${index}`}/>
                })
            }
            <Link to="/">GO to home</Link>
        </Layout>
    )
}

export const query =  graphql`
{
    allFile{
        edges{
            node{
              childImageSharp{
                fluid(maxWidth:300){
                  src
                }
              }
            }
        }
    }
}
`
