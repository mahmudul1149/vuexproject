<template>
  <header id="header">
    <nav>
      <ul>
        <li>
          <router-link to="/">Couter</router-link>
        </li>
        <li>
          <router-link to="/employees">Employees</router-link>
        </li>
        <li>
          <router-link to="/users">User List</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
#header {
  height: 50px;
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: green;
  padding: 0 20px;
  border-radius: 10px;
}

.logo {
  display: flex;
  align-items: center;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.logo img {
  height: 30px;
  width: 30px;
  background: red;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}
@media (max-width: 500px) {
  .logo a {
    display: none;
  }
  ul {
    display: block;
  }
}
</style>