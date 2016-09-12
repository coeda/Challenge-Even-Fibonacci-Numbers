/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var storedValue = 1;
  var nextFibValue = 0;
  // do your work here

  for(var i = 1; i <= maxFibValue; i = (storedValue + nextFibValue)){
    if(i%2 === 0){
      sum += i;
    }
    nextFibValue = storedValue;
    storedValue = i;
  }

  return sum;

}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  var storedValue = 1;
  var nextFibValue = 0;

  for(var i = 1; i < maxFibValue; i = (storedValue + nextFibValue)){
    highest = i;
    nextFibValue = storedValue;
    storedValue = i;
  }


  return highest;
}



/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};