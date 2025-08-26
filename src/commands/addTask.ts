import { Command, CommandHandler } from "../entities/Command.ts";
import { TaskService } from "../service/TaskService.ts";

const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  if (args.length < 1) throw new Error("Missing task description.");
  const description = args[0];
  await service.create(description);
  console.log("Task created!");
};

export const addTask: Command = {
  name: "add",
  description: "",
  exec: handler,
};
