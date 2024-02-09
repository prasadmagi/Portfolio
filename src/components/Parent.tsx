import { useState } from "react"
import { Home } from "./Home"

export const Parent = ()=>{

    const[count,setcount] = useState(0)
    const[message,setmessage] = useState("Prev")
    const handlechilddata = (msg: any)=>{
        console.log(msg);
        setmessage(msg)
    }
    return (
        <div>
            {message}
            <button onClick={()=>setcount((prev)=>prev+1)}>Increase</button>
            <Home count={count} handlechilddata={handlechilddata}/>
        </div>
    )
}