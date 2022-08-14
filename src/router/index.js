import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "@/views/event/EventDetailView.vue";
import EventRegister from "@/views/event/EventRegister.vue";
import EventEdit from "@/views/event/EditView.vue";
import Eventlayout from "@/views/event/EventLayoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetWorkError from "@/views/NetworkErrorView.vue";
import EventAirlineDetail from "@/views/event/EventAirlineDetail.vue";
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      morepage: parseInt(route.query.morepage) || 5,
    }),
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: Eventlayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "airlineDetails",
        name: "EventAirlineDetail",
        component: EventAirlineDetail,
      },
      {
        path: "register",
        name: "EventRegister",
        props: true,
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        props: true,
        component: EventEdit,
      },
      {
        path: "/event/:id/register",
        name: "EventRegister",
        props: true,
        component: EventRegister,
      },
      {
        path: "/event/:id/edit",
        name: "EventEdit",
        props: true,
        component: EventEdit,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetWorkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

//Already here!
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
