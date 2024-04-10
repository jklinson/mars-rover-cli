import {
  validateCoordinates,
  validateInstructions,
  validatePosition,
} from "../src/utils";

describe("Validation Functions", () => {
  test("validateCoordinates should validate valid coordinates", () => {
    expect(() => validateCoordinates("5 5")).not.toThrow();
  });

  test("validateCoordinates should throw error for invalid coordinates", () => {
    expect(() => validateCoordinates("5 x")).toThrow();
  });

  test("validateInstructions should validate valid instructions", () => {
    expect(() => validateInstructions("LMLMLMLMM")).not.toThrow();
  });

  test("validateInstructions should throw error for invalid instructions", () => {
    expect(() => validateInstructions("LMLMXYZ")).toThrow();
  });

  test("validatePosition should validate valid position", () => {
    expect(() => validatePosition("1 2 N")).not.toThrow();
  });

  test("validatePosition should throw error for invalid position", () => {
    expect(() => validatePosition("1 2 X")).toThrow();
  });
});
