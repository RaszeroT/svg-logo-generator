const inquirer = require("inquirer");


inquirer.prompt([
    // characters
  {
    type: "input",
    message: "Please enter no more than three characters:",
    name: "characters",
  },

//   text color
  {
    type: "input",
    message:
      "Please enter your desired text color (color name or hexadecimal number):",
    name: "text-color",
  },

//   shape
  {
    type: "list",
    message: 'Please select one of the following shapes:',
    choices: ["Circle", "Triangle", "Square"],
    name: "shape,",
  },

//   background color
  {
    type: "input",
    message: "Please enter your desired color for selected shape",
    name: "background-color",
  },
])

