import React from "react";
import Data from "./Data.json";
import {Button} from "./Button";

export const Home=()=>{
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
              <div className="size">{datas.size}</div>
              <Button/>

              </div>

              </>
            )
          })
        }</div>
            </>
            )

}
// import React from 'react';
// import jsonData from './Data.json';
// import { Link } from 'react-router-dom';
// import {Cart} from './Cart';

// export const Home = (prop) => {
//   const data = jsonData;

//   const filteredData = prop.sdata == null ? data : data.filter((item) => { return item.sizes === prop.sdata });
//   return (
//     <>
//       <div>
//         {
//           filteredData.map((datas, index) => (
//             <>
//               <div className='jdata' key={index}>
//                 <p className='image'><img src={datas.images} alt='' /></p>
//                 <p className='productname'>{datas.name}</p>
//                 <p className='prize'>{datas.prize}</p>
//                 <p>{datas.sizes}</p>

//                 <p >

//                   <Link to="/cart" className='btn'> {datas.bttn}</Link>

//                 </p>
//               </div>
//             </>
//           ))
//         }
//       </div>
//     </>
//   )
// }