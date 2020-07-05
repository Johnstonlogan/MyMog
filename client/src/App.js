import React from "react";
import { SignUp_Form as SignUpForm } from "./Pages/SignUp_Form";
import { Login } from "./Pages/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { LogoBar } from "./FeatureComponents/TopNav/LogoBar";
import { checkToken } from "./services/checkToken";
import { ClassGuideArray } from "./resources/ClassGuideArray";
import { authUser } from "./resources/userContext";
import { getBluePosts } from "./services/bluePosts";
import { FeedbackForm } from "./Pages/FeedbackForm";
import { CreateTournament } from "./Pages/Tournament/CreateTournament";
import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: "",
    blues: [],
    currentUser: {},
    guides: [],
    width: window.innerWidth,
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
  updateWindowSize = () => {
    this.setState({ width: window.innerWidth });
  };

  async componentDidMount() {
    let blueArray = [];
    this.setState({ guides: ClassGuideArray });

    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
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
          {/* everything above class=App will take over whole page, not just content below the nav bar */}

          <Route exact path="/login">
            <Login handleError={this.setError} setUser={this.setCurrentUser} />
          </Route>

          <Route exact path="/feedback">
            <FeedbackForm />
          </Route>

          <Route exact path="/sign-up">
            <SignUpForm handleError={this.setError} />
          </Route>

          {/* nav bar */}
          <React.Fragment>
            <header>
              <authUser.Provider value={this.state.currentUser.username}>
                <LogoBar
                  setUser={this.setCurrentUser}
                  width={this.state.width}
                />
              </authUser.Provider>
            </header>

            <main className="App">
              <Route exact path="/home">
                <HomePage blues={this.state.blues} guides={this.state.guides} />
              </Route>
              <Route exact path="/create_tournament">
                <CreateTournament />
              </Route>
            </main>
          </React.Fragment>
        </Switch>
      );
  }
}

export { App };
