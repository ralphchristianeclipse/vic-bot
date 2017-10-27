const five = require("johnny-five")
const socket = require("socket.io-client")("http://localhost")
// const board = new five.Board()

// board.on("ready")

socket.on("connect",() => console.log("HELLO"))

socket.on("boardOutput", data => console.log(data))

socket.on("boardInput", data => console.log(data))

const motorFrontLeft,motorFrontRight