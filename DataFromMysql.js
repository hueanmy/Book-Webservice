class DataFromMysql {

	constructor (mysqlConnection) {
		this.mysqlConnection = mysqlConnection;
	}

	getBooks() {
		let query = 'select * from book';

		return new Promise((resolve, reject) => {
			this.mysqlConnection.query(query, (err, result) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(result);
				}
			});
		});
	};

	getBook(id) {
        let query = 'select id from book where id = ? ';

        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };

	createBook(data) {
		let query = 'insert into book set ? ';

        return new Promise((resolve, reject) => {
        	this.mysqlConnection.query(query, (err, result) => {
        		if(err) {
        			reject(err);
        		}
        		else {
        			resolve(result);
				}
            });
        });
	};

	updateBook(infoBook) {
	    let query = 'update book name = ? author = ? where id = ?';

	    return new Promise((resolve, reject) => {
	    	this.mysqlConnection.query(query, (err, result) => {
	    		if(err) {
	    			reject(err);
				}
				else {
	    			resolve(result);
				}
			});
		});
	};

	deleteBook(id) {
	    let query = 'delete from book where id = ?';


        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, (err, result) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
	};

};

module.exports = DataFromMysql;
