import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container, Message, Loader } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import { getBluePosts } from "./server";
import "./App.css";
import Mage from "./images/MageMog.jpg";
import Bert from "./images/BertPally.jpg";
import { HomePage } from "./components/HomePage";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: "",
    blues: [],
    guides: [
      {
        title: "Wowhead Deathknight Guide",
        image: Mage,
        link: "https://www.wowhead.com/death-knight-transmogrification-armor-sets-guide",
        content: "Deathgrip some outfits into your aresnal. Check out the guide on Wowhead!",
        class: "Deathknight"
      },
      {
        title: "Wowhead Druid Guide",
        image: null,
        link: "https://www.wowhead.com/druid-transmogrification-armor-sets-guide",
        content: "Shapeshift your way into some amazing transmogs. Check out the guide on Wowhead!",
        class: "Druid"
      },
      {
        title: "Wowhead Hunter Guide",
        image: null,
        link: null,
        content: "Trap some transmogs for yourself. Check out the guide on Wowhead!",
        class: "Hunter"
      },
      {
        title: "Wowhead Mage Guide",
        image: Mage,
        link: null,
        content: "Blink your way into the classiest clothes in Azeroth. Check out the guide on Wowhead!",
        class: "Mage"
      },
      {
        title: "Wowhead Monk Guide",
        image: null,
        link: null,
        content: "Roll your way into some nice pants. Check out the guide on Wowhead!",
        class: "Monk"
      },
      {
        title: "Wowhead Paladin Guide",
        image: Bert,
        link: null,
        content: "Bubble hearth your way into a nice pair of gauntlets. Check out the guide on Wowhead!",
        class: "Paladin"
      },
      {
        title: "Wowhead Priest Guide",
        image: null,
        link: null,
        content: "Cast Power Word: Transmog and find a nice robe. Check out the guide on Wowhead!",
        class: "Priest"
      },
      {
        title: "Wowhead Rogue Guide",
        image: null,
        link: "",
        content: "Sneak your way into some of the quietest boots. Check out the guide on Wowhead!",
        class: "Rogue"
      },
      {
        title: "Wowhead Shaman Guide",
        image: null,
        link: null,
        content: "Shock all your friends with your new outfit. Check out the guide on Wowhead!",
        class: "Shaman"
      },
      {
        title: "Wowhead Warlock Guide",
        image: null,
        link: null,
        content: "Summon the demon of captivating looks. Check out the guide on Wowhead!",
        class: "Warlock"
      },
      {
        title: "Wowhead Warrior Guide",
        image: null,
        link: null,
        content: "Charge your way into some impressive spauldrons. Check out the guide on Wowhead!",
        class: "Warrior"
      }
    ]
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
      // Switch starts -  all imported components
      <Switch>
        {/* Redirect to /home on page load */}
        <Redirect exact from="/" to="/home" />

        <Route exact path="/login">
          <Login />
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
            <LogoBar />
          </header>

          <Container>
            <TopNav />
            <div className="App">
              {/* passed blue posts array from mmo-champion */}
              <Route exact path="/home">
                <HomePage blues={this.state.blues} guides={this.state.guides} />
              </Route>
            </div>
          </Container>
        </React.Fragment>
      </Switch>
    );
  }
}

export { App };
