// import { useRef } from 'react';

import { useEffect } from "react"

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


// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }


// import { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
        // src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }


// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }


// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [isDark , setIsDark] =useState('false')
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//           <option value="dance">dance</option>
//         </select>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={e => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId}
//        theme={isDark ? 'dark' : 'light'} 
//       />
//     </>
//   );
// }

// const [count,setCount]=usestate(0)
// const [count1,setCount1]=usestate(0)

// useEffect(()=>{
//   return()=>{
//     console.log("execute")
//   }
// },[count]);

// return(
//   <>
//   <p>count:{count}</p>
//   <button onClick={()=>setCount (count+1)}></button>
//   </>
// );

import { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log('Effect is running');
    
    return () => {
      console.log('Cleanup function executed');
    };
  }, [count]);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}

export default ExampleComponent;
