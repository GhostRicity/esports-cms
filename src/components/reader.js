import React from "react"
import { Link } from "gatsby"

import { PDFReader } from "reactjs-pdf-reader"
import { MobilePDFReader } from 'reactjs-pdf-reader'

const Bookr = () => (

    <div style={{
      overflow:'scroll',
      height:1000,
      zIndex:'-500',
      top: '20px',
      maxWidth: '100%',
      }}>
      <PDFReader  url="http://localhost:8000/MonsterManual.pdf" isShowFooter="false"  isShowHeader="true"  showAllPage="true" />
     </div>


)

export default Bookr
