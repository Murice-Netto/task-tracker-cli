export function center(width: number, text: string): void {
  console.log(
    "-".repeat((width - text.length) / 2) + text +
      "-".repeat((width - text.length) / 2),
  );
}
