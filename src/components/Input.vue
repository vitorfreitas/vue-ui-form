<template>
  <div>
    <label for="input" class="label">{{label}}</label>
    <input
      @input="$emit('input', $event.target.value)"
      :type="type || 'text'"
      id="input"
      class="input"
      :class="{'input--invalid':invalid}"
    >
  </div>
</template>

<script>
export default {
  props: ["label", "type", "value", "invalid"]
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
  transition: 0.2s all;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1.5px solid transparent;
}

.input--invalid {
  border-color: rgba(255, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.3);
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.input:focus {
  outline: 0;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
