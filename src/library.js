const library = {
	books: [],
	addBook(bookName) {
		this.books.push(bookName);
	},
	removeBook(bookName) {
		const deleteIdx = this.books.indexOf(bookName);
		this.books.splice(deleteIdx, 1);
	},
	listBooks() {
		for (const book of this.books) {
			console.log(book);
		}
	},
	countBooks() {
		return this.books.length;
	},
};

library.addBook('Book-1');
library.addBook('Book-2');
console.log(library.countBooks());
library.listBooks();
library.removeBook('Book-2');
library.listBooks();
console.log(library.countBooks());
