import React from 'react'
import {StaticQuery,graphql} from 'gatsby'
const getDude = graphql`
{
    file(relativePath:{eq:"bg-images/Capture du 2018-09-25 11-20-31.png"}){
        childImageSharp{
            fixed(width:150){
                src
            }
        }
    }
}
`
export default function dude(){
    return(
        <div>
            <StaticQuery 
                query={getDude}
                render={data=>{
                    return <img src={data.file.childImageSharp.fixed.src} alt='img'/>
                }}
            />
        </div>
    )
}