import React from 'react'
import Layout from '../../components/layout'
import {graphql,Link} from 'gatsby'

export const query=graphql`
{
    allContentfulProduct{
      edges{
        node{
          id
          title
          price
          description{
            description
          }
          image{
            fluid(maxWidth:300){
              src
            }
          }
        }
      }
    }
}
`

export default function products({data}){
    return (
        <Layout>
            {data.allContentfulProduct.edges.map(({node:product})=>{
                return(
                    <div key={product.id} style={{padding:'1rem',margin:'1rem 0'}}>
                            <img src={product.image.fluid.src} alt={product.title}/>
                            <h3 style={{marginBottom:'0.5rem'}}>
                            {product.title}
                            <span style={{color:'grey',marginLeft:'2rem'}}>
                            ${product.price}</span>
                            </h3>
                            {/* <p>{product.description.description}</p> */}
                            <Link to={`product/${product.title}`}><h2>Détails</h2></Link>
                            
                    </div>
                )
            })}
        </Layout>
    )
}