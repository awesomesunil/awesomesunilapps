import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Image from './components/image/Image'

import "./App.css";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <div>
        <img
          src="https://tfcutulsisd90.tkrnt.tfcuintra.net/InternalDisclosureServer/SaveAbles/jpg"
          alt=""
        
        />
      </div>
      // <Provider>
      //   <Router>
      //     <React.Fragment>
      //       <Navbar />
      //       <div className="container">
      //         <Switch>
      //           <Route exact path="/" component={Index} />
      //           <Route exact path="/lyrics/track/:id" component={Lyrics} />
      //         </Switch>
      //       </div>
      //     </React.Fragment>
      //   </Router>
      // </Provider>
    );
  }
}

export default App;
