import React, { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppContextProvider({children}) {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div>
      <AppContext.Provider
        value={{ lightMode, setLightMode }}
      >

        {children}
      </AppContext.Provider>
    </div>
  );
}
