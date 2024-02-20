import * as React from "react";

const UserContext = React.createContext<
  | [
      {
        role: string;
        id: string;
        extra_roles: string[];
        name: string;
        block: {
          name: string;
          location: string;
        };
      },
      React.Dispatch<
        React.SetStateAction<{
          role: string;
          id: string;
          extra_roles: string[];
          name: string;
        }>
      >
    ]
>(null as any);

export default UserContext;
