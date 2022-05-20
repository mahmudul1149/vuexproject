<template>
  <div>
    <h2>Employee</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque a
      et ad magnam magni eos sunt corporis dolorem vitae?
    </p>
    <div class="container-box">
      <div class="box">
        <ul class="list-group">
          <li
            class="list-item"
            v-for="employee in employees"
            :key="employee.id"
          >
            <input
              type="checkbox"
              :checked="employee.isSelected"
              @change="updateSelected(employee.id)"
            />
            {{ employee.name }}
          </li>
        </ul>
      </div>
      <div class="box">
        <div v-for="employee in employees" :key="employee.id">
          <ul class="bg-dark" v-if="employee.isSelected">
            <li class="list-item bg-primary">
              <span>id: {{ employee.id }}</span>
            </li>
            <li class="list-item bg-primary">
              <span>Name: {{ employee.name }}</span>
            </li>
            <li class="list-item bg-primary">
              <span>Email: {{ employee.email }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    employees() {
      return this.$store.getters.employees;
    },
  },
  methods: {
    updateSelected(empId) {
      this.$store.dispatch("changeSelected", { empId: empId });
      console.log("ff");
    },
  },
};
</script>


<style>
.container-box {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
}
ul {
  list-style: none;
}
.list-item {
  border: 1px solid gray;
  padding: 0.5rem;
}
.box {
  width: 48%;
}
.bg-dark {
  background: rgb(161, 252, 176);
  padding: 1rem;
}
.bg-primary {
  background: white;
  color: black;
}
</style>