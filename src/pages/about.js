import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Layout from "../components/layout"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const AboutPage = () => {
const logo  = useStaticQuery(graphql`
  query {
    logo1: file(relativePath: { eq: "ldb-logo.jpg"}) {
  childImageSharp {
    fluid(quality: 90, maxWidth: 250) {
      ...GatsbyImageSharpFluid_withWebp
     }
    }
  }
  logo2: file(relativePath: { eq: "spts-logo.jpg"}) {
childImageSharp {
  fluid(quality: 100, maxWidth: 250) {
    ...GatsbyImageSharpFluid_withWebp
   }
  }
}
  logo3: file(relativePath: { eq: "hodina-logo.png"}) {
childImageSharp {
  fluid(quality: 90, maxWidth: 250) {
    ...GatsbyImageSharpFluid_withWebp
    }
   }
  }
  logo4: file(relativePath: { eq: "chekin-logo.png"}) {
childImageSharp {
  fluid(quality: 90, maxWidth: 250) {
    ...GatsbyImageSharpFluid_withWebp
   }
  }
}
  logo5: file(relativePath: { eq: "acd-logo.png"}) {
childImageSharp {
  fluid(quality: 90, maxWidth: 250) {
  ...GatsbyImageSharpFluid_withWebp
    }
   }
  }
  logo6: file(relativePath: { eq: "coriss-logo.jpg"}) {
childImageSharp {
  fluid(quality: 90, maxWidth: 250) {
  ...GatsbyImageSharpFluid_withWebp
    }
   }
  }
}
`)


    return (
      <div>
      <SEO title="About"/>
      <Header/>
      <Layout>
      <Container  className="container1" >
      <Row>
      </Row>
      <Row>
        <Col xl>
          <h2 style={{ margin: "20px 0 40px" }}>About</h2>
          <h3>Eramsus+ strategic partnership project - gaming for engagement at school of students with learning disabilities </h3>

        </Col>
        <Col md="auto">
          <p>A consortium of six partners led by the Latvian Dyslexia Association
          (Latvia) has started the Erasmus+ KA2 strategic partnership project Gaming for
          Boosting School Engagement of Students with Learning Disabilities (Ref. No 2019-1-LV01-KA201-060426).
           The aim of the project is to popularize e-sports as a tool for engaging students with various learning disabilities (LDs) in school.</p>
           <p>Students with dyslexia and other learning disabilities are often quite detached from
            school life and do not get the benefit of socialization and skills development that
            extra-curricular activities give. Current research and practice suggest that gaming
            and e-sports are good for developing many skills like concentration, focus,
            decision making. They also provide a venue for socialising, using of foreign
            languages and contributing to street credibility as achievement in any sports of a
            school team does.
            </p>
            <p>The partners of the project are Asociacion Cultural y Deportiva la Hoya (Spain),
              Associacao Check-in - Cooperacao e Desenvolvimento (Portugal), CO.RI.S.S
              (Italy), Hodina H ZS (Czech Republic) and Srednja poklicna in tehniska šola
              Murska Sobota (Slovenia). The duration of the project is two years.
            </p>
            <p>
            The project consortium will assemble the research and best practice to highlight the gains from e-sports for students with LDs and create a manual for schools to organize gaming and e-sports tournaments at schools.
            The training material for this will be filmed during the three tournaments where teams of students with LDs from all six partner countries will come together to play League of Legends (LoL).
            </p>
            <p>
            The research, manual and training videos will be placed on a web site specially created for the project. The project will use Agile tools and techniques in project management and development. Agile is a highly demanded work skill in the Information
            Technology industry and this can create a professional path for many students with LDs.
            </p>

        </Col>

      </Row>

      <Row>
      <Col md="auto">
      <h2 style={{ margin: "20px 0 40px" }}>Project Partners</h2>
      </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Img fluid={logo.logo1.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
          <h2>Latvijas Disleksijas biedrība</h2>
          <Button style={{ margin: "20px 0 40px" }} href="http://www.disleksija.lv/" target="_blank">More</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Img style={{ margin: "20px 0 40px" }} fluid={logo.logo2.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
          <h2 style={{ margin: "20px 0 40px" }}>Srednja poklicna in tehniška šola Murska Sobota</h2>
          <Button style={{ margin: "20px 0 40px" }} href="http://www.s-ssts.ms.edus.si/" target="_blank">More</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Img style={{ margin: "20px 0 40px" }} fluid={logo.logo3.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
         <h2 style={{ margin: "20px 0 40px" }}>Hodina H ZS</h2>
          <Button style={{ margin: "20px 0 40px" }} href="http://www.hodinah.cz/" target="_blank">More</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
         <Img style={{ margin: "20px 0 40px" }} fluid={logo.logo4.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
          <h2 style={{ margin: "20px 0 40px" }}>Associacao Chek-in cooperacao e desenvolvimento</h2>
          <Button style={{ margin: "20px 0 40px" }} href="http://www.checkin.org.pt/" target="_blank">More</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
         <Img style={{ margin: "20px 0 40px" }} fluid={logo.logo5.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
          <h2 style={{ margin: "20px 0 40px" }}>ACD La Hoya</h2>
          <Button style={{ margin: "20px 0 40px" }} href="http://www.acdlahoya.org/" target="_blank">More</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Img style={{ margin: "20px 0 40px" }} fluid={logo.logo6.childImageSharp.fluid} />
        </Col>
        <Col s={8}>
          <h2 style={{ margin: "20px 0 40px" }}>CO.RI.S.S</h2>
          <Button
          style={{ margin: "20px 0 40px" }} href="http://www.coriss.it/" target="_blank">More</Button>
        </Col>
      </Row>


      </Container>
      </Layout>
      <Footer/>

    </div>
    )
  }


//style={{ margin: "20px 0 40px" }}

export default AboutPage
