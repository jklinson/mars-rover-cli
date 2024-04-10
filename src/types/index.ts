/* This code snippet is defining an enum called `Direction` in TypeScript. Enums in TypeScript allow
you to define a set of named constants. In this case, the `Direction` enum has four members:
`NORTH`, `EAST`, `SOUTH`, and `WEST`, each associated with a specific string value: "N", "E", "S",
and "W" respectively. */
export enum Direction {
  NORTH = "N",
  EAST = "E",
  SOUTH = "S",
  WEST = "W",
}

/* The `export interface Position` is defining a TypeScript interface named `Position`. An interface in
TypeScript is a way to define the structure of an object. In this case, the `Position` interface has
three properties: */
export interface Position {
  x: number;
  y: number;
  direction?: Direction;
}

/* This code snippet is defining an interface named `Instruction` in TypeScript. The `Instruction`
interface has a single property `type` which is a string literal type union `"L" | "R" | "M"`. */
export interface Instruction {
  type: "L" | "R" | "M";
}
