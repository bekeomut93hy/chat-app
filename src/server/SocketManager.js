const io = require("./index").io;
module.exports = function(socket) {
  console.log("New user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("chat", msg => console.log(msg));
};
