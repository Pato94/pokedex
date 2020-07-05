const path = require("path")
const express = require("express")

const port = process.env.PORT || 3000

const app = express()

app.use(express.static("frontend/dist"))

app.all("*", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "frontend", "dist")})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
