import { Position, Direction, Instruction } from "../types";

/**
 * The function `validateCoordinates` parses and validates input coordinates as integers in TypeScript.
 * @param {string} input - The `validateCoordinates` function takes a string input representing
 * coordinates in the format "x y". It trims any leading or trailing whitespace, then splits the input
 * string by a space to extract the x and y values. It parses these values into integers and returns
 * them as a `Position` object with
 * @returns The function `validateCoordinates` returns an object of type `Position` with properties `x`
 * and `y`, which are parsed integers from the input string.
 */
export function validateCoordinates(input: string): Position {
  const [x, y] = input.trim().split(" ");
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);
  if (isNaN(parsedX) || isNaN(parsedY)) {
    throw new Error("Invalid coordinates. Please enter valid integers.");
  }
  return { x: parsedX, y: parsedY };
}

/**
 * The function `validatePosition` in TypeScript validates and parses a string input into a Position
 * object with coordinates and direction.
 * @param {string} input - The `validatePosition` function takes a string input representing a position
 * with coordinates (x, y) and a direction. The input is expected to be in the format "x y direction",
 * where x and y are integers representing the coordinates, and direction is a string representing the
 * direction (N, E
 * @returns The function `validatePosition` is returning an object of type `Position` with properties
 * `x`, `y`, and `direction`. The `x` and `y` properties are parsed integers from the input string, and
 * the `direction` property is a valid direction value (N, E, S, W) from the input string.
 */
export function validatePosition(input: string): Position {
  const [x, y, direction] = input.trim().split(" ");
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);
  if (
    isNaN(parsedX) ||
    isNaN(parsedY) ||
    !Object.values(Direction).includes(direction as Direction)
  ) {
    throw new Error(
      "Invalid position. Please enter valid coordinates and direction (N, E, S, W)."
    );
  }
  return { x: parsedX, y: parsedY, direction: direction as Direction };
}

/**
 * The function `validateInstructions` checks if the input string contains only valid instructions (L,
 * R, M) and returns an array of Instruction objects.
 * @param {string} input - The `validateInstructions` function takes a string input containing
 * instructions for a task. The input should only contain the characters 'L', 'R', and 'M' representing
 * left, right, and move actions respectively.
 * @returns The function `validateInstructions` returns an array of objects representing instructions.
 * Each object has a `type` property that can be either "L", "R", or "M" based on the input string
 * provided.
 */
export function validateInstructions(input: string): Instruction[] {
  const validInstructions = /^[LRM]+$/;
  if (!validInstructions.test(input.trim())) {
    throw new Error("Invalid instructions. Use only L, R, and M.");
  }
  return input
    .trim()
    .split("")
    .map((char) => ({ type: char as "L" | "R" | "M" }));
}

export function handleError(error: unknown) {
  // Handle the error
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An error occurred.");
  }
}
