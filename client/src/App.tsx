import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Bets } from "./components/Bet/Bets";
 
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
  //uri: "http://boiling-stream-06582.herokuapp.com/graphql"
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Bets} />
       </Switch>
     </ApolloProvider>
   </>
  );
};

export default App;
