<template>
  <div>
    <h1>User List</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minima
      temporibus reprehenderit itaque, blanditiis consectetur sint deleniti
      sapiente amet nam?
    </p>
    <div class="container">
      <app-spinner v-if="loading"></app-spinner>
    </div>
    <div class="container" v-if="!loading && errorMessage">
      <p class="error-msg">{{ errorMessage }}</p>
    </div>
    <div v-if="!loading && users.length > 0">
      <table>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>

          <th>Location</th>
        </tr>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.website }}</td>
            <td>{{ user.address.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Spinner from "../views/SpinnerView.vue";
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  async created() {
    try {
      this.loading = true;
      let dataURL = "http://jsonplaceholder.typicode.com/users";
      let response = await axios.get(dataURL);
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
  components: {
    appSpinner: Spinner,
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th {
  /* border: 1px solid #dddddd; */
  background: rgb(240, 99, 99);
  text-align: center;
  padding: 8px;
}
td {
  text-align: center;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
.error-msg {
  color: red;
}
</style>