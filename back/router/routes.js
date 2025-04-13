const express = require('express')
const {signIn, login} = require('../controller/auth')

const Route = express.Router()

Route.post("/signIn", signIn)
Route.post("/login", login)

module.exports = Route