import * as React from "react";

const UserContext = React.createContext<{
  role: string;
  id: string;
  extra_roles: string[];
  name: string;
} | null>(null);

export default UserContext;
