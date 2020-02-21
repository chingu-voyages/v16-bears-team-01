import { gql } from "apollo-boost";

//TODO

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
