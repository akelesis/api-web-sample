module.exports = (app) => {
    const get = (req, res) => {
        res.status(200).send(app.users)
    }

    const getById = (req, res) => {
        const userId = req.params.id
        const posicao = app.users.map(user => user.id).indexOf(userId)

        res.status(200).send(app.users[posicao])
    }

    const post = (req, res) => {
        const fs = require('fs')

        const users = app.users
        const user = {...req.body}
        
        users.push(user)

        const usersString = JSON.stringify(users)
        fs.writeFileSync('./users.json', usersString)

        res.status(201).send(user)
    }

    const put = (req, res) => {
        const fs = require('fs')
        const userId = req.params.id
        const user = {...req.body}
        const users = app.users

        const posicao = users.map(user => user.id).indexOf(userId)
        users[posicao] = user

        const usersString = JSON.stringify(users)
        fs.writeFileSync('./users.json', usersString)

        res.status(200).send(user)
    }

    const remove = (req, res) => {
        const fs = require("fs")
        const userId = req.params.id
        const users = app.users

        const posicao = users.map(user => user.id).indexOf(userId)

        delete users[posicao]

        const usersString = JSON.stringify(users)
        fs.writeFileSync("./users.json", usersString)

        res.status(204).send()
    }

    return {get, getById, post, put, remove}
}