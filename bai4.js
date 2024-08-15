// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
const arr = [3,5,7,8,-9]
let newArr = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
        newArr = false
        break
    }
}
console.log(newArr)