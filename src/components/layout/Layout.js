import React from 'react'
import Nav from '../navigation/Nav'
import Footer from './Footer'
import '../../assets/css/style.css'

const Layout = (props) => {
    return (
        <div className="col">
          <Nav/>  
        <div className="col">
          {props.children}
        </div>
        <div className="col ts-bg-blue ts-bg-footer">
          <Footer/>
        </div>
      </div>
        
    )
}

export default Layout
