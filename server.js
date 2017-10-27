const express = require("express")
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require("path")
server.listen(80, () => console.log(`Server started at localhost:80`));


app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req,res) => {
  res.sendFile(`${__dirname}/index.html`);
})

io.on('connection', (socket) => {
  io.emit("boardOutput","FUCK")

  socket.on("board", data => io.emit("board",data))

  socket.on("boardInput", (data,callback) => {
    io.emit("boardOutput",data)
  })
});
      