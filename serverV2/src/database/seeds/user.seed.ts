// import { Factory, Seeder } from 'typeorm-seeding';
// import { Connection } from 'typeorm';
// import { User } from '../../entity/User';
// import * as bcrypt from 'bcryptjs';

// export default class CreateUsers implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     await connection
//       .createQueryBuilder()
//       .insert()
//       .into(User)
//       .values([
//         {
//           firstName: 'Timber',
//           lastName: 'Saw',
//           email: 'test@test2.io',
//           password: await bcrypt.hash('password', 1)
//         }
//       ])
//       .execute();
//   }
// }

import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../entity/User';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)().seedMany(10);
  }
}
