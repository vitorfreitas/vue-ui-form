<template>
  <div class="checkbox__wrapper">
    <input type="checkbox" checked id="checkbox" class="checkbox__input">
    <label for="checkbox" class="checkbox__label">{{text}}</label>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style scoped>
.checkbox__wrapper {
  display: flex;
  align-items: center;
}

.checkbox__input {
  display: none;
}

.checkbox__input + .checkbox__label {
  height: 2rem;
  padding-left: 2.5rem;
  background-position: 0 -60px;
  background-repeat: no-repeat;
  background-image: url(http://www.webcis.com.br/images/imagens-noticias/checkbox/ico-master.png);
}

.checkbox__input:checked + .checkbox__label {
  background-position: 0 -90px;
}

.checkbox__label {
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
}
</style>
