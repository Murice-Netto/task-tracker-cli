import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/Task.service.ts";

export const addTask: Command = {
  name: "add",
  description: "",
  exec: (args: string[], service: TaskService) => {
    if (args.length < 1) throw new Error("Missing task description.");
    const description = args[0];
    service.createTask(description);
    console.log("Task created!");
  },
};
