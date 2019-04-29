<template>
  <div class="signup">
    <Input :invalid="invalidUsername" label="Username" @input="username = $event"/>
    <Input :invalid="invalidPassword" label="Password" type="password" @input="password = $event"/>
    <Input
      :invalid="invalidPassword"
      label="Repeat password"
      type="password"
      @input="repeatedPassword = $event"
    />
    <Input :invalid="invalidEmail" label="Email address" type="email" @input="email = $event"/>

    <Button text="Sign up" @click.native="createNewUser"/>

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
    },
    isAValidEmailAddress(email) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    },
    assertPasswords(password, repeatedPassword) {
      if (!password || !repeatedPassword) return false;
      return password === repeatedPassword;
    },
    validadeForm() {
      this.invalidUsername = !this.username;
      this.invalidEmail = !this.isAValidEmailAddress(this.email);
      this.invalidPassword = !this.assertPasswords(
        this.password,
        this.repeatedPassword
      );
    },
    createNewUser() {
      this.validadeForm();
    }
  },
  data() {
    return {
      username: "",
      password: "",
      repeatedPassword: "",
      email: "",
      invalidUsername: false,
      invalidEmail: false,
      invalidPassword: false
    };
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
