import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInput {
  /*
  @Field()
  first_name: string

  @Field()
  last_name: string
*/
  @Field()
  email: string;

  @Field()
  password: string;
}
