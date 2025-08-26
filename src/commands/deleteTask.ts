import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/Task.service.ts";

export const deleteTask: Command = {
  name: "delete",
  description: "",
  exec: (args: string[], service: TaskService) => {
    if (args.length < 1) throw new Error("Missing task id.");
    const id = Number(args[0]);
    service.delete(id);
    console.log("Task deleted!");
  },
};
