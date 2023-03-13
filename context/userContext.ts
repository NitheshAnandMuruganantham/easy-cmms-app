import * as React from "react";

const UserContext = React.createContext<{
  role: string;
  id: string;
  name: string;
} | null>(null);

export default UserContext;
