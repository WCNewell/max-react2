import React, { Component } from 'react';
import { BrowserRouter }from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <BrowserRouter basename='/my-app'> */}
      {/* ^^When serving app from a subdirectory be sure to set basename */}
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
