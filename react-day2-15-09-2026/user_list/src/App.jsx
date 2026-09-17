import Userlist from "./components/Userlist";
import "./App.css";
import AddUserModal from "./components/AddUserModal";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import About from "./Pages/About";
import AddUser from "./Pages/AddUser";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AppContextProvider from "../ContextAPI/AppContextProvider";
import ThemeProviderCustom from "./components/ThemeProvider";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <AppContextProvider>
      <ThemeProviderCustom>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <div className="main-container">
                    <div className="list">
                      <Userlist />
                    </div>
                    <div className="add-user-section">
                      <AddUserModal />
                    </div>
                  </div>
                }
              />
              <Route path="home" element={<Home />}></Route>
              <Route path="users" element={<Userlist />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProviderCustom>
    </AppContextProvider>
  );
}

export default App;
