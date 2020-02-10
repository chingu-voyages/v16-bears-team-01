import { Resolver, Query, InputType, Field, Mutation, Arg } from "type-graphql";
//import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Task } from "../entity/Task";

@InputType()
class TaskInput {
  @Field()
  title: string;
/*
  @Field()
  details: string;
  */

  @Field()
  task_start_date: string;

  @Field()
  task_end_date: string;

  //@Field()
  //status: EnumValueNode;
}

@Resolver()
export class TaskResolver {
  @Mutation(() => Task)
  async createTask(@Arg("options", () => TaskInput) options: TaskInput) {
    const task_entry = await Task.create(options).save();
    return task_entry;
  }

  //tasks resolver for getting a listing of all tasks
  //TODO: add query parameter to scode taks result to that of current user
  // or maybe keep all to serve as admin interface
  @Query(() => [Task])
  tasks() {
    return Task.find();
  }
}
