import * as React from "react";

const RefetchContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([] as any);

export default RefetchContext;
