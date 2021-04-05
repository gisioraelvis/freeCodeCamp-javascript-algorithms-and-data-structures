function destroyer(arr) {
  let destroyerElements = Array.from(arguments).slice(1);

  return arr.filter((elem) => {
    return !destroyerElements.includes(elem);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
