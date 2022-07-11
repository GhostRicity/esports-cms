import React from "react"
import { Link, graphql } from "gatsby"

//componets
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Layout from "../components/layout"


//bootstrap
import Container from 'react-bootstrap/Container'

//styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

class Lv extends React.Component {
  render() {


    return (
    <div>
    <SEO title="research"/>
      <Header/>
      <Layout>
        <Container className="container1" style={{ paddingTop: "4rem"}}>

        </Container>
      </Layout>
      <Footer/>
      </div>
    )
  }
}

export default Lv