import { gql } from "apollo-boost";

const betQuery = gql`
  {
    bets {
      id
      event 
      user_id *foreign_key?
      on: Action[] | [],
      against: Action[] | [],
      visibility: Visbility,
      createdOn
    }
  }
`;



export const CREATE_BET = gql`
  mutation createBet($title: String!, $body: String!) {
    createBet(options: { title: $title, body: $body }) {
      id
      title
      body
      createdOn
    
    }
  }
`;
export const DELETE_BET = gql`
mutation deleteBet($id: String!) {
  deleteBet(id: $id)
}
`



/*
mutation{
  createBet(
    options: {
      title:"DEONTAY WILDER GOES THANOS ON FURY",
      body: "FightHype.com was on hand in Los Angeles, California where undefeated heavyweight champions Deontay Wilder and Tyson Fury held the kick-off press conference to officially announce their highly-anticipated February 22 rematch. You don't want to miss what those in attendance had to say. Check it out!"
      }
  ) {
    id
    title
    body
    createdOn
    user{
      id
    }
    
  }
}

*/
