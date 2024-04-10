# Notes

## Mars Rover CLI Application

This is a Command Line Interface (CLI) application for controlling a robotic rover on Mars. The rover is able to navigate a rectangular plateau and follow a set of instructions to move and turn.

### Installation

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/jklinson/mars-rover-cli.git
```

Navigate to the project directory:

```bash
cd mars-rover-cli
```

Install dependencies using npm:

```bash
npm install
```

### Usage

Running the Application
To run the Mars Rover CLI application, use the following command:

```bash
npm start
```

### Running Tests

To run the Jest test suite for the application, use the following command:

```bash
npm test
```

### Project Structure

The project is structured as follows:

```bash
mars-rover-cli/
├── src/                # Source code directory
│   ├── types           # Type definitions, including enums and interfaces
│   ├── utils           # Validation functions for input data
│   ├── rover           # Implementation of the Rover class
│   └── index.ts        # Main program logic
├── tests/              # Test files directory
│   └── validation.test.ts  # Jest test cases for validation and Rover class
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript compiler configuration
```

### Technologies Used

**TypeScript:** for writing type-safe JavaScript code

**Jest**: for testing the application

**Babel**: for transpiling TypeScript and ES modules

**Node.js:** for running JavaScript code outside the browser
