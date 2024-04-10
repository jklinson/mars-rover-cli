import { Position, Direction, Instruction } from "../types";

export class Rover {
  plateauUpperRight: Position;
  currentPosition: Position;

  /**
   * This TypeScript constructor initializes a rover's plateau upper right position and initial
   * position.
   * @param {Position} plateauUpperRight - The `plateauUpperRight` parameter represents the position of
   * the upper-right corner of the plateau or grid. It defines the boundaries of the area where the
   * rover can move.
   * @param {Position} initialPosition - The `initialPosition` parameter represents the starting
   * position of a rover on a plateau. It typically consists of the x and y coordinates where the rover
   * is placed initially.
   */
  constructor(plateauUpperRight: Position, initialPosition: Position) {
    this.plateauUpperRight = plateauUpperRight;
    this.currentPosition = initialPosition;
  }

  /**
   * The function `processInstructions` iterates through an array of instructions and performs
   * different actions based on the type of each instruction.
   * @param {Instruction[]} instructions - The `processInstructions` function takes an array of
   * `Instruction` objects as its parameter. Each `Instruction` object has a `type` property that can
   * be either "L", "R", or "M". The function iterates over each instruction in the array and performs
   * a specific action based on
   */
  processInstructions(instructions: Instruction[]): void {
    for (const instruction of instructions) {
      switch (instruction.type) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "M":
          this.moveForward();
          break;
      }
    }
  }

  /**
   * The function `turnLeft` rotates the current direction of an object 90 degrees to the left.
   */
  private turnLeft(): void {
    switch (this.currentPosition.direction) {
      case Direction.NORTH:
        this.currentPosition.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.currentPosition.direction = Direction.NORTH;
        break;
      case Direction.SOUTH:
        this.currentPosition.direction = Direction.EAST;
        break;
      case Direction.WEST:
        this.currentPosition.direction = Direction.SOUTH;
        break;
    }
  }

  /**
   * The `turnRight` function in TypeScript rotates the current direction to the right based on the
   * current direction of the object.
   */
  private turnRight(): void {
    switch (this.currentPosition.direction) {
      case Direction.NORTH:
        this.currentPosition.direction = Direction.EAST;
        break;
      case Direction.EAST:
        this.currentPosition.direction = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.currentPosition.direction = Direction.WEST;
        break;
      case Direction.WEST:
        this.currentPosition.direction = Direction.NORTH;
        break;
    }
  }

  /**
   * This function moves the current position forward based on the current direction within the
   * constraints of the plateau boundaries.
   */
  private moveForward(): void {
    switch (this.currentPosition.direction) {
      case Direction.NORTH:
        if (this.currentPosition.y < this.plateauUpperRight.y) {
          this.currentPosition.y++;
        }
        break;
      case Direction.EAST:
        if (this.currentPosition.x < this.plateauUpperRight.x) {
          this.currentPosition.x++;
        }
        break;
      case Direction.SOUTH:
        if (this.currentPosition.y > 0) {
          this.currentPosition.y--;
        }
        break;
      case Direction.WEST:
        if (this.currentPosition.x > 0) {
          this.currentPosition.x--;
        }
        break;
    }
  }

  /**
   * The `getCurrentPosition` function returns a string representing the current position with x and y
   * coordinates and direction.
   * @returns The `getCurrentPosition()` function is returning a string that contains the current
   * x-coordinate, y-coordinate, and direction of the currentPosition object.
   */
  getCurrentPosition(): string {
    return `${this.currentPosition.x} ${this.currentPosition.y} ${this.currentPosition.direction}`;
  }
}
