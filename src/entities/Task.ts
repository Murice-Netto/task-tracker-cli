import { TaskStatus } from "./TaskStatus.ts";

export type Task = {
  id: number;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt?: Date;
};
