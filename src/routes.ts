// routes.ts
import DashBoardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  NOT_FOUND: "404",
  DASHBOARD: "/dashboard",
  READING_PAGE: "/reading",
  NOT_FOUND_WILDCARD: "*",
};

export interface RouteConfig {
  path: string;
  component: React.FC;
  navGuardItems?: string[];
}

export const appRoutes: RouteConfig[] = [
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: ROUTES.DASHBOARD,
    component: DashBoardPage,
    navGuardItems: ["authToken"],
  },
  {
    path: ROUTES.READING_PAGE,
    component: ReadingPage,
    //  navGuardItems: ["authToken"],
  },
  {
    path: ROUTES.NOT_FOUND_WILDCARD,
    component: NotFoundPage,
  },
];
