import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "/calculator",
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () => import("../pages/CalculatorPage.vue"),
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: () => import("../pages/InstructionsPage.vue"),
  },
  {
    path: "/bmichart",
    name: "BMI Chart",
    component: () => import("../pages/BMIChartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
