const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000
const router = require("./api")

app.use(express.json())
app.use(cors())
app.use("/", router)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;
