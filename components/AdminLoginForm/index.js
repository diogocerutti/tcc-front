"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../../app/api/admin";

export default function AdminLoginForm({ type }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="black">
          LOGIN ADMIN
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            if (type === "login") {
              loginAdmin(
                e.currentTarget.email.value,
                e.currentTarget.password.value
              ).then((res) => {
                // ele vai sempre entrar no .then(), mesmo que haja erro (não sei pq)
                if (res.name === "AxiosError") {
                  console.log(res.response.data.msg); // mensagem de erro do BACK
                  setLoading(false);
                } else {
                  console.log(res);
                  router.refresh();
                  router.push("/protected");
                }
              });
            } else {
              console.log("register!!!");
            }
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
