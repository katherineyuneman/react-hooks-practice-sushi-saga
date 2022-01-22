import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js";

function SushiContainer({sushis, handleEat, handleMore}) {
  return (
    <div className="belt">
      {sushis.slice(0, 4).map(sushi => <Sushi handleEat={handleEat} key={sushi.id} sushi={sushi}/>)}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
