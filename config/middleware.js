const express = require("express");
module.exports = function (app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use("/assets", express.static(`${__dirname}/../assets/public/.`));
};