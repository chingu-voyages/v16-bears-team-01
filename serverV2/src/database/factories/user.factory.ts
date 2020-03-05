//import faker as faker from 'faker';
import * as Faker from 'faker';

import { define } from 'typeorm-seeding';
import { User } from '../../entity/User';
//import * as bcrypt from 'bcryptjs';

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const email = faker.internet.email(firstName, lastName);

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = 'password';
  return user;
});
