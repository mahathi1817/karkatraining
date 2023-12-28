import './App.css';
// import { useState } from 'react';

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }        //rendering

// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img 
//         src="https://i.imgur.com/yXOvdOSs.jpg" 
//         alt="Hedy Lamarr" 
//         className="photo" 
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   )};      //writing markup with jsx

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// import Avatar from './Avatar.js';

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }        //passing props to a comment

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = (
//       <del>
//         {name + "✔"}
//       </del>
//     );
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }        //conditional rendering

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
