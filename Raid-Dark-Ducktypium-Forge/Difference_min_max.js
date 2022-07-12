function differenceMinMax(array) {

  // find the difference in the maximum and minimum values
  // var difference = array.max - array.min;

  var min = Math.min(...array);
  var max = Math.max(...array);
  
  let differenceMinMax = max - min;

  return differenceMinMax

}
  console.log("Test case 1:");
  console.log(differenceMinMax([1, 2, 3, 4, 5]));
  
  console.log("Test case 2:");
  console.log(differenceMinMax([6, 2, 3]));
  
  console.log("Test case 3:");
  console.log(differenceMinMax([100, 0]));


// alternative, "fancy" solution:
/*

  
 var max = Math.max.apply(null, array);
 var min = Math.min.apply(null, array);
  
 let differenceMinMax = max - min;

 return differenceMinMax

 */