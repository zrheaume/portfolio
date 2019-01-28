const fs = require("fs")
const path = require("path")

var viewPath = {
    web: path.resolve("views/web.html"),
    mobile : path.resolve("views/mobile.html")
}

var views = {
    web: fs.readFileSync(viewPath.web, {encoding: "UTF-8"})
}

module.exports = views