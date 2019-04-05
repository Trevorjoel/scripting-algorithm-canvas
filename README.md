# scripting-algorithm-canvas
Trevor Garrity

This project was a part of a TAFE unit - Automate processes

There are two programs, a binary to decimal converter (binary2decimal.html) and a chart for plotting die rolls (index.html).
As this was an exercise in JavaScript, HTML, canvas & writing algorithms I have shown, in writing, the process I have used to
complete the tasks.

## TASK 2 - Die plotter Graph

File:
index.html

Assessment Requirements:
1) Develop an accurate algorithm.
Create an algorithm of the problem stated below:

Create a webpage (html) page that will simulate a graph of the results of the roll of a six () sided die.

The end user will be asked to enter a string, which will be a list of possible results (no more than 30 characters long).
So the string can only contain the digits from One (1) to six (6), to represent each face of the die and thus each possible
result, for example, the string might have the following list of results – 345444322315.

The page should contain a “Display” button that when clicked will display a column graph showing the results of the die
roll.

2) Graph script
Create a script for the graph using the algorithm you created in Scenario 2
Your solution will be linked to this html file by using the <script> tag in the header section of the file.
Remember to add your comments to your script file.

Script and readme file
Document the script showing:

Script information
Program comments


### PSEUDO CODE & ALGORITHM:
```
Description: This algorithm asks the user to enter a string of possible results for 6 sided die rolls
             The results (occurrences of each number), should be plotted on a bar graph.


Identify I/O
    INPUT:   Is a string of integers from 1 to 6
             text field should limit user to 30 chars.

    OUTPUT:  Should be a bar graph representing the occurrences of each of the die rolls
             Must contain error for invalid input.
             There is no need to manage the data being too large for the graph.
             
WRITE HTML

SETUP canvas

PROMPT user input
    Validate User input
        if invalid chars in string throw error
    SET variable to an array

    Clear any previous error msg


    DRAW Horizontal Axis
        LOOP through numbers 1 - 6 (die nums)
            DRAW up the y axis numbers 1 - 6


    DRAW Vertical Axis (occurrence of rolled nums)
        LOOP through numbers 1 - 9
            DRAW up the x axis numbers 1 - 9

CALL function
    GET Parameters from user input
        LOOP through input Array
            DRAW rectangle on graph to represent num of occurrences of each number
                *This got a little hazy for me so I decided to start coding.
                More info below

        OUTPUT Graph
```
Notes for the more complex steps of the Algorithm:

DRAW x, Y Axes
Output will be a short stroke and with number along the lines of the axes, X 1-9 and Y 1-6 respectively
We use iteration to draw short strokes and add numbers evenly along the axis.
We need variables to represent the numbers drawn and place the short strokes.
Use selection in to omit the zeroes on the graph.

FUNCTION to draw the bars
Must take parameters from the user input (integers)
Must output filled rectangles of the right height in the right place
Use variables to determine how high to draw
Use variables to determine where along the horizontal axis to draw

  I settled on having a loop going through each value 1-6 on the horizontal
  then the inbuilt forEach method to match the values in the array.
  I'm fully aware nested loops are a big no no and I guess this is expensive on resources.
  
  An alternative might be to have a separate function that extracts the number of occurrences of the rolls
  into an object that can be fed into the con.fillRect function.
  input = [1,1,1,1,2,2,2,6,6,]; to object = {1 : 4, 2 : 3, etc...};
  Something like that.
  BELOW is testing the algorithm, leaving out some of the more straight forward (for me) steps:
  I left in some artifacts of the debug process.



## Binary converter
Assessment requirements: 

Develop a valid algorithm
You are to design an algorithm to describe the following:

A function is required that converts a text representation of a binary number to an integer. 
The binary number may be any length from one (1) to eight (8) digits.
Be sure to check that the text string contains only 0s and 1s.

# My method:

It is  completed in 3 sections.
1) Overview the algorithm. 
2) Designin & test the separate parts with the console
3) Is the final function (in script)
```
   1) Algorithm overview
     Prompt users for input
     Set variables
     Reverse the array
     loop through the array, add values to a new array and catch incorrect inputs
     add up all the values of the value array
     Output the results
```
    2) Building the separate parts and testing them in console. 
```
    // Prompt users for input

    // Set variables
    var binary = ["0","0","0","0","1","0","1"];
    var value = 1;
    var total = 0;
    let valueArray = [];

    // Reverse the array so the 0'th position of the array is the first value in binary values.
    // This seems easier to get my head around because binary is read right to left but arrays are indexed l to r.
    // Enables any length of user input.
    binary.reverse();

    // loop through the array, add values to a new array catch incorrect inputs
    for (i = 0; i < binary.length; i++) {
        switch (binary[i]) {
            case "1":
                valueArray.push(value);
                break;
            case "0":
                valueArray.push(0);
                break;
            default:
                console.log("Please check your input only 1's and 0's accepted!");
        }
        value = parseInt(value * 2);
    }

    // add up all the values of the value array
    for(i = 0; i < valueArray.length ; i++){

        total += valueArray[i];
    }


    // Output the results
    console.log(total);
```
3) The final work can be seen binary2decimal.html
 
