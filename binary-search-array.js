binarySearch = (arr, target, beg, end) => {
  //return index of val if found or -1 if not found

  if (beg > end) return -1;

  let mid = parseInt((beg + end) / 2); //index
  console.log(mid, "mid");

  if (arr[mid] === target) {
    return mid; //found
  }

  if (arr[mid] < target) {
    beg = mid + 1;
    return binarySearch(arr, target, beg, end);
  } else {
    end = mid - 1;
    return binarySearch(arr, target, beg, end);
  }
};
