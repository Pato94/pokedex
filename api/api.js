const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")
const pokes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./pokes.json")))

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

module.exports = router
