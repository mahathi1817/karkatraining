import React from "react";
export const Button=()=>{
    return(
        <button>Add to cart</button>
    )
}
// import React, { useState } from "react";
// import { Home } from "./Home";

// export const Button =()=>{
//     const [setSize, setValue] =useState(null);

//     let btn1 =()=>{
//         setValue("Xs")
//     }
//     let btn2 =()=>{
//         setValue("S")
//     }
//     let btn3 =()=>{
//         setValue("M")
//     }
//     let btn4 =()=>{
//         setValue("XS")
//     }
//     return(
//         <>
//             <div className="button">
                
                
//                 <div className="inline line">
//                 <h2>sizes</h2>
//                 <div className="bt1">
//                 <p><button onClick={btn1}>XS</button></p>
//                 <p><button onClick={btn2}>S</button></p>
//                 <p><button onClick={btn3}>M</button></p>
//                 <p><button onClick={btn4}>XS</button></p>
//                 </div>
//                 <div className="bt1">
//                 <p><button onClick={btn3}>L</button></p>
//                 <p><button onClick={btn3}>XL</button></p>
//                 <p><button onClick={btn3}>XXL</button></p>
//                 </div>
//                 </div>
//                 <div className="inline">
//                 <Home sdata={setSize}/>
//                 </div>
//             </div>
//         </>
//     )
// }