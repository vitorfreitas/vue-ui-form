<template>
  <div>
    <label for="input" class="label">{{label}}</label>
    <input :type="type || 'text'" id="input" class="input">
  </div>
</template>

<script>
export default {
  props: ["label", "type"]
};
</script>

<style scoped>
.label,
.input {
  display: block;
}

.label {
  color: #c8c8c8;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.input {
  border: 0;
  width: 100%;
  color: #fff;
  font-size: 1.55rem;
  border-radius: 3rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
}

.input:focus {
  outline: 0;
}
</style>
