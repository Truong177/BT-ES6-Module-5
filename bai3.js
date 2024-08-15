// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
const arr = [3,5,7,8,9]
const V = 7;
const result = arr.includes(V) ? V : "không tìm thấy";
console.log(result)