<template>
  <div class="container">
    <h1 class="title">Counter</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, fuga
      nostrum! Provident tempora fugit, animi libero dolore alias nesciunt
      ipsum!
    </p>
    <div class="card-body">
      <p class="card-title">
        {{ counter }}
      </p>
      <button class="btn-primary" @click="increments">Increment</button>
      <button class="btn-light" @click="decrements">Decrement</button>
      <button class="btn-secondery" @click="inrementsBy">IncrementBy</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementBy"]),
    increments() {
      this.increment();
    },
    decrements() {
      this.decrement();
    },
    inrementsBy() {
      this.incrementBy({
        value: this.counter,
      });
    },
  },
};
</script>

<style>
.card-body {
  width: 18rem;
  height: 100%;
  border: 1px solid gray;
  color: whitesmoke;
  padding: 0.4rem;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
}
.card-title {
  color: black;
  font-size: 1.4rem;
}
button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  margin: 0.3rem;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background: green;
  color: white;
}
.btn-light {
  background: yellow;
}
.btn-secondery {
  background: red;
  color: white;
}
/* @media (max-width: 500px) {
  button {
    display: block;
  }
} */
</style>