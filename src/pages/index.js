import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/Button'
import Info from '../components/info'
import Dude from '../components/dude'
// Font awesome fa
import {FaApple} from 'react-icons/fa'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info/>
    <h1 style={{color:'red'}}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon"/>
    <Button>i'M FROM STYLED</Button>
    <br/>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/products/testing">Go to page testing</Link>
    <br/>
    <Link to="/images">Go to page image</Link>
    <br/>
    <Link to="/products/products">Go to page products</Link>
    <Dude/>
  </Layout>
);


export default IndexPage
