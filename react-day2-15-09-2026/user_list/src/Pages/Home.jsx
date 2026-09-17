import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import hero from "../assets/hero-team.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 800, mb: 2, letterSpacing: 1 }}
      >
        Welcome to User DB
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, maxWidth: 500, fontWeight: 400 }}>
        Manage and explore your users in one clean, simple place.
      </Typography>
      <Button
        component={Link}
        to="/users"
        variant="contained"
        size="large"
        sx={{ fontWeight: 700 }}
      >
        Get Started
      </Button>
    </Box>
  );
}
