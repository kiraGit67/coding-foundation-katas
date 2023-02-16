function filterApiData(apiData, mandatoryKeys) {
  // Variable for Result
  let resultArray = [];

  console.log("\n");
  console.log(apiData);
  console.log(mandatoryKeys);
  console.log(mandatoryKeys.join(""));

  for (let obj of apiData) {
    console.log(obj);
    const objKeys = Object.keys(obj);
    console.log(objKeys);
    console.log(objKeys.join(""));

    if (
      objKeys.join("") === mandatoryKeys.join("") ||
      objKeys.includes(mandatoryKeys.join(""))
    ) {
      resultArray.push(obj);
    }
  }
  console.log(resultArray);
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
