import { Task } from "../entities/Task.ts";
import { Database, DatabaseData } from "../utils/Database.ts";

export class TaskService {
  constructor(private db: Database) {}

  public createTask(description: string): void {
    const newData: DatabaseData = this.db.data;
    const task: Task = {
      id: this.db.lastInsertedId + 1,
      createdAt: new Date(),
      description,
      status: "a",
    };
    task.id = this.db.lastInsertedId + 1;
    newData.tasks.push(task);
    this.db.update(newData);
  }

  public updateTask(id: number, description: string): void {
    const taskFound = this.getTaskById(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.description = description;
    this.db.update(this.db.data);
  }

  public deleteTask(id: number): void {
    const newData: DatabaseData = this.db.data;
    if (!this.getTaskById(id)) throw new Error("Task not found.");
    newData.tasks = newData.tasks.filter((task) => task.id !== id);
    this.db.update(newData);
  }

  public udpateTaskStatus(id: number, status: string): void {
    const newData: DatabaseData = this.db.data;
    const taskFound = this.getTaskById(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.status = status;
    this.db.update(newData);
  }

  public getAllTasks(status?: string): Task[] {
    if (status) {
      return this.db.data.tasks.filter((task) => task.status === status);
    }
    return this.db.data.tasks;
  }

  public getTaskById(id: number): Task | undefined {
    return this.db.data.tasks.find((task) => task.id === id);
  }
}
