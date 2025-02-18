import { useState } from "react";
import { Breakfast } from "./Breakfast";
import { Dinner } from "./Dinner";
import { Lunch } from "./Lunch";

function Categories() {
  const [category,setCategory] = useState("lunch")

  if(category === "breakfast"){
    return <Breakfast setCategory={setCategory} category={category}/>
  }
  else if(category === "lunch"){
    return <Lunch setCategory={setCategory} category={category}/>
  }else if(category === "dinner"){
    return <Dinner setCategory={setCategory} category={category}/>
  }
    
}

export default Categories