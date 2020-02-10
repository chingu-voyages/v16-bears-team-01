import { Query, Arg, Resolver, UseMiddleware } from "type-graphql";
import { User } from "../entity/User";
import { isAuth } from "../middleware/isAuth";


@Resolver()
export class UserResolver {
  @Query(() => [User])
  //@UseMiddleware(isAuth)  
  users() {
    return User.find();
  }

  @Query(() => User)
  @UseMiddleware(isAuth)  
  user(@Arg("id", () => String) id: string) {
    return User.findOne(id);
  }

 }


/*
GET AL USER S
query {
  users {
    id
    email
    createdOn
  }
}


GET A USER
query {
  user(id: "968d70da-870a-4b4f-8ca2-976d6acb3533") {
    id
    email
  }
}

REGISTER USER
mutation {
  register(input: { email: "jojo@gmail.com", password: "jojo" }) {
    user {
      id
      email
    }
    errors {
      path
      message
    }
  }
}

*/