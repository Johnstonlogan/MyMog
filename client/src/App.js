import React from "react";
import { SignUp_Form as SignUpForm } from "./components/SignUp_Form";
import { Login } from "./components/Login";
import { TopNav } from "./components/TopNav";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container, Message, Loader } from "semantic-ui-react";
import { LogoBar } from "./components/LogoBar";
import { getBluePosts, checkToken } from "./server";
import {ClassGuideArray} from "./resources/ClassGuideArray"
import "./App.css";

import { HomePage } from "./components/HomePage";

class App extends React.Component {
  state = {
    error: false,
    errorMessage: "",
    blues: [],
    currentUser: {},
    guides:[]
  };
  setError = err => {
    this.setState({ error: true, errorMessage: err.data });
  };
  handleDismiss = () => {
    this.setState({ error: false });
  };
  setCurrentUser = (user) =>{
    this.setState({currentUser: user})
    
  }
  isEmpty = (obj) =>{
    for(var key in obj){
      if(obj.hasOwnProperty(key))
      return false
    }
    return true

  }

 
  async componentDidMount() {
    let blueArray = [];
    this.setState({guides:ClassGuideArray})
    
    await getBluePosts().then(res => {
     
      for (let i = 0; i < 5; i++) {
       blueArray.push({ title: res[i].title, id: res[i].id });
      }
      this.setState({blues: blueArray})
    });
   
    
    checkToken();
    
  }

  render() {
    
    if(!this.state.blues)
      return (
        
        <div className="loader-container">
          <div className="loader">
            <Loader active inline="centered" size="massive" />
          </div>
        </div>
       
      );

  // else if(this.isEmpty(this.state.currentUser)){
  //  return <Login handleError={this.setError} setUser={this.setCurrentUser} />
  // }
      
     
else
    return (
      // Switch starts -  all imported components
      
      <Switch>
        {/* Redirect to /home on page load */}
        <Redirect exact from="/" to="/home" />

        <Route exact path="/login">
          <Login handleError={this.setError} setUser={this.setCurrentUser} />
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
              {/* passed guides array for front page mapping */}
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

export { App }

