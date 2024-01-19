import React ,{useRef} from 'react';

export const Count=()=>{
    const Count=useRef(0)
    const handleClick=()=>{
        Count.current=Count.current+1
        console.log(Count.current)
    }
    return(
        <>
            <button onClick={handleClick} >Click Me</button>
        </>
    )
}
