// PrivateRoute.tsx in v6

import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/signin" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
