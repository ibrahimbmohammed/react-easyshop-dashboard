import DashBoard from "./views/DashBoard/DashBoard";
import ManageProducts from "./views/ManageProducts/ManageProducts";
import Login from "./views/Login/Login";
import StoreItems from "./views/StoreItems/StoreItems";
//import Icons from "views/Icons.js";

const dashboardRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DashBoard,
    layout: "/"
  },
  {
    path: "manage",
    name: "Manage Product",
    icon: "pe-7s-user",
    component: ManageProducts,
    layout: "/"
  },
  {
    path: "storeItem",
    name: "Store items",
    icon: "pe-7s-note2",
    component: StoreItems,
    layout: "/"
  },
  {
    path: "login",
    name: "login",
    icon: "pe-7s-note2",
    component: Login,
    layout: "/"
  }
];

export default dashboardRoutes;
