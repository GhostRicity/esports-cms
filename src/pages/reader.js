import React from "react"
import { Link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bookr from "../components/reader"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


class Reader extends React.Component{
  render(){
    const siteTitle = "Handbook"

    return (
      <div styles={{
        overflow:"hiden"
      }}>

      <Header/>

      <Container  className="container1">

          <Bookr/>

      </Container>

        </div>
    )
  }
}

export default Reader
