<template>
  <div id="app">
    <Form/>
  </div>
</template>

<script>
import Form from "./components/Form";
export default {
  name: "app",
  components: { Form }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

body {
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #c8c8c8;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
