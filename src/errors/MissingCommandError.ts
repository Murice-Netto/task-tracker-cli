export class MissingCommandError extends Error {
  public constructor(message: string = "Missing command.") {
    super(message);
  }
}
