import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Layout() {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}
