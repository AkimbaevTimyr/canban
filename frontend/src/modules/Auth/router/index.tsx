import Login from "../Login";
import SignUp from "../SignUp";

const authRouter = [
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default authRouter;