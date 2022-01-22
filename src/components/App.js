import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [ sushis, setSushis ] = useState([])
  const [ wallet, setWallet ] = useState(100)

  function handleEat (price, id, eaten) {
    console.log("clicked", price,id)
     if (wallet >= price && eaten===false) {
       setWallet(currentMoney => currentMoney - price)
       const updatedSushis = sushis.map(sushi => {
         return sushi.id === id ? {...sushi, eaten:true} : sushi
       })
       setSushis(updatedSushis)
     }
   };

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await fetch(API)
        const sushis = await response.json()
        const updatedSushis = sushis.map(sushi => {
          return {...sushi, eaten: false}})
        setSushis(updatedSushis)
      } catch (error){
        alert(error)
      }
    }
    fetchData()
}, []);


  const handleMore = () => {
    console.log("click")
    const shuffledArray = [...sushis.slice(4), ...sushis.slice(0,4)]
    setSushis(shuffledArray)
  }

  const eatenSushi = sushis.filter(sushi => sushi.eaten === true)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEat={handleEat} handleMore={handleMore}/>
      <Table wallet={wallet} plates={eatenSushi}/>
    </div>
  );
}

export default App;
