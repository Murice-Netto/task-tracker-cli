import { Command, CommandHandler } from "../entities/Command.ts";
import { InvalidDataError } from "../errors/InvalidDataError.ts";
import { MissingTaskPropertyError } from "../errors/MissingTaskPropertyError.ts";
import { TaskService } from "../service/TaskService.ts";

const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  if (args.length < 1) throw new MissingTaskPropertyError("Missing task id.");
  if (args.length < 2) {
    throw new MissingTaskPropertyError("Missing task description.");
  }
  const id = Number(args[0]);
  if (isNaN(id)) throw new InvalidDataError("Id must be a number.");
  const description = args[1];
  await service.update(id, description);
  console.log("✅ Task updated!");
};

export const updateTaskCMD: Command = {
  name: "update",
  description: "updates a task description",
  example: "task-tracker update [ID] [DESCRIPTION]",
  exec: handler,
};
