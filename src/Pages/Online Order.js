import React from "react";

import vegitems from "../Content/order_vegitems"
import nonvegitems from "../Content/order_nonveglist"
import Order from "./order"

function Order_online() {
    const veg_orderlist = vegitems.map(food=> {
        return <Order
            name={food.name}
            price={food.price}
            img={food.img}
            quantity={food.quantity}
        />
    }
    )
     const nonveg_orderlist = nonvegitems.map(food=> {
        return <Order
            name={food.name}
            price={food.price}
            img={food.img}
            quantity={food.quantity}
        />
    }
    )
    const combined=(<div>{veg_orderlist}{nonveg_orderlist}</div>)
    const[orderlist,setorderlist]=React.useState(combined)
    function vegonly(){
       if  (document.getElementById("flexSwitchCheck").checked === true)
        setorderlist(veg_orderlist)
    else 
    setorderlist(combined)
    }
    return (<div className="row container-fluid text-dark">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <h1 className="display-4 fw-normal text-dark">Choose Items</h1>
            <hr className="border-2 border-dark" />
            <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck" onClick={vegonly} />
  <label className="form-check-label" for="flexSwitchCheckChecked">Veg only</label>
</div>
        </div>
        <div>
            {orderlist}
        </div>
    </div>
    )
}

export default Order_online