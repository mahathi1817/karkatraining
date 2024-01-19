// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }


// import { useRef } from "react";
// import { Count } from "./Count";

// export default function CatFriends(){
//   const firstcatref  = useRef(null);
//   const secondcatref = useRef(null);
//   const thirdcatref  = useRef(null);

//   function handleScrollToFirstCat(){
//     firstcatref.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     })
//   }
//   function handleScrollToSecondCat(){
//     secondcatref.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     })
//   }
//   function handleScrollToThirdCat(){
//     thirdcatref.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     })
//   }
//   return (
//     <>
//       <nav>
//         <button onClick={handleScrollToFirstCat}>
//           Tom
//         </button>
//         <button onClick={handleScrollToSecondCat}>
//           Maru
//         </button>
//         <button onClick={handleScrollToThirdCat}>
//           Jellylorum
//         </button>
//       </nav>
//       <div>
//         <ul>
//           <li>
//             <img
//               src="https://placekitten.com/g/200/200"
//               alt="Tom"
//               ref={firstcatref}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/300/200"
//               alt="Maru"
//               ref={secondcatref}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placekitten.com/g/250/200"
//               alt="Jellylorum"
//               ref={thirdcatref}
//             />
//           </li>
//         </ul>
//         <Count/>
//       </div>
//     </>
//   );
// }


// import { forwardRef, useRef } from 'react';

// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }


// 


import React, { useState, useRef } from 'react';

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          if (ref.current) {
            ref.current.remove();
          }
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
