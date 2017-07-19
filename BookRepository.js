const Book = require('./Book');

class BookRepository {
	
	constructor (database) {
		this.database = database;
	};

	getBooks() {
		return this.database.getBooks().then(
			(results) => {
				let books = results.map((book) => {
					return new Book(book);
				});

				return books;
			},

			(err) => {
				console.log(err);
				throw err;
			}
		);
	};

	getBook(id) {
		return this.database.getBook(id).then(
			(results) => {
			    if(results.length >0 ) {
                    return new Book(results[0]);
                }
			    else {
                    return 'Not found';
                }
				},
            (err) => {
                console.log(err);
                throw err;
            });
	};

	createBook(data) {
		
	};

	updateBook(data){
		
	};

	deleteBook(id){
		
	};
}

module.exports = BookRepository;
