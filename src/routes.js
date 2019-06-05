import Home from "./pages/home";
import PageTwo from "./pages/pageTwo";

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        queries: ["queryA", "queryB"]
    },
    {
        path: '/pageTwo',
        component: PageTwo,
        exact: true,
        queries: ["queryA", "queryB", "queryC"]
    }
];
