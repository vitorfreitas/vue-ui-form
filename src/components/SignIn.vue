<template>
  <div class="signin">
    <Input label="Username"/>
    <Input label="Password"/>

    <Checkbox text="Keep me Signed in"/>

    <Button text="Sign in"/>

    <hr class="signin__divider">

    <a href="#" class="signin__link">Forgot Password?</a>
  </div>
</template>

<script>
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

export default {
  components: { Input, Button, Checkbox }
};
</script>

<style scoped>
.signin > * {
  margin-top: 2rem;
}

.signin__divider {
  border: 0;
  height: 2px;
  margin: 5rem 0;
  background-color: rgba(255, 255, 255, 0.4);
}

.signin__link {
  margin: 0;
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 1.7rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
}
</style>
