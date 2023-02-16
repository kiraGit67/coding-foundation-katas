function filterApiData(apiData, mandatoryKeys) {
  // Variable for Result
  let resultArray = [];

  for (let obj of apiData) {
    const objKeys = Object.keys(obj);

    let comparisonKeys = [];

    for (let objKey of objKeys) {
      if (mandatoryKeys.includes(objKey)) {
        comparisonKeys.push(objKey);
      }
    }

    if (comparisonKeys.join("") === mandatoryKeys.join("")) {
      resultArray.push(obj);
    }
  }

  return resultArray;
}

const data1 = [{ id: 1, price: 100 }, { price: 50 }];
const filteredData1 = filterApiData(data1, ["id"]);
console.log(filteredData1); // [{id: 1, price: 100}]

const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
