import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import ContactPage from "./routes/Contact/ContactPage";
import AboutPage from "./routes/About/AboutPage";

import { FireBaseContext } from "./data/firebaseContext";

import s from "./app.module.css";
import cn from "classnames";

import FirebaseClass from "./data/database";

const App = () => {
  const location = useLocation();
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  return (
    <FireBaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" render={() => <h1>404 page not found!</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
};

export default App;
