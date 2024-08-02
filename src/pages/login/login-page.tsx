import React, { useState, ChangeEvent, FormEvent, } from "react";
// import div from "@mui/material/div";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Loginpage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const navigate=useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      hasError = true;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // Perform login action
      navigate('/dashboard')
      console.log('Form submitted with:', { email, password });
    }
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        fullWidth
        variant="outlined"
        margin="normal"
        value={email}
        onChange={handleEmailChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        margin="normal"
        value={password}
        onChange={handlePasswordChange}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Login
      </Button>
    </form>
  );

  return (
    <>
      <div >
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
            <Typography variant="h4">Please Login</Typography>

            <div >
              <div>
                <div>{renderForm}</div>
                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    OR
                  </Typography>
                </Divider>

                <div>
                  <Button fullWidth variant="contained">
                    Login using SSO
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Stack>
      </div>
    </>
  );
}

export default Loginpage;
