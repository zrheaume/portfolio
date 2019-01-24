const express = require("express")
const exphbs = require("express-handlebars")
module.exports = function (app) {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use("/assets", express.static(`${__dirname}/../assets/public/.`))
    app.engine("handlebars", exphbs({defaultLayout: "main",}))
    app.set("view engine", "handlebars")
};