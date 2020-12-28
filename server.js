const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('build'))

app.get('*', (req, res) => {
	res.sendFile('./index.html', { root: __dirname })
})

app.listen(port, () => {
	console.log("The server is running")
})
