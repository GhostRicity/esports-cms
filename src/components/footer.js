import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { GrInstagram } from 'react-icons/gr';
import { GrFacebook } from 'react-icons/gr';

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Footer = () => {
const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: { eq: "one.jpg" }) {
      childImageSharp {
        fixed(width:250, quality: 70) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
  `)

  return (
  <footer>
    <div className="sticky-bottom">
      <Navbar className="justify-content-center" variant="dark" >
          <Nav.Item eventKey="disabled" disabled>
            <Img fixed={data.image.childImageSharp.fixed} alt="Erasmus+ logo" />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="https://www.facebook.com/Gaming-for-Boosting-School-Engagement-109006730574121/" target="_blank" rel="noopener noreferrer"><GrFacebook className="size" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="https://www.instagram.com/gaming_erasmus19/" target="_blank" rel="noopener noreferrer"><GrInstagram className="size" /></Nav.Link>
          </Nav.Item>
      </Navbar>
        <p className="text-center mt-4 mb-4">Ref. No 2019-1-LV01-KA201-060426 </p>
      <Navbar className="justify-content-center" variant="dark" justify>
        <Nav.Item>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://www.disleksija.lv/">LDB</a>
        </Nav.Item>
      </Navbar>
    </div>
  </footer>
 )
}

export default Footer
