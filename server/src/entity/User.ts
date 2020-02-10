import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, CreateDateColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  //
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  //
  @Field()
  @Column("varchar", { name:"first_name", nullable: false, length: 32 })
  first_name!: string
  //
  @Field()
  @Column("varchar", { name:"last_name", nullable: false, length: 32 })
  last_name!: string

  //
  @Field()
  @Column({ unique: true })
  @Column("varchar", { length: 32 }, )
  email!: string;

  //
  @Column("varchar",{
    name:"password",
    nullable: false,
    length: 30
  })
  password: string;

  //
  @OneToMany(_type => Task, task => task.user)
  tasks: Task[]

  //
  @Field()
  @CreateDateColumn()
  createdOn: string
}
