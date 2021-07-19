/* 1) Understanding a problem

a) array transformed to string, separated by ...
b) What is the X days? (current index of array + 1)


Breaking up into sub-problems
- transform array into string
- transform each element to string with C
- Strings needs to contain day (index + 1)
- Add ... between elements and start end of string
- Log string to console
*/
// Arrays

const data1 = [17, 21, 33];
const data2 = [12, 5, -5, 0, 4];

// Function

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} Celsius in ${i + 1} days...`;
  }
  console.log("..." + str);
};

printForecast(data1);
printForecast(data2);
