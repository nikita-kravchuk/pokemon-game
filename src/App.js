import React from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from "./app.module.css";
import cn from "classnames";
import ContactPage from "./routes/Contact/ContactPage";
import AboutPage from "./routes/About/AboutPage";

const App = () => {
  const match = useRouteMatch("/");
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 page not found!</h1>} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage}/>
              <Route render={()=>(
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>

      
    </Switch>
  );
};

export default App;
