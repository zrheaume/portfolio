var frame = require("../views/frame/frame")
module.exports = function (io) {
    io.on("connect", function (socket) {
        console.log(`A user has connected at socket ${socket.id}`)
        socket.on("user", (msg) => {
            console.log(msg)
            io.sockets.connected[socket.id].emit('toScreen', { content : frame.web });
        })
        socket.on("disconnect", () => {
            console.log(`The user on socket ${socket.id} has disconnected`)
        })
    })
}