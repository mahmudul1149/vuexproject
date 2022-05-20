import Vue from "vue";
import Vuex from "vuex";
import employee from "./data/employee";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    employees: employee,
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    employees(state) {
      return state.employees;
    },
  },
  mutations: {
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    INCREMENTBY(state, payload) {
      state.counter = state.counter + payload.value;
    },
    UPDATE_SELECTED(state, payload) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === payload.empId) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else return employee;
      });
    },
  },
  actions: {
    increment({ commit }) {
      commit("INCREMENT");
    },
    decrement({ commit }) {
      commit("DECREMENT");
    },
    incrementBy({ commit }, newValue) {
      commit("INCREMENTBY", newValue);
    },
    changeSelected({ commit }, payload) {
      commit("UPDATE_SELECTED", payload);
    },
  },
});
