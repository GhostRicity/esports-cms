import React from "react"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
//componets

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    //const rootPath = `${__PATH_PREFIX__}/`
    //const blogPath = `${__PATH_PREFIX__}/blog/`
    //let header

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
