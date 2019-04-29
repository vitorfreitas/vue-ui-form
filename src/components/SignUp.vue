<template>
  <div class="signup">
    <Input label="Username"/>
    <Input label="Password"/>
    <Input label="Repeat password"/>
    <Input label="Email address"/>

    <Button text="Sign up"/>

    <hr class="signup__divider">

    <a href="#" class="signup__link">Already member?</a>
  </div>
</template>

<script>
import Input from "./Input";
import Button from "./Button";

export default {
  components: { Input, Button }
};
</script>

<style scoped>
.signup > * {
  margin-top: 2rem;
}

.signup__divider {
  border: 0;
  height: 2px;
  margin: 3.5rem 0;
  background-color: rgba(255, 255, 255, 0.4);
}

.signup__link {
  margin: 0;
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 1.7rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
}
</style>
