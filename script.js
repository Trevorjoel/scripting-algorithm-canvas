// Author: Trevor Garrity
// e-mail: trevsstuff@hotmail.com
// Date: 11/06/18
// Version: 1.0
//
// Description:
//                  This script takes a string of 6-sided dice rolls and graphs the results
//                  using a bar graph.
//
// Known/potential bugs:
//                          Line 110:       Potential type coercion problem. Comparing str to num
//
//                          Line 100-121 :  Contains forEach within a for loop
//                                          Recommend separate function to extract data from user input and store as obj
//                                          to feed into fillRect function.
/*

                        // Debug
                        console.log('No match, continue.');
                        console.log(barPos1, barPos2);
                        console.log('input[0] ' + input[0]);
                        console.log('i ' + i);
                        console.log(input);

                        // DEBUG
                        console.log('Run the horizontal LOOP :');
                         console.log('i ' + i);
 */

//

// Setup canvas
c = document.getElementById("myCanvas");
con = c.getContext("2d");
con.strokeStyle = 'black';
con.lineWidth = 4;

// Initialise variables
let x = 95;
let y = 935;
let shortStroke = 100;
let w = 60;
let z = 820;
let shortStroke2 = 900;
let input = [];
let barPos1 = 898;
let barPos2 = 0;


// draw vertical axis
con.beginPath();
con.lineTo(100, 100);
// draw horizontal axis
con.lineTo(100, 900);
con.lineTo(900, 900);

// Short strokes & numbers on the horizontal axis
con.moveTo(100, 900);
for(let i = 0; i <= 6; i++) {

    con.font = "20px Arial";
    // Begin on 1
    if(i > 0) {

        con.fillText(i, x, y);
        con.moveTo(shortStroke, 900);
        con.lineTo(shortStroke,910);

    }
    x += 120;
    shortStroke += 120;
}
con.stroke();
con.closePath();

// Short strokes & numbers on the vertical axis
con.beginPath();

for (let i = 0; i < 10; i++) {

    if(i > 0) {
        con.fillText(i, w, z);
        z -= 88;
        con.moveTo(100, shortStroke2);
        con.lineTo(90, shortStroke2);

    }
    shortStroke2 -= 88;
}
con.stroke();

// Function to draw the bars

function drawBars() {
    con.fillStyle = 'blue';

    // Get user input values, split and sort

    input = document.getElementById("user_input").value;
    input = input.split('').sort();

    // Validate user string

    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i]) || input[i] < 1 || input[i] > 6) {
            con.font = "30px Arial";
            con.fillText('Not a valid string, only numbers 1 to 6 accepted!', 200, 50);


        } else {
            // Clear error message
            con.clearRect(200, 10, 630, 50);

        }
    }

    // Sets the horizontal position
    let barHorizontal = 90;
    // loop through the horizontal positions of the graph
    for (let i = 0; i <= 6; i++) {
        // loop through the array of die numbers
        // If the numbers in the array match the position on the horizontal plane
        input.forEach((item) => {

            if (item == i) {

                // Add height to the bar

                barPos1 -= 88;
                barPos2 += 88;
            }

        });

        // Draw out the bars, move along to the next horizontal position, reset the bars to zero
        con.fillRect(barHorizontal, barPos1, 20, barPos2);
        barHorizontal += 120;
        barPos1 = 898;
        barPos2 = 0;

    }
}
// Allow users to clear all fields
function clearBars() {

    document.getElementById('user_input').value = '';
    location.reload();

}

