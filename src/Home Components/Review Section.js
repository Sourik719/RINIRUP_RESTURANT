import React from "react";
import "../practice"
function Review_Section(Props){
    return(
      <div className="container mb-3 col-md-4">
        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Props.image} role="img"
          aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"
          />
        <h2 className="fw-normal">{Props.name} </h2>
        <p>{Props.review}</p>
        </div>
        
    )
}
export default Review_Section