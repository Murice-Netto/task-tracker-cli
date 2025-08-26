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

  public updateTask(id: number, description: string): void {
    const newData: DatabaseData = this.db.data;
    const taskFound = newData.tasks.find((task) => task.id === id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.description = description;
    this.db.update(newData);
  }
}
