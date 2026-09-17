import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const features = [
  {
    icon: <GroupIcon fontSize="large" color="primary" />,
    title: "Browse Users",
    description: "View every user in a clean, scannable list at a glance.",
  },
  {
    icon: <PersonAddIcon fontSize="large" color="primary" />,
    title: "Add Users",
    description: "Quickly add new users through a simple modal form.",
  },
  {
    icon: <DarkModeIcon fontSize="large" color="primary" />,
    title: "Light & Dark Mode",
    description: "Switch themes anytime with the toggle in the navbar.",
  },
];

export default function About() {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 3, py: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
        About This App
      </Typography>
      <Typography variant="body1" sx={{ mb: 5, color: "text.secondary" }}>
        User List is a small practice project for learning React Router
        layouts and MUI. It lets you browse, add, and manage a list of
        users, with routing and theming built on top of the Context API.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {features.map((feature) => (
          <Card key={feature.title} variant="outlined">
            <CardContent sx={{ textAlign: "center" }}>
              {feature.icon}
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
