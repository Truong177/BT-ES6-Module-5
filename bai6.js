// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const arr = [3,5,7,8,-9]
const [first, ...rest] = arr
console.log(first)
console.log(rest)