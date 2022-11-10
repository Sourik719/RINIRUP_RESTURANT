import React from 'react';
import { NavLink as Link } from "react-router-dom";
const NavLink= Link
export default function Review(){
    return(
      <div>
      <div className="row container-fluid text-dark">
      <div className="col-md-3"></div>
      <div className="col-md-6">
          <h1 className="display-4 fw-normal text-dark">Share Your Experience</h1>
               <hr className="border-2 border-light"/>
               
              <div className="mb-3 col-md-6">
                <label for="exampleFormControlInput1" className="form-label">First Name :</label>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
              </div>
              <div className="mb-3 col-md-6">
                  <label for="exampleFormControlInput1" className="form-label">Last Name :</label>
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
              </div>
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Sharing this feedback for</label>
      <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" for="flexRadioDefault1">
            Online Order
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
          <label className="form-check-label" for="flexRadioDefault2">
            Dine-in
          </label>
        </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">How was your experience with RRR?</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="mb-3">
          <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
        </div>
      </div>
  </div>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            Are you sure to submit your feedback?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal" id="exampleModal1" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
           
          <div className="modal-body">
            <p>Your feedback is successfully recieved. Thank You.</p>
          </div>
          <div className="modal-footer">
              <NavLink className="btn btn-primary" to="/" role="button">Return to Home Page</NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
   
      
    )
    }
     

     
     