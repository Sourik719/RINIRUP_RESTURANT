import React ,{useState} from "react";
import items from "../Content/order_vegitems"

function Order(Props) {
    const addbutton=<button type="submit" className="btn btn-success btn-sm my-3 px-4" data-bs-toggle="modal" visibility="visible" onClick={count_increase}>Add</button>
    const out_of_stock=<button type="button" className="btn btn-secondary btn-sm my-3" disabled>Out of Stock</button>
    let button;
    let btn;
    const[count,setCount]=React.useState(0)

    function count_increase(){
        if(Props.quantity>count){
        setCount((prevCount) => prevCount + 1)
        }
        else setCount(Props.quantity)
    }
    function count_decrease(){
        setCount((prevCount) => prevCount - 1)  
    }
    if(Props.quantity===0){
        btn=out_of_stock;
     }
     else {
          btn=addbutton;
     } 
     
    const value= Props.price*count;
    console.log(Props.value)
    let button_next=<div>
        <div className="btn-group sm my-3 px-4" role="group" >
       <button type="button" className="btn btn-primary" onClick={count_decrease}>-</button>
       <button type="button" className="btn btn-secondary" disabled>{count}</button>
       <button type="button" className="btn btn-primary" onClick={count_increase}>+</button>
       </div>
       <h5 >{value}</h5>
       </div>
    if (count===0){
        button=btn
    }
    else {
        button=button_next
    }
    
    return (
        <div className="row container fluid">
            <div className="col-md-3">
            </div>
            <div className="col-md-7">
                <div className="container align-center border 8 border-color-black my-2 width 50%">
                    <div className="row flex flex-md-row">

                        <div className="col-md-2 order-md-1 px-0 my-3 mx-1">
                            <img src={Props.img} height="70" width="70" />
                        </div>
                        <div className="col-md-7 order-md-2 align-center flex flex-column my-2">
                            <h3>{Props.name}</h3>
                            <h5>Price:{Props.price}</h5>
                        </div>
                        <div className="col-md-2 order-md-3 flex flex-column px-0 my-3 mx-1">
                            {button}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
   
}
export default Order
