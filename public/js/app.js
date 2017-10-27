const socket = io()
const blink = document.querySelector("#blink")

socket.on("connection", data => {
  console.log(data)
})

socket.on("boardOutput", data => {
  console.log(data)
})

socket.emit("boardInput",{fuck: "you"}, (data) => console.log(data))

socket.on("board", data => {
  const h1 = document.createElement("h1")
  h1.innerText = `New Blink data ${new Date()}`
  blink.appendChild(h1)
})