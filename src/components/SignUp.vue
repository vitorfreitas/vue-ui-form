<template>
  <div class="signup">
    <Input label="Username"/>
    <Input label="Password" type="password"/>
    <Input label="Repeat password" type="password"/>
    <Input label="Email address" type="email"/>

    <Button text="Sign up"/>

    <hr class="signup__divider">

    <a href="#" class="signup__link" @click="emitAlreadyMemberEvent">Already member?</a>
  </div>
</template>

<script>
import Input from "./Input";
import Button from "./Button";

export default {
  components: { Input, Button },
  methods: {
    emitAlreadyMemberEvent() {
      this.$emit("alreadyMember", { state: "signin" });
    }
  }
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
