class DataFromMysql {

	constructor (mysqlConnection) {
		this.mysqlConnection = mysqlConnection;
	}

	getBooks() {
		let query = 'select * from book';

		return new Promise((resolve, reject) => {
			this.mysqlConnection.query(query, (err, result) => {
				if (err){
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	};

	getBook(id) {
		
	};

	createBook(data) {
		
	};

	updateBook(infoBook) {
		
	};

	deleteBook(id) {
		
	};

};

module.exports = DataFromMysql;
