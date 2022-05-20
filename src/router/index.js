import Vue from "vue";
import VueRouter from "vue-router";
import Counter from "../views/CounterView.vue";
import Employees from "../views/EmployeeView.vue";
import User from "../views/UserView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "counter",
    component: Counter,
  },
  {
    path: "/employees",
    name: "employees",
    component: Employees,
  },
  {
    path: "/users",
    name: "user",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
