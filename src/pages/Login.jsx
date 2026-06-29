import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await login(data);
      navigate("/dashboard");

      toast.success("Login successful!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2563eb 0%,#4f46e5 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box color="white" flex={1}>
            <Typography variant="h2" fontWeight={700}>
              Task Tracker
            </Typography>

            <Typography mt={3} variant="h5" sx={{ opacity: 0.9 }}>
              Organize your work.
            </Typography>

            <Typography mt={1} variant="h5">
              Track your progress.
            </Typography>

            <Typography mt={1} variant="h5">
              Stay productive.
            </Typography>
          </Box>

          <Card
            sx={{
              width: 430,
              borderRadius: 4,
              boxShadow: 12,
            }}
          >
            <CardContent sx={{ p: 5 }}>
              <Typography variant="h4" textAlign="center" mb={4}>
                Welcome Back
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                  <TextField
                    label="Email"
                    fullWidth
                    {...register("email", {
                      required: "Email is required",
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />

                  <TextField
                    label="Password"
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </Button>

                  <Typography textAlign="center">
                    Don't have an account?{" "}
                    <Link component={RouterLink} to="/register">
                      Register
                    </Link>
                  </Typography>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default Login;
