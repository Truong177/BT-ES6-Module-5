// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const arr = [3,5,7,8,-9]
let check;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3){
        check = arr[i]
        break
    }
}
console.log(check)