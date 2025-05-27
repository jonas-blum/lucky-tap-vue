import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ImpressumScreen from "./screens/ImpressumScreen.vue";
import MobileAlready from "./screens/MobileAlready.vue";
import MobileGoodbye from "./screens/MobileGoodbye.vue";
import MobileStartScreen from "./screens/MobileStartScreen.vue";
import WinScreen from "./screens/WinScreen.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MobileStartScreen,
  },
  {
    path: "/mobileu45startu45screen",
    component: MobileStartScreen,
  },
  {
    path: "/mobileu45alreadyu45participatedu45screen",
    component: MobileAlready,
  },
  {
    path: "/mobileu45goodbyeu45screen",
    component: MobileGoodbye,
  },
  {
    path: "/impressumu45screen",
    component: ImpressumScreen,
  },
  {
    path: "/winu45screen",
    component: WinScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
