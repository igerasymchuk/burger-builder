import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );   
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Layout>
//         <p>Test</p>
//       </Layout>
//     </div>
//   );
// }

export default App;
