import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { Message, Loader } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import { checkToken } from "./services/checkToken";
import { ClassGuideArray } from "./resources/ClassGuideArray";
import { authUser } from "./resources/userContext";
import { getBluePosts } from "./services/bluePosts";
import { Transmogs } from "./components/Transmogs";
import { FeedbackForm } from "./components/FeedbackForm";
import "./App.css";
import { HomePage } from "./components/HomePage";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: "",
    blues: [],
    currentUser: {},
    guides: [],
  };
  setError = (err) => {
    this.setState({ error: true, errorMessage: err.data });
  };
  handleDismiss = () => {
    this.setState({ error: false });
  };
  setCurrentUser = (user) => {
    this.setState({ currentUser: user });
  };

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  async componentDidMount() {
    let blueArray = [];
    this.setState({ guides: ClassGuideArray });

    await getBluePosts().then((res) => {
      for (let i = 0; i < 5; i++) {
        blueArray.push({ title: res[i].title, id: res[i].id });
      }
      this.setState({ blues: blueArray });
    });

    checkToken().then((res) => {
      if (res === false) {
        localStorage.removeItem("uId");
        localStorage.removeItem("loggedIn");
      } else {
        this.setCurrentUser(res);
      }
    });
  }

  render() {
    if (this.state.blues.length === 0)
      return (
        <div className="loader-container">
          <div className="loader">
            <Loader active inline="centered" size="massive" />
          </div>
        </div>
      );
    else
      return (
        // Switch starts -  all imported components

        <Switch>
          {/* Redirect to /home on page load */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/login">
            <Login handleError={this.setError} setUser={this.setCurrentUser} />
          </Route>
          <Route exact path="/feedback">
            <FeedbackForm />
          </Route>
          {/* Top error message, checks for error message in state if false will return null*/}
          <Route exact path="/sign-up">
            {this.state.error ? (
              <Message
                className="error-message"
                header="Sorry there seems to be an error: "
                content={this.state.errorMessage}
                onDismiss={this.handleDismiss}
              />
            ) : null}

            {/* sign up form - passed error handling function  */}
            <SignUpForm handleError={this.setError} />
          </Route>

          <React.Fragment>
            <header>
              <authUser.Provider value={this.state.currentUser.username}>
                <LogoBar setUser={this.setCurrentUser} />
              </authUser.Provider>
            </header>

            {/* <TopNav /> */}
            <div className="App">
              {/* passed blue posts array from mmo-champion */}
              {/* passed guides array for front page mapping */}
              <Route exact path="/home">
                <HomePage blues={this.state.blues} guides={this.state.guides} />
              </Route>
              <Route exact path="/transmogs">
                <Transmogs />
              </Route>
            </div>
          </React.Fragment>
        </Switch>
      );
  }
}

export { App };
