<template lang="pug">
  q-toolbar
    q-toolbar-title VIC Bot
</template>

<script>
  export default {
    name: "Index",
    sockets: {
      connect() {
        console.log("CONNECTED");
      },
      board(data) {
        console.log(data);
      },
      ui(data) {
        console.log(data);
      }
    },
    mounted() {
      this.$socket.emit("board", {
        MOTOR_LEFT: 1
      });
    }
  };
</script>

