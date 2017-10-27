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
      }
    }
  };
</script>

