import { TaskService } from "../service/Task.service.ts";

export type Command = {
  name: string;
  exec: (args: string[], service: TaskService) => void;
  description: string;
};
