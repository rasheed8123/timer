
import { useState } from "react";
import "../App.css";
// import { Main } from "./todolist.jsx"
import { useEffect } from "react";

export const Inventory = ({numb,end}) => {
  const [count,setcount] = useState(numb)
  
  useEffect(()=>{
    var id= setInterval(()=>{
     setcount((prevValue)=>{
        if(prevValue>=end-1){
          console.log("stop")
          clearInterval(id)
        }
        return prevValue + 1;
      })
    },1000)
  },[])
                                    

  return (
    <div>count : {count}</div>
  )
}
