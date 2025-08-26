import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/Task.service.ts";

export const updateTask: Command = {
  name: "update",
  description: "",
  exec: (args: string[], service: TaskService) => {
    if (args.length < 1) throw new Error("Missing task id.");
    if (args.length < 2) throw new Error("Missing task description.");
    const id = Number(args[0]);
    const description = args[1];
    service.updateTask(id, description);
    console.log("Task updated!");
  },
};
