// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates the factorial of a positive integer
 */

function CalculateFactorial () {
  // initializing variables for integer given by user and the factorial to 1, also response to an empty string
  let integer = parseInt(document.getElementById('f-int').value)
  let factorial = 1;
  let counter = integer;
  let response = "";
  // response for when user did not enter an integer
  if (integer == 0) { 
    response = "1"
  }
  // response for when user enters 0 as integer
  else if (isNaN(integer)) {
    response = "Please enter a valid integer."
  }  
  
  // else to start the loop
  else {
    // do...while loop to calculate the factorial using repeated multiplication
    do {
      // setting factorial to itself times the counter to create a loop of repeated multiplication
      factorial = factorial * counter;
      // build the response by using the empty string and adding the factorial with the original integer
      if (counter == integer) {
        response = response + counter;
      } 
      else {
        response = response + " x " + counter;
      }
      // decrement the counter by one
      counter--;
    } while (counter >= 1);
  }
    
  // display factorial to user, different answers depending on if user enters valid input or invalid input
   if (isNaN(integer)) {
    document.getElementById('results').innerHTML = response;
   } 
   else {
    document.getElementById('results').innerHTML = "!" + integer + " --> " + response + " = " + factorial;
   }
}
