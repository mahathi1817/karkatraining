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


import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
