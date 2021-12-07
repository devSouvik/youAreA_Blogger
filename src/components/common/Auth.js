import { Navigate } from "react-router";

const Auth = (props) => {
  console.log(props);
  return props.auth ? props.children : <Navigate to="/signin" />;
};

export default Auth;
