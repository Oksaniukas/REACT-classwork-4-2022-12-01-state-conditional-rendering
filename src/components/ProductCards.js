import React, { useState } from "react";
import AddInCart from "./Incart";
import CountCart from "./CountBlock";

function CardOfProduct(props) {
   let [heart, setHeart] = useState(props.datacards.isLiked)
   let [show, setShowCart] = useState(true)
   
   let heartClass = heart ? './assets/images/like2.svg' : ' ./assets/images/like.svg' 

   let changeFavourite = () => {
      setHeart(prev => !prev)
   }

let [number1, setNumber1] = useState(0);

let changeNumberPlus = () => {
   setNumber1(prev => prev+1)
}

let changeNumberMinus = () => {
   setNumber1(prev => {
      if (prev ===0) return 0
      return prev-1
   })
}
   return(
      <div className="card">
         {heart}
         <img src={props.datacards.img} alt='cardimage' />
         <div className="text-block">
            <h3>{props.datacards.title}</h3>
            <div className="text-price">{props.datacards.price} €</div>
           {show && <AddInCart />}
                       
         </div>
         <div className='favourite' >
            <img className="favourite-icon" src={heartClass} alt="like" 
            onClick={changeFavourite}/>
         </div>
         {!show && <CountCart minus={changeNumberMinus} plus={changeNumberPlus} number1={number1}/>}         
      </div>
   )
}

export default CardOfProduct