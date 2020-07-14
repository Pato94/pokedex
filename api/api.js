const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")
const fileContent = fs.readFileSync(path.resolve(__dirname, "./pokes.json"))
const pokes = JSON.parse(fileContent)
const accounts = []

router.get("/pokemons", (req, res) => {
    res.send(pokes)
})

router.get("/pokemons/:pokeId", (req, res) => {
    const pokeId = parseInt(req.params.pokeId)
    const maybePoke = pokes.find(p => p.id === pokeId)
    if (maybePoke == null) {
        res.status(404).end()
    } else {
        res.send(maybePoke)
    }
})

router.post("/register", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).end()
        return
    }
    accounts.push({username: req.body.username, password: req.body.password})
    res.status(201).end()
})

module.exports = router
