const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")
const uuid = require("uuid")
const fileContent = fs.readFileSync(path.resolve(__dirname, "./pokes.json"))
const pokes = JSON.parse(fileContent)
const accounts = []
const tokens = []
const favorites = []

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

router.post("/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).end()
        return
    }
    for (const account of accounts) {
        if (account.username === req.body.username && account.password === req.body.password) {
            const token = uuid.v4()
            tokens.push({token: token, username: account.username})
            res.status(200).json({token: token}).end()
            return
        }
    }
    res.status(401).end()
})

router.post("/addfavorite/:pokeId", (req, res) => {
    const userToken = req.get("Authorization")
    const pokemonId = parseInt(req.params.pokeId)
    for (const tokenObject of tokens) {
        if (tokenObject.token === userToken) {
            const username = tokenObject.username
            for (const favObject of favorites) {
                if (favObject.username === username) {
                    favObject.favorites.push(pokemonId)
                    res.status(200).end()
                    return
                }
            }
            favorites.push({ username: username, favorites: [pokemonId]})
            res.status(200).end()
            return
        }
    }
    res.status(401).end()
})

router.get("/favorites", (req, res) => {
    const userToken = req.get("Authorization")
    for (const tokenObject of tokens) {
        if (tokenObject.token === userToken) {
            const username = tokenObject.username
            for (const favObject of favorites) {
                if (favObject.username === username) {
                    res.status(200).json(favObject.favorites).end()
                    return
                }
            }
            res.status(200).json([]).end()
            return
        }
    }
    res.status(401).end()
})

module.exports = router
