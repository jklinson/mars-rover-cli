import { Position, Direction, Instruction } from "../types";

export class Rover {
  plateauUpperRight: Position;
  currentPosition: Position;

  constructor(plateauUpperRight: Position, initialPosition: Position) {
    this.plateauUpperRight = plateauUpperRight;
    this.currentPosition = initialPosition;
  }

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

  getCurrentPosition(): string {
    return `${this.currentPosition.x} ${this.currentPosition.y} ${this.currentPosition.direction}`;
  }
}
