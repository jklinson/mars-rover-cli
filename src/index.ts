import * as readline from "readline";
import { Instruction, Position } from "./types";
import { Rover } from "./rover";
import {
  handleError,
  validateCoordinates,
  validateInstructions,
  validatePosition,
} from "./utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startProgram() {
  rl.question(
    'Enter the upper-right coordinates of the plateau (e.g., "5 5"): ',
    (upperRightInput) => {
      let plateauUpperRight: Position;
      try {
        plateauUpperRight = validateCoordinates(upperRightInput);
      } catch (error: unknown) {
        handleError(error);
        rl.close();
        return;
      }

      rl.question(
        'Enter the current position of the Rover (e.g., "1 2 N"): ',
        (currentPositionInput) => {
          let initialPosition: Position;
          try {
            initialPosition = validatePosition(currentPositionInput);
          } catch (error: unknown) {
            handleError(error);
            rl.close();
            return;
          }

          rl.question(
            'Enter the directions to give to the rover (e.g., "LMLMLMLMM"): ',
            (instructionsInput) => {
              let instructions: Instruction[];
              try {
                instructions = validateInstructions(instructionsInput);
              } catch (error: unknown) {
                handleError(error);
                rl.close();
                return;
              }

              const rover = new Rover(plateauUpperRight, initialPosition);
              rover.processInstructions(instructions);
              console.log("Final Position:", rover.getCurrentPosition());

              rl.close();
            }
          );
        }
      );
    }
  );
}

startProgram();
