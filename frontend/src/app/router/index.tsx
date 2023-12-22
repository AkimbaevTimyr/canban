import { createBrowserRouter } from "react-router-dom";
import authRouter from "../../modules/Auth/router";
import App from "../App";
import Dashobard from "../../pages/Dashboard";
import RouteListenerLayout from "../../components/RouteListenerLayout";
import Inventory from "../../pages/Inventory/Index";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <RouteListenerLayout><Dashobard /></RouteListenerLayout>
    },
    {
        path: '/inventory',
        element: <RouteListenerLayout><Inventory /></RouteListenerLayout>
    },
    ...authRouter
])

export default router;