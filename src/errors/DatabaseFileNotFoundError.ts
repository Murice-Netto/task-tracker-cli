export class DatabaseFileNotFoundError extends Error {
  public constructor(message: string = "Database file not found.") {
    super(message);
  }
}
