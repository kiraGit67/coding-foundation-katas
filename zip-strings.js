function zipStrings(strA, strB) {
  // turn strA and strB to arrays
  const strAarray = strA.split("");
  const strBarray = strB.split("");

  let zippedArray = [];

  let result;
  let restArray;

  //console.log(strAarray);
  //console.log(strBarray);

  // Add you solution here
  if (strAarray.length === strBarray.length) {
    for (let i = 0; i < strAarray.length; i++) {
      zippedArray.push(strAarray[i]);
      zippedArray.push(strBarray[i]);
    }

    result = zippedArray.join("");
  } else if (strAarray.length > strBarray.length) {
    for (let i = 0; i < strBarray.length; i++) {
      zippedArray.push(strAarray[i]);
      zippedArray.push(strBarray[i]);
    }

    restArray = strAarray.slice(strBarray.length);
    result = zippedArray.join("") + restArray.join("");
  } else if (strAarray.length < strBarray.length) {
    for (let i = 0; i < strAarray.length; i++) {
      zippedArray.push(strAarray[i]);
      zippedArray.push(strBarray[i]);
    }

    restArray = strBarray.slice(strAarray.length);
    result = zippedArray.join("") + restArray.join("");
  }

  return result;
}

console.log(zipStrings("abc", "123"));
console.log(zipStrings("abc", "1"));
console.log(zipStrings("a", "123")); // "a123"
console.log(zipStrings("", "123")); // "123"
console.log(zipStrings("abc", "")); // "abc"
