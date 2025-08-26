import { Task } from "../entities/Task.ts";
import { DatabaseData, JsonDatabase } from "../utils/Database.ts";

export class TaskService {
  constructor(private db: JsonDatabase) {}

  public createTask(description: string): void {
    const newData: DatabaseData = this.db.data;
    const task: Task = new Task(description);
    newData.tasks.push(task);
    this.db.update(newData);
  }
}
