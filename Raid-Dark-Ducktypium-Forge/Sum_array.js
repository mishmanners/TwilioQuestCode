function sumArray(numbers) {
    // function to sum all the numbers in an array   
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      return sum;
  }
    
  
  console.log("Test case 1:");
  console.log(sumArray([1, 2, 3]));
  
  console.log("Test case 2:");
  console.log(sumArray([-1, 0, 1]));
  
  console.log("Test case 3:");
  console.log(sumArray([100, 12.0, -4.5]));
