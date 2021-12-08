import { Navigate } from "react-router";

const NoAuth = (props) => {
  return !props.auth ? props.children : <Navigate to="/home" />;
};

export default NoAuth;
