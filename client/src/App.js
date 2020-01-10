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
    <div>
      <header>
        <LogoBar />
      </header>

      <Container>
        <div className="App">
          <TopNav />
          <Switch>
            <Route path="/sign-up">
              <SignUpForm />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;
