<template>
  <a href="#" class="button">{{text}}</a>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style scoped>
.button {
  color: #fff;
  padding: 1.1rem;
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 3rem;
  background: #0f705d;
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
