import React from "react"
import fb from "./Images/fb.png"
import insta from "./Images/instagram.png"
import twitter from "./Images/twitter.png"

function Footer(){
    return(
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-dark align-bottom">
        <div className="row container">
        <div className="col-md-1"></div>
      <div className="col-md-10">
        <p className="col-md-10">© 2022 Company, Inc. All rights reserved.</p>
      </div>
      <div className="col-md-1">
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="query.html"><img className="visible" width="24" height="24" src="Images/fb.png"/></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><img className="visible" width="30" height="30" src="Images/instagram.png"/></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><img className="visible" width="30" height="30" src="Images/twitter.png"/></a></li>
          
        </ul>
        
      </div>

    </div>
    </footer>
  
      </div>
    )
}
export default Footer