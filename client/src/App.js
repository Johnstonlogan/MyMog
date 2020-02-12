import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container, Message, Loader } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import { getBluePosts } from "./server";
import { RecentBar } from "./components/RecentBar";
import "./App.css";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: "",
    blues: []
  };
  setError = err => {
    this.setState({ error: true, errorMessage: err.data });
  };
  handleDismiss = () => {
    this.setState({ error: false });
  };
  async componentDidMount() {
    await getBluePosts().then(res => {
      for (let i = 0; i < 5; i++) {
        console.log(res[2].title);
        this.state.blues.push({ title: res[i].title, id: res[i].id });
      }
    });
    this.forceUpdate();
  }

  render() {
    if (!this.state.blues.length)
      return (
        <div className="loader-container">
          <div className="loader">
            <Loader active inline="centered" size="massive" />
          </div>
        </div>
      );

    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
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

        <React.Fragment>
          <header>
            <LogoBar />
          </header>

          <Container>
            <TopNav />
            <div className="App">
              <Route exact path="/home">
                <RecentBar blueArray={this.state.blues} />
              </Route>
            </div>
          </Container>
        </React.Fragment>
        <Redirect exact from="/" to="/home" />
      </Switch>
    );
  }
}

export { App };
