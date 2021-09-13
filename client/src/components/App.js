import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import Layout from "./Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
