import React from 'react'
import { Parent } from './Parent'

export const Home = (props:{count:number,handlechilddata:Function}) => {
    const name = "prasad"
    
  return (
    <div>
        {props.count}
        <button onClick={()=>props.handlechilddata(name)}>Child btn</button>
    </div>
  )
}
