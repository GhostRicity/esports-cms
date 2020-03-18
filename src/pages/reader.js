import React from 'react'

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import  Bookr  from "../components/pdfReader"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Container from 'react-bootstrap/Container'

const Reader = () =>{
return(
      <div styles={{
        overflow:"hiden"
      }}>

      <Header/>
       <Container  className="container1">
          <Bookr/>
      </Container>
      <Footer/>
        </div>
      )
}


export default Reader;
