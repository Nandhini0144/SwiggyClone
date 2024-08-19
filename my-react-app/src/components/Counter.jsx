import { useEffect,useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0);
    useEffect(()=>{
        console.log("effect called")
    },[count])
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h4>Count:{count}</h4>
        <buttton onClick={increment}>Increment</buttton>
        </>
    )
}