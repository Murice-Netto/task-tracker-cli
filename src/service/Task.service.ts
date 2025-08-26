import { Task } from "../entities/Task.ts";
import { TaskStatus } from "../entities/TaskStatus.ts";
import { Database, DatabaseData } from "../utils/Database.ts";

export class TaskService {
  constructor(private db: Database) {}

  public create(description: string): void {
    const newData: DatabaseData = this.db.getData;
    const task: Task = {
      id: this.db.getLastInsertedID + 1,
      createdAt: new Date(),
      description,
      status: TaskStatus.TODO,
    };
    task.id = this.db.getLastInsertedID + 1;
    newData.tasks.push(task);
    this.db.update(newData);
  }

  public update(id: number, description: string): void {
    const taskFound = this.getByID(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.description = description;
    this.db.update(this.db.getData);
  }

  public delete(id: number): void {
    const newData: DatabaseData = this.db.getData;
    if (!this.getByID(id)) throw new Error("Task not found.");
    newData.tasks = newData.tasks.filter((task) => task.id !== id);
    this.db.update(newData);
  }

  public updateStatus(id: number, status: TaskStatus): void {
    const newData: DatabaseData = this.db.getData;
    const taskFound = this.getByID(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.status = status;
    this.db.update(newData);
  }

  public getAll(status?: string): Task[] {
    if (status) {
      return this.db.getData.tasks.filter((task) => task.status === status);
    }
    return this.db.getData.tasks;
  }

  public getByID(id: number): Task | undefined {
    return this.db.getData.tasks.find((task) => task.id === id);
  }
}
