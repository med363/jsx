import React from "react";
import "./style.css";
import image1 from './logo512.png'
function app(){
	return(
		<div style={{border:'solid 1px black', maxWidth:"100vw"}}>
      <div className="title-container">
			  <h1 className="title-red">My title</h1>
      </div>
			<img src={image1} />
			<img src="/logo192.png" />

		</div>
)
}
export default app ;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Med amin</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
