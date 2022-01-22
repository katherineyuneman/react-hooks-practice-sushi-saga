import React, { useState } from "react";

function Sushi({handleEat, sushi}) {

  // const [ isEaten, setIsEaten ] = useState(false)

  const price = sushi.price
  const id = sushi.id
  const eaten = sushi.eaten

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEat(price, id, eaten)}>
        
        {sushi.eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
