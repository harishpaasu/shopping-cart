import React from 'react';
import {useCart} from "react-use-cart"

const Itemcard =  (Props)=> {
    const { addItem}= useCart();
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow">
  <img src={Props.img} className='card-img-top img-fluid'/>
  <div className="card-body">
    <h5 className="card-title">{Props.title} </h5>
    <h4 className="card-title">₨ {Props.price} </h4>
    <p className="card-text"> {Props.desc} </p>
    <button className="btn btn-success" onClick={() =>addItem(Props.item)}>Add to Cart</button>
  </div>
</div>
    </div>
  )
}

export default Itemcard;