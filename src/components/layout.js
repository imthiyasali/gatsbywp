import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      
      <div  className="headers">
            
          <img src={'https://websitelearners.com/content/uploads/2016/09/logo.svg'} style={{height:40}} alt="Logo" />
          <div className="headerright">
          <p className="headerrighttext">Courses</p>
          <p className="headerrighttext">Shop</p>
          <p className="headerrighttext">Tools</p>
          <p className="headerrighttext">Comapny</p>
          </div>


      </div>


 <div   >
            
         <h1 className="headerstxt" >Blog</h1>

      </div>



      <main>{children}</main>
 
    </div>
  )
}

export default Layout
