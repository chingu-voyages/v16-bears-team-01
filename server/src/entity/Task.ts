import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from "typeorm";
//import { type } from "os";
import { User } from "./User";
import { Field, ObjectType } from "type-graphql";

export enum TaskStatus {
  COMPLETED = "completed",
  PENDING = "pending",
  CANCELLED = "canceled"
}

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Field()
  @Column("varchar", { unique: true })
  title: string;
  /*


  @Field()
  @Column("varchar", { length: 256 }, )
  details: string;
*/
  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.PENDING
  })
  status: string;

  @Field()
  @Column()
  task_start_date: string;

  @Field()
  @Column()
  task_end_date: string;

  @ManyToOne(
    _type => User,
    user => user.tasks
  )
  user: User;
}
