function extractClassName(sessionTitle) {
  // Add you solution here
  // Variable for result
  let result;

  // Turn sessionTitle into Array
  const sessionTitleArray = sessionTitle.split(" ");

  if (sessionTitleArray.length !== 4) {
    result = null;
  } else if (sessionTitleArray.length === 4) {
    let year = sessionTitleArray[2];

    let month = sessionTitleArray[3];
    let monthNumber;

    switch (month) {
      case "Januar":
        monthNumber = "01";
        break;
      case "Februar":
        monthNumber = "02";
        break;
      case "März":
        monthNumber = "03";
        break;
      case "Maerz":
        monthNumber = "03";
        break;
      case "April":
        monthNumber = "04";
        break;
      case "Mai":
        monthNumber = "05";
        break;
      case "Juni":
        monthNumber = "06";
        break;
      case "Juli":
        monthNumber = "07";
        break;
      case "August":
        monthNumber = "08";
        break;
      case "September":
        monthNumber = "09";
        break;
      case "Oktober":
        monthNumber = "10";
        break;
      case "November":
        monthNumber = "11";
        break;
      case "December":
        monthNumber = "12";
        break;
      default:
        monthNumber = "0";
    }

    if (year.length !== 4 || monthNumber === "0") {
      result = null;
    } else {
      result = year + "-" + monthNumber;
    }
  }

  return result;
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"
console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"
console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"
console.log(extractClassName("Live-Session 2022 April")); // null
console.log(extractClassName("Live-Session Class 2 X")); // null
console.log(extractClassName("Live-Session Class 2022 Y")); // null
console.log(extractClassName("Live-Session Class 22 April")); // null
