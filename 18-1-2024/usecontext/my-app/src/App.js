// import { createContext, useContext, useState } from 'react';

import { createContext } from "react"

// const ThemeContext = createContext(null);

// export default function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider value={theme}>
//       <Form />
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => {
//             setTheme(e.target.checked ? 'dark' : 'light')
//           }}
//         />
//         Use dark mode
//       </label>
//     </ThemeContext.Provider>
//   )
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }


// import { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext('light');

// export default function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <Form />
//       </ThemeContext.Provider>
//       <Button onClick={() => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//       }}>
//         Toggle theme
//       </Button>
//     </>
//   )
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }
import { Home } from "./Home";

export const User=createContext()
const App=()=>{
  return(
    <>
        <User.Provider value='hi'>
            <Home/>
        </User.Provider>
    </>
  )
}
export default App
