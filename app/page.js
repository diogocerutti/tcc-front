import styles from "./page.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { main } from "../db/admin";

export default async function Home() {
  const data = await main();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Don'Ana
          </Typography>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
        {data.map((admin, index) => {
          return (
            <div key={index}>
              <h2>name: {admin.name}</h2>
              <h2>username: {admin.username}</h2>
              <h2>password: {admin.password}</h2>
              <h2>status: {admin.status}</h2>

              <hr />
            </div>
          );
        })}
      </AppBar>
    </Box>
  );
}
