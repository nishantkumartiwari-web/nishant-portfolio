import Userlist from "./components/Userlist";
import "./App.css";
import ComboBox from "./components/ComboBox";
import Button from "@mui/material/Button";
import AddUser from "./components/AddUser";
import AddUserModal from "./components/AddUserModal";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import LightSwitch from "./components/ThemeSwitch";
import { useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar lightMode={lightMode} setLightMode={setLightMode} />

      <div className="main-container">
        <div className="list">
          <Userlist />
        </div>
        <div className="add-user-section">
          <AddUserModal />
        </div>

        {/* <AddUser /> */}

        {/*   <ComboBox/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
