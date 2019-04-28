<template>
  <form class="form">
    <nav>
      <ul class="form__options">
        <li
          class="form__option"
          :class="{'form__option--active': formState == 'signin'}"
          @click="switchFormState('signin')"
        >Sign in</li>

        <li
          class="form__option"
          :class="{'form__option--active': formState == 'signup'}"
          @click="switchFormState('signup')"
        >Sign up</li>
      </ul>
    </nav>

    <SignIn/>
  </form>
</template>

<script>
import SignIn from "./SignIn";

export default {
  components: { SignIn },
  data() {
    return {
      formState: "signin"
    };
  },
  methods: {
    switchFormState(state) {
      this.formState = state;
    }
  }
};
</script>

<style scoped>
.form {
  padding: 5rem;
  width: 50rem;
  height: 60rem;

  background-image: linear-gradient(
      rgba(44, 62, 80, 0.5),
      rgba(44, 62, 80, 0.5)
    ),
    url(../assets/bg.jpg);

  background-size: cover;

  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.form__options {
  list-style: none;
  margin-bottom: 2rem;
}

.form__option {
  color: rgba(255, 255, 255, 0.3);
  display: inline;
  cursor: pointer;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.form__option--active {
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid #ecf0f1;
}

.form__option:not(:last-of-type) {
  margin-right: 1.6rem;
}
</style>
