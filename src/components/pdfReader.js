import React from 'react'

import { MobilePDFReader } from 'reactjs-pdf-reader'

class Bookr extends React.Component {
  render(){
    return(
    <div style={{
      overflow:'scroll',
      height:1000,
      zIndex:'-500',
      top: '100px',
      maxWidth: '100%',
      }}>
      <MobilePDFReader url="http://localhost:8000/Rokas.pdf" isShowFooter="false"  isShowHeader="true"  showAllPage="true" />
     </div>
   )
  }
}

export default Bookr
