// Put your solution here
// Name: Nathalie Surman
// Date Created: 24/04/2023
// Most recent revision

function divideArray(numbers) {

//first initializes two empty arrays for even numbers and odd numbers.
    let evenNums = [];
    let oddNums = [];


// We loops through the input array and uses the modulus operator to determine if each number is even or odd.
  
 
    for (let i = 0; i < numbers.length; i++) {
    // If the number is even, it is added to the evenNums array using the push() method.
        if (numbers[i] % 2 == 0) {
            evenNums.push(numbers[i]);
        } else {
    // If the number is odd, it is added to the oddNums array.
            oddNums.push(numbers[i]);
        }
    }

// After the loop, the two arrays are sorted using a comparison function that sorts numbers in ascending order.
    evenNums.sort(function(a, b) {
        return a - b;
    });

        oddNums.sort(function(a, b) {
        return a - b;
        });
        console.log("Even numbers:");
        if (evenNums.length > 0) {
        for (let i = 0; i < evenNums.length; i++) {
            console.log(evenNums[i]);
        }
        } else {
        console.log("None");
        }
        console.log("Odd numbers:");
        if (oddNums.length > 0) {
        for (let i = 0; i < oddNums.length; i++) {
            console.log(oddNums[i]);
        }
        } else {
        console.log("None");
        }
// Finally, the function outputs the sorted arrays to the console, with "None" as the output if either array is empty.
    }
    
    let nums = [4, 2, 9, 1, 8];
    console.log(divideArray(nums));

    let nums2 = [3, 5, 7];
    console.log(divideArray(nums2));