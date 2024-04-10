import { Position, Direction, Instruction } from "../types";

export function validateCoordinates(input: string): Position {
  const [x, y] = input.trim().split(" ");
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);
  if (isNaN(parsedX) || isNaN(parsedY)) {
    throw new Error("Invalid coordinates. Please enter valid integers.");
  }
  return { x: parsedX, y: parsedY };
}

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
