function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection.filter((obj) => {
    return srcKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
