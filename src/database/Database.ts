import { Task } from "../entities/Task.ts";

export type DatabaseData = {
  tasks: Task[];
};

export interface Database {
  update(data: DatabaseData): Promise<void>;
  getData(): Promise<DatabaseData>;
}
