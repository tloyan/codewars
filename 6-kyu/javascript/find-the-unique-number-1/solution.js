function findUniq(arr) {
  return arr[0] == arr[1] || arr[0] == arr[2] ? arr.find((n) => n != arr[0]) : arr[0];
}
