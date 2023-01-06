import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const loginStatus = useSelector((state) => state.login.loginstatus);
  if (!loginStatus) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
