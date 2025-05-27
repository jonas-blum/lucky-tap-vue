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
    path: "/gewonnen",
    component: WinScreen,
  },
  {
    path: "/bereits-teilgenommen",
    component: MobileAlready,
  },
  {
    path: "/vorbei",
    component: MobileGoodbye,
  },
  {
    path: "/impressum",
    component: ImpressumScreen,
  },
  // Redirects for old routes
  {
    path: "/winu45screen",
    redirect: "/gewonnen"
  },
  {
    path: "/mobileu45alreadyu45participatedu45screen",
    redirect: "/bereits-teilgenommen"
  },
  {
    path: "/mobileu45goodbyeu45screen",
    redirect: "/vorbei"
  },
  {
    path: "/impressumu45screen",
    redirect: "/impressum"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
