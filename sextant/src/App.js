import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddrComp from './AddrComp';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner bannerText='Sextant' />
        <Exhibit name='IPv4 Address'>
          <AddrComp v4={true} />
        </Exhibit>
        <Exhibit name='IPv6 Address'>
          <AddrComp v4={false} />
        </Exhibit>
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
