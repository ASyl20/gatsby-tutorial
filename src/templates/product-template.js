import React from 'react'
import Layout from '../components/layout'
import {graphql,Link} from 'gatsby'

export const query=graphql`
    query($id:String!){
        contentfulProduct(id:{eq:$id}){
            title
            price
            description{
                description
            }
            image{
                fluid{
                    src
                }
            }
        }
    }
`

export default function({data}){
    const {title,price} = data.contentfulProduct
    const {description} = data.contentfulProduct.description
    const {src} = data.contentfulProduct.image.fluid
    return(
        <Layout>
            <h1>{title} <span style={{marginLeft:'2rem',color:'grey'}}>${price}</span></h1>
            <img src={src} alt={title}/>
            <p>{description}</p>
            <Link to="/products/products">Back to products</Link>
        </Layout>
    )
}