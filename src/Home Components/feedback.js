import React from "react";
import Review_Section from "./Review Section";
import Review from "../Pages/review";
import practice from "../practice"
import { NavLink as Link } from "react-router-dom";

const NavLink = Link

function Feedback() {
  const reviewelements = practice.map(review => {
    return <Review_Section
      name={review.name}
      image={review.image}
      review={review.review}
    />
  }
  )
  return (
    <div className="container my-4">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center" >
        <h1 className="display-4 fw-normal text-dark" >What they have to say?</h1>
        <p className="fs-5 text-muted">Everyday we serve about more than hundreds of customers, but
          before trying why don't you hear from our customers about their experience with RRR?</p>
      </div>
      <div className="row text-dark px-3 wrap">
        <div className="col-md-0.8"></div>
        {reviewelements}
      </div>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-success text-light">
          <NavLink className="nav-link" aria-current="page" to="./feedback" active>Give Your Feedback</NavLink>
        </button>
      </div>
    </div>
  )
}
export default Feedback