import * as React from "react";

const AuthContext = React.createContext<
  | "LOADING"
  | "SIGN_OUT"
  | "UNAUTHORISED"
  | "SESSION_CREATED"
  | "PROFILE_INCOMPLETE"
  | "SIGN_OUT"
  | "REFRESH_SESSION"
>("LOADING");

export default AuthContext;
