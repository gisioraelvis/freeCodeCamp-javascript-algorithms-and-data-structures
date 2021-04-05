function diffArray(arr1, arr2) {
    let newArr = [];
    let concatArr = arr1.concat(arr2);
  
    concatArr.filter((element) => {
      if (!arr1.includes(element) || !arr2.includes(element)) {
        return newArr.push(element);
      }
    });
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));