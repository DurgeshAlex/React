import React from "react";
import HomeComponent from "./component/home";
import NavbarComponent from "./component/navbar";
import AboutUsComponent from "./component/aboutus";
import ContactUsComponent from "./component/contactus";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFoundComponent from "./component/404";

function App() {
  const routing = (
    <Router>
      <NavbarComponent />
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route path="/about-us" component={AboutUsComponent} />
        <Route path="/contact-us" component={ContactUsComponent} />

        <Route path="*" component={PageNotFoundComponent} />
      </div>
    </Router>
  );
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12">{routing}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
