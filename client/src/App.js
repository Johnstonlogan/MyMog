import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import { getBluePosts } from "./server";
import "./App.css";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: ""
  };
  setError = err => {
    console.log(err, "error");
    this.setState({ error: true, errorMessage: err.data });
  };
  handleDismiss = () => {
    this.setState({ error: false });
  };
  componentDidMount() {
    getBluePosts();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          {this.state.error ? (
            <Message
              className="error-message"
              header="Sorry there seems to be an error: "
              content={this.state.errorMessage}
              onDismiss={this.handleDismiss}
            />
          ) : null}
          <SignUpForm handleError={this.setError} />
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
}

export default App;
