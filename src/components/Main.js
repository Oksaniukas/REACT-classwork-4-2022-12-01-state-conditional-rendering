import React from "react";
import Button from "./Button";
import dataCards from "../datacards";
import dataButtons from "../databuttons";
import CardOfProduct from "./ProductCards";

function Main() {
   let listOfCards = dataCards.map((card, idx) => {
      return <CardOfProduct key={idx} datacards={card} />
   })
   let listOfButtons = dataButtons.map((button, uid) => {
      return ( 
      <Button key={button.uid} button={button} />
      )
   })

   return (
      <div>
         <h1> Тату машинки</h1>
         <div className="buttons-list">
            {listOfButtons}
         </div>
         <div className="card-wrapper">
            {listOfCards}
         </div>
      </div>
   )
}

export default Main




