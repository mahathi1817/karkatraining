import React from "react";
import Data from "./Data.json";
// import {Button} from "./Button";

export const Buy=()=>{
    return(
            <>
             <div>{
          Data.map(datas => {

            return(
              <>
              <div className="product">
              <div key={datas.id}></div>
              <div ><img className="img" src={datas.img} alt ="" width="250px"  height="200px" /></div>
              <div className="name" style={{background : "#fff"}}>{datas.text}</div>
              <div className="price">{datas.price}</div><br/>
              
              {/* <Button/> */}

              </div>

              </>
            )
          })
        }</div>
            </>
            )

}