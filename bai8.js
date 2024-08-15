// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum(...numbers) {
    return numbers.reduce((temp,currentvalue) => temp + currentvalue)
}
const arr = [3,5,7,8,9]
const result = sum(...arr)
console.log(result)