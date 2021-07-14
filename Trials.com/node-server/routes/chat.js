const { Server } = require("socket.io");

const sendMessage = (io, message) => {
    const response = message;
    // Emitting a new message. Will be consumed by the client
    io.sockets.emit("message_response", response);
};

const router = (app, server) => {
    const io = new Server(server);
    io.on("connection", (socket) => {
        // Handles general chat message requests
        socket.on("message_request", (data) => sendMessage(io, data));
        socket.on("disconnect", () => {});
    });
};
// Export the router
module.exports = router;
