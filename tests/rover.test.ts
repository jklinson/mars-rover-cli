import { Direction, Instruction } from "../src/types";
import { Rover } from "../src/rover";

describe("Rover Class", () => {
  test("Rover should initialize with valid upper-right coordinates and initial position", () => {
    expect(
      () =>
        new Rover({ x: 5, y: 5 }, { x: 1, y: 2, direction: Direction.NORTH })
    ).not.toThrow();
  });

  test("Rover should process instructions correctly", () => {
    const rover = new Rover(
      { x: 5, y: 5 },
      { x: 1, y: 2, direction: Direction.NORTH }
    );
    let instructions: Instruction[] = [
      "L",
      "M",
      "L",
      "M",
      "L",
      "M",
      "L",
      "M",
      "M",
    ].map((char) => ({ type: char as "L" | "R" | "M" }));
    rover.processInstructions(instructions);
    expect(rover.getCurrentPosition()).toBe("1 3 N");
  });
});
