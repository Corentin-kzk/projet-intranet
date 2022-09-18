const makeSearch = (collaborator, searchValue, selector1) => {
  //regEX to filter
  let re = new RegExp("(?:^|\\s)" + searchValue, "i");
  let tempArray = [];
  tempArray = collaborator.filter(function (e) {
    switch (selector1) {
      case "city":
        if (re.test(e.city) || re.test(e.country)) {
          return e;
        }
        break;
      case "name":
        if (re.test(e.firstname) || re.test(e.lastname)) {
          return e;
        }
        break;
      default:
        return e;
    }
  });
  return tempArray;
};

/**
 * Make search by array of data
 * @param {ARRAY} params
 * @return ARRAY
 */
function search(collaborator, searchValue, selector1, selector2) {
  console.log(
    "🚀 ~ file: search.service.js ~ line 30 ~ search ~ selector2",
    selector2.current
  );

  let filteredArray = null;
  if (selector2.current != "null") {
    filteredArray = collaborator.filter((user) => {
      return user.service.includes(selector2.current);
    });
  }

  if (searchValue.current.length > 0) {
    console.log(
      "🚀 ~ file: search.service.js ~ line 43 ~ search ~ searchValue.current.length",
      searchValue.current.length
    );
    const res = makeSearch(
      filteredArray ? filteredArray : collaborator,
      searchValue.current,
      selector1
    );
    return res;
  } else return filteredArray;
}

export default search;
