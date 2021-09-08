import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Conponent, ...rest }) {
    const { currentUser } = useAuth();

    return (
        currentUser ? (
            <Route {...rest}>{(props) => <Conponent {...props} />}</Route>
        )
            :
            (
                <Redirect to="/login" />
            )
    )
}