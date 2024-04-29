const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");
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
      message: "Choose which shape you would like for your SVG logo:",
      choices: ["Circle", "Square", "Triangle"]
   },

   {
      type: "input",
      name: "shapeColor",
      message: "Choose the color you would like for your SVG logo background:"
   },

   {
      type: "input",
      name: "textColor",
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

const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
${shape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}">${text}</text>
</svg>`
   

   return logo
})
 

function writeToFile(fileName, data){
   fs.writeFile(fileName, data, (err) => {
      if (err) {
      console.log(err)
      } else {
         console.log(`${fileName} saved at: ./${fileName}`)
      }

   })
}
 

 function init() {
   questions().then((logo) => {
      writeToFile("logo.svg", logo)
   });
 }

 init()





