import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign-up">
        <SignUpForm />
      </Route>

      <div>
        <header>
          <LogoBar />
        </header>

        <Container>
          <div className="App">
            <TopNav />
          </div>
        </Container>
      </div>
    </Switch>
  );
}

export default App;
