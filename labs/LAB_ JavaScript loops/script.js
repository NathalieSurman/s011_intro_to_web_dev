// Name: Nathalie Surman
// Date Created: 24/04/2023
// Most recent revision

function drawTriangle(triangleSize) {

   // Your solution goes here
   var result = "";

   // looping from 1 to triangleSize   

   for(var i=1;i<=triangleSize;i++){

       // adding a * at the end of result
      result += "*";

       // printing the value of result

      console.log(result);    
      
      }
}

console.log(drawTriangle(4));


