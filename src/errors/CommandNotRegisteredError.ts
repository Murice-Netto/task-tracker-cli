export class CommandNotRegisteredError extends Error {
  public constructor(message: string = "Command is not registered.") {
    super(message);
  }
}
