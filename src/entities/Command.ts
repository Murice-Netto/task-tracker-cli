export type Command = {
  name: string;
  exec: (args: string[]) => void;
  description: string;
};
