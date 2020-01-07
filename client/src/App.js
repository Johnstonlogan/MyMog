import React from "react";
import { SignUp_Form as SignUpForm } from "./SignUp/SignUp_Form";
import { TopNav } from "./TopNav/TopNav";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <Switch>
        <Route path="/sign-up">
          <SignUpForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
