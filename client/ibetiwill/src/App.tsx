import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderSection from "./components/Site/Header";
import { Bets } from "./components/Bet/Bets";
 
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
  //uri: "http://boiling-stream-06582.herokuapp.com/graphql"
});

const App = () => {
  //TODO: exchange props, respectively State in App with following:
  return (
    <>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Bets} />
       </Switch>
     </ApolloProvider>
     <footer>
       <p>coded by chingu Bears 01</p>
     </footer>
   </>
  );
};

export default App;
