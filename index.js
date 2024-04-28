const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("../lib/shape");
const fs = require("fs")


const questions = () => inquirer.prompt([
   {
      type: "input",
      name: "text",
      message: "Please enter up to 3 characters:"
   },

   {
      type: "list",
      name: "shape",
      message: "Choose which shape you would like for your SVG logo:"
   },

   {
      type: "input",
      name: "text",
      message: "Choose the color you would like for your SVG logo background:"
   },

   {
      type: "input",
      name: "text",
      message: "Choose the color you would like for your SVG logo text:"
   },
  
])

.then (({text, shape, shapeColor, textColor}) => {
   // const SVG = new SVG()
      switch(shape){
         case "Circle":
            shape = new Circle(shapeColor)
         break
         case "Square":
            shape = new Square(shapeColor)
         break
         case "Triangle":
            shape = new Triangle(shapeColor)
         break
         default:
            console.log("incorrect shape selection")
      }

const result = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
   ${shape.render()}
   <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}">${text}</text>`

   return(result)
})
 
function writeToFile(fileName, data) {
   return fs.writeFileSync(fileName,data);
 }

 function init() {
   questions().then((responses) => {
      console.log("generate logo svg")
      writeToFile("logo svg", responses)
   });
 }

 init()





