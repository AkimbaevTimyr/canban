import { createBrowserRouter } from "react-router-dom";
import authRouter from "../../modules/Auth/router";
import App from "../App";
import Dashobard from "../../pages/Dashboard";
import RouteListenerLayout from "../../components/RouteListenerLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <RouteListenerLayout><Dashobard /></RouteListenerLayout>
    },
    ...authRouter
])

export default router;