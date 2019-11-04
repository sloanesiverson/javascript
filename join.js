"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    // write code to implement method here
   var answer = "";

   for (var i = 0; i < array.length; i++) {
    answer = answer + array[i] + separator
   }

   return answer
  }
}


const value = _.join(["hello", "goodbye"], ", ")

console.log(value);