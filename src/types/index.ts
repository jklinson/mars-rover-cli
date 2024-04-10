export enum Direction {
  NORTH = "N",
  EAST = "E",
  SOUTH = "S",
  WEST = "W",
}

export interface Position {
  x: number;
  y: number;
  direction?: Direction;
}

export interface Instruction {
  type: "L" | "R" | "M";
}
