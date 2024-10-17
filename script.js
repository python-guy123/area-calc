 var choice = prompt("Please select a figure to calculate area.\n 1: Square \n 2: Rectangle \n 3:Circle \n");
 if (choice=="1"){
 var side = prompt("Enter the length of the side of the square")
    document.write(side*side)
 }
 if (choice=="2"){
    var length = prompt("Please enter the length of 1 side of the rectangle.")
    var width = prompt("Please enter the width of 1 side of the rectangle.")
    document.write(length*width)
 }
 if (choice=="3"){
    var radius = prompt("Please enter the radius of the circle.")
    
    document.write(Math.PI*Math.pow(radius , 2))
 }
