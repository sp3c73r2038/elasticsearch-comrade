import Vue from "vue";
import Router from "vue-router";
import Home from "./Views/Home.vue";
import RESTView from "./Views/RESTView.vue";
import CreateAliasesView from "./Views/AliasesView.vue";
import TasksView from "./Views/TasksView.vue";
import Login from "./Views/Login.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      nodeName: "login",
      component: Login
    },
    {
      path: "/",
      nodeName: "home",
      component: Home
    },
    {
      path: "/rest",
      nodeName: "rest",
      component: RESTView
    },
    {
      path: "/aliases",
      nodeName: "createAliases",
      component: CreateAliasesView
    },
    {
      path: "/tasks",
      nodeName: "tasks",
      component: TasksView
    },
    {
      path: "/about",
      nodeName: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./Views/About.vue")
    }
  ]
});
