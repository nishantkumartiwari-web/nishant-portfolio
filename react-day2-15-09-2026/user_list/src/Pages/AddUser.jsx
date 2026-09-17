import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddUserModal from "../components/AddUserModal";

export default function AddUser() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 8,
        px: 4,
      }}
    >
      <Box sx={{ maxWidth: 420 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Add a New User
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          All your users&apos; data in one place. You can add a user by
          clicking &quot;Add User&quot; and filling in their details.
        </Typography>
      </Box>

      <Box>
        <AddUserModal />
      </Box>
    </Box>
  );
}
