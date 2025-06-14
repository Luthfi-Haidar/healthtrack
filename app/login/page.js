"use client";

import React from "react";
import {
	Box,
	Container,
	Typography,
	FormGroup,
	FormControl,
	TextField,
	Collapse,
	FormHelperText,
	Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Iphone13MiniFrame from "../frame";

const LoginForm = () => {
	const router = useRouter();

	const [inputs, setInputs] = React.useState({
		email: "",
		password: "",
	});

	const [touched, setTouched] = React.useState({
		email: false,
		password: false,
	});

	const [loginError, setLoginError] = React.useState(false);

	const handleInputChanged = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
		setLoginError(false); // reset login error on typing
	};

	const handleBlur = (e) => {
		const { name } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
	};

	const handleLogin = () => {
		const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
		const matched = accounts.find(
			(acc) =>
				acc.email === inputs.email.trim() && acc.password === inputs.password
		);

		if (matched) {
			localStorage.setItem("active_account", String(matched.id));
			router.push("./home");
		} else {
			setLoginError(true);
		}
	};

	const emailEmpty = inputs.email.trim() === "";
	const passwordEmpty = inputs.password === "";

	const hasError = emailEmpty || passwordEmpty;

	return (
		<Iphone13MiniFrame>
			<Box>
				<Container>
					<Typography sx={{ fontWeight: "medium", fontSize: 24 }}>
						Welcome Back
					</Typography>
					<Typography sx={{ fontWeight: "light", fontSize: 13, py: 2 }}>
						Sign in to continue your health journey
					</Typography>

					<FormGroup>
						<FormControl
							fullWidth
							error={touched.email && emailEmpty}
						>
							<TextField
								required
								name="email"
								label="Email"
								type="email"
								value={inputs.email}
								onChange={handleInputChanged}
								onBlur={handleBlur}
								error={touched.email && emailEmpty}
								slotProps={{ inputLabel: { shrink: true } }}
								sx={{ height: 55 }}
							/>
							<Collapse in={touched.email && emailEmpty}>
								<FormHelperText>Email cannot be empty.</FormHelperText>
							</Collapse>
						</FormControl>

						<FormControl
							fullWidth
							sx={{ mt: 3 }}
							error={touched.password && passwordEmpty}
						>
							<TextField
								required
								name="password"
								label="Password"
								type="password"
								value={inputs.password}
								onChange={handleInputChanged}
								onBlur={handleBlur}
								error={touched.password && passwordEmpty}
								slotProps={{ inputLabel: { shrink: true } }}
								sx={{ height: 55 }}
							/>
							<Collapse in={touched.password && passwordEmpty}>
								<FormHelperText>Password cannot be empty.</FormHelperText>
							</Collapse>
						</FormControl>

						{loginError && (
							<Box sx={{ mt: 2 }}>
								<Typography
									variant="body2"
									color="error"
								>
									Invalid email or password.
								</Typography>
							</Box>
						)}
					</FormGroup>

					<Button
						fullWidth
						variant="contained"
						onClick={handleLogin}
						disabled={hasError}
						sx={{
							mt: 3,
							backgroundColor: "black",
							color: "white",
							borderRadius: "8px",
							textTransform: "none",
						}}
					>
						<Typography sx={{ fontSize: "16px", fontWeight: "500", py: 0.5 }}>
							Sign In
						</Typography>
					</Button>
				</Container>
			</Box>
		</Iphone13MiniFrame>
	);
};

export default LoginForm;
