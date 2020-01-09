import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <Container>
        <Switch>
          <Route path="/sign-up">
            <SignUpForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
