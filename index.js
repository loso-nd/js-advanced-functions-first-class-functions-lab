// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

/** Return a new array containing the first two drivers using .slice() which returns 
 * a new array
 */

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function () {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


/**
 * createFareMultiplier() — This is a higher-order function that takes in one argument,
 *  an integer, and returns a function that will multiply a fare for a ride accordingly. 
 * If createFareMultiplier() receives an argument of 4, it will return a function 
 * that takes in a fare as an argument and quadruples the fare.
 */

 function createFareMultiplier(fareMultiplier){
     return function(value){
         return fareMultiplier * value;
     }
 }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

/**
 * 
 * Note that cb represents the callback function
 */
const selectDifferentDrivers = (drivers, cb) => {
    return cb(drivers);
}
