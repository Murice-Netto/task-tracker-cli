import { Task } from "../entities/Task.ts";
import { TaskStatus } from "../entities/TaskStatus.ts";
import { Database, DatabaseData } from "../utils/Database.ts";

export class TaskService {
  public constructor(private db: Database, private dbData: DatabaseData) {}

  public async create(description: string): Promise<void> {
    const nextID = this.dbData.tasks.length > 0
      ? this.dbData.tasks[this.dbData.tasks.length - 1].id + 1
      : 1;
    const task: Task = {
      id: nextID,
      createdAt: new Date(),
      description,
      status: TaskStatus.TODO,
    };
    this.dbData.tasks.push(task);
    await this.db.update(this.dbData);
  }

  public async update(id: number, description: string): Promise<void> {
    const taskFound = this.getByID(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.description = description;
    await this.db.update(this.dbData);
  }

  public async delete(id: number): Promise<void> {
    if (!this.getByID(id)) throw new Error("Task not found.");
    this.dbData.tasks = this.dbData.tasks.filter((task) => task.id !== id);
    await this.db.update(this.dbData);
  }

  public async updateStatus(id: number, status: TaskStatus): Promise<void> {
    const taskFound = this.getByID(id);
    if (!taskFound) throw new Error("Task not found.");
    taskFound.status = status;
    await this.db.update(this.dbData);
  }

  public getAll(status?: TaskStatus): Task[] {
    if (status) {
      return this.dbData.tasks.filter((task) => task.status === status);
    }
    return this.dbData.tasks;
  }

  public getByID(id: number): Task | undefined {
    return this.dbData.tasks.find((task) => task.id === id);
  }
}
