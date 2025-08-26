export class TaskNotFoundError extends Error {
  public constructor(message: string = "Task not found.") {
    super(message);
  }
}
