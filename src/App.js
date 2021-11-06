//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';



// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }
// class App extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           rowData: []
//       }
//       // this.state = {
//       //     rowData: [
//       //         {make: 'Toyota', model: 'Celica', price: 35000},
//       //         {make: 'Ford', model: 'Mondeo', price: 32000},
//       //         {make: 'Porsche', model: 'Boxter', price: 72000}
//       //     ]
//       // }
//   }

//   componentDidMount() {
//       fetch('https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles')
//           .then(result => result.json())
//           .then(rowData => this.setState({rowData}))
//   }

//   render() {
//       return (
//         //<img src={params.value} alt=\"Car Photo\" height={200} width={200}></img>
//           <div
//               className="ag-theme-balham"
//               style={{ height: '200px', width: '600px' }}
//           >
//               <AgGridReact rowData={this.state.rowData}>
//                   <AgGridColumn field="photo" cellRenderer={params => '<img src={params.value} alt="Car Photo" height={200} width={200}></img>' } />
//                   <AgGridColumn field="make"></AgGridColumn>
//                   <AgGridColumn field="model"></AgGridColumn>
//                   <AgGridColumn field="price" sortable={ true }></AgGridColumn>
//               </AgGridReact>
//           </div>
//       );
//   }
// }

import { CarDisplayGrid } from './CarDisplayGrid.js'

class App extends Component {
  render() {
    return (
      <CarDisplayGrid />
    );
  }
}

export default App;
