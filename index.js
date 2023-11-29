const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require('./lib/js/shapes.js')
const Wording = require('./lib/js/wording.js')
const fs = require('fs')

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
    name: "textColor",
  },

//   shape
  {
    type: "list",
    message: 'Please select one of the following shapes:',
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },

//   background color
  {
    type: "input",
    message: "Please enter your desired color for selected shape:",
    name: "backgroundColor",
  },
])

.then((input) => {
  console.log(input)
    if (input.characters.length > 3) {
        console.log("You entered more than 3 characters.")
      }
      console.log(userShape(input))
      let data = {
        shapeInfo: userShape(input),
        textInfo: userText(input)
      }
      return data;
    })
    .then((data) => {
      console.log(data)
      fs.writeFile('logo.svg',
      `<svg>${data.shapeInfo}${data.textInfo}</svg>`,

      (err) =>
        err
          ? console.log(err)
          : console.log("Your logo.svg has been created!!")
    );
  });




function userShape(input) {
  let shape;
  console.log('user chose shape: ' + input.shape)
    if (input.shape === 'Circle') {
      shape = new Circle()
      console.log(shape.render())
  
    } else if (input.shape === 'Triangle') {
      shape = new Triangle()
      console.log(shape.render())

    } else {
      shape = new Square()
      console.log(shape.render())
    }
    shape.setColor(input.backgroundColor);
    let finalShape = shape.render();
    console.log('user final shape: ' + finalShape)
    return finalShape;
  }


function userText(input) {
    let characters = new Wording()
    let word = characters.setText(input.textColor, input.characters)
    console.log('user character choice: ' + word)
  return word;
  }
