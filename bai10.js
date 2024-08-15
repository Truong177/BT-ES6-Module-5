//10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title: 'Doraemon',
    author: 'Fujiko Fujio',
    pages: '50',
    displayInfor: function () {
        return this.title + '; author ' + this.author + '; pages ' + this.pages
    }

}
console.log(book.displayInfor())