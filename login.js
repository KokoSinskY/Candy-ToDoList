
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'ToDoList'

mongoClient.connect(url, {}, (error, client) => {
	if (error)
		console.log('Can not connect to the database')

	const db = client.db(dbname)

	users
	db.collection('users').insertMany([
		{nick: 'Geralt'},
		{nick: 'Lambert'}
	], (error, result) => {
		if (error)
			console.log('Adding user error', error)

		console.log(result.ops)
	})


	console.log('Database connection is ok')
})