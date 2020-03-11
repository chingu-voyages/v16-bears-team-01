import { gql } from "apollo-boost";

export const REGISTER_USER = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $confirmpassword:String!
  ) {
    register(
      data: {
        firstName: $firstName
        lastName: $lastName 
        email: $email
        password: $confirmpassword
      }) {
        id
        firstName
        lastName
        email
    }
  }
`;
