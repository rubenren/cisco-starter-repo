import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner bannerText='Sextant' />
        <Exhibit name='I am an Exhibit'></Exhibit>
        <Exhibit name='Second Exhibit test'></Exhibit>
        <Exhibit name='Final exhibit test' />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
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

export default App;
