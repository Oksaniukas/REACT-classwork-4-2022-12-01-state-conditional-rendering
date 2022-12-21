import React from "react";

function CountCart(props) {
   return (
      <div className="count-block">
      <div className="count-button minus" onClick={props.minus}>-</div>
      <div className="count-block-text-block">
         <div className="count-block-text1">{props.number1}</div>
            <p className="count-block-text2">В корзине</p>
      </div>
      <div className="count-button plus" onClick={props.plus}>+</div>
   </div>

   )
}
export default CountCart