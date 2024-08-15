// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const people = [
    { name: "Truong", age: 25 },
    { name: "Long", age: 30 },
    { name: "Quyen", age: 26 }
];
const [{ name: name1, age: age1 }, { name: name2, age: age2 }, { name: name3, age: age3 }] = people;

console.log(name1, age1);
console.log(name2, age2);
console.log(name3, age3);
