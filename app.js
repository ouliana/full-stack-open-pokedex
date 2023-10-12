const express = require('express')
// const cors = require('cors')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
app.use(express.static(process.cwd() + '/dist'))

// app.use(cors)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`)
})
