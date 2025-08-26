import { MissingTaskPropertyError } from "../errors/MissingTaskPropertyError.ts";
import { InvalidDataError } from "../errors/InvalidDataError.ts";

import { Command, CommandHandler } from "../entities/Command.ts";
import { TaskService } from "../service/TaskService.ts";

const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  if (args.length < 1) {
    throw new MissingTaskPropertyError("Missing task description.");
  }
  const description = args[0];
  if (description === "") {
    throw new InvalidDataError("Task description cannot be empty.");
  }
  await service.create(description);
  console.log("✅ Task created!");
};

export const addTaskCMD: Command = {
  name: "add",
  description: "adds a new task to the database",
  example: "task-tracker add '[TASK-DESCRIPTION]'",
  exec: handler,
};
