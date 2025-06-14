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
	LinearProgress,
	Button,
} from "@mui/material";

const getPasswordStrength = (password) => {
	let score = 0;
	if (!password) return 0;
	if (password.length >= 8) score += 1;
	if (/[A-Z]/.test(password)) score += 1;
	if (/[0-9]/.test(password)) score += 1;
	if (/[^A-Za-z0-9]/.test(password)) score += 1;
	return (score / 4) * 100;
};

const getStrengthLabel = (score) => {
	if (score < 40) return "Weak";
	if (score < 80) return "Medium";
	return "Strong";
};

const getStrengthColor = (score) => {
	if (score < 40) return "error";
	if (score < 80) return "warning";
	return "success";
};

const AccountCreation = ({ onNext, inputs, setInputs }) => {
	const [repeatPassword, setRepeatPassword] = React.useState("");
	const [touched, setTouched] = React.useState({
		email: false,
		password: false,
		repeatPassword: false,
		phoneNumber: false,
	});

	const handleBlur = (event) => {
		const { name } = event.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
	};

	const handleInputChanged = (event) => {
		const { name, value } = event.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	const handleRepeatPasswordChange = (event) => {
		setRepeatPassword(event.target.value);
	};

	const { email, password, phoneNumber = "" } = inputs;

	const phoneEmpty = phoneNumber === "";
	const phoneInvalidLength = phoneNumber.length < 10 || phoneNumber.length > 13;
	const phoneNonDigits = /[^0-9]/.test(phoneNumber);
	const phoneInvalid = phoneEmpty || phoneInvalidLength || phoneNonDigits;

	const emailFormatInvalid = !/^.+@.+\..+$/.test(email);
	const emailEmpty = email === "";
	const emailInvalid = emailFormatInvalid || emailEmpty;

	const passwordEmpty = password === "";
	const passwordWeak = getPasswordStrength(password) < 40;
	const passwordError = passwordEmpty || passwordWeak;

	const passwordsDoNotMatch = password !== repeatPassword;
	const showPasswordMismatch = touched.repeatPassword && passwordsDoNotMatch;

	const strengthScore = getPasswordStrength(password);
	const strengthLabel = getStrengthLabel(strengthScore);
	const strengthColor = getStrengthColor(strengthScore);

	const error =
		passwordError || emailInvalid || passwordsDoNotMatch || phoneInvalid;

	return (
		<Box>
			<Container>
				<Typography sx={{ fontWeight: "medium", fontSize: 24 }}>
					Great - let's create your account
				</Typography>
				<Typography sx={{ fontWeight: "light", fontSize: 13, py: 2 }}>
					Sign up now, so you can save every step of your health journey - and
					sign in from any device
				</Typography>
				<FormGroup>
					<FormControl
						fullWidth
						error={emailInvalid}
					>
						<TextField
							required
							name="email"
							label="Your Email"
							type="email"
							value={email}
							error={touched.email && emailInvalid}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							slotProps={{ inputLabel: { shrink: true } }}
							sx={{ height: 55 }}
						/>
						<Collapse in={touched.email && emailEmpty}>
							<FormHelperText>Your email cannot be empty.</FormHelperText>
						</Collapse>
						<Collapse in={touched.email && emailFormatInvalid && !emailEmpty}>
							<FormHelperText>Your email is not a valid email.</FormHelperText>
						</Collapse>
					</FormControl>

					<FormControl
						fullWidth
						sx={{ mt: 3 }}
						error={touched.phoneNumber && phoneInvalid}
					>
						<TextField
							required
							name="phoneNumber"
							label="Your Phone Number"
							type="tel"
							value={phoneNumber}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							error={touched.phoneNumber && phoneInvalid}
							slotProps={{
								inputLabel: { shrink: true },
								htmlInput: { inputMode: "numeric", pattern: "[0-9]*" },
							}}
							sx={{ height: 55 }}
						/>
						<Collapse in={touched.phoneNumber && phoneEmpty}>
							<FormHelperText>
								Your phone number cannot be empty.
							</FormHelperText>
						</Collapse>
						<Collapse in={touched.phoneNumber && !phoneEmpty && phoneNonDigits}>
							<FormHelperText>Only numbers are allowed.</FormHelperText>
						</Collapse>
						<Collapse
							in={
								touched.phoneNumber &&
								!phoneEmpty &&
								phoneInvalidLength &&
								!phoneNonDigits
							}
						>
							<FormHelperText>Must be 10 to 13 digits long.</FormHelperText>
						</Collapse>
					</FormControl>

					<FormControl
						fullWidth
						sx={{ mt: 3 }}
						error={passwordError}
					>
						<TextField
							required
							name="password"
							label="Create a password"
							type="password"
							value={password}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							slotProps={{ inputLabel: { shrink: true } }}
							sx={{ height: 55 }}
						/>
						<Collapse in={!passwordEmpty}>
							<Box sx={{ mt: 1 }}>
								<Typography
									variant="caption"
									sx={{ fontWeight: "bold", color: "black", mb: 0.5 }}
								>
									Strength: {strengthLabel}
								</Typography>
								<LinearProgress
									variant="determinate"
									value={strengthScore}
									color={strengthColor}
									sx={{
										height: 6,
										borderRadius: 4,
										backgroundColor: "rgba(6, 20, 40, 0.15)",
									}}
								/>
							</Box>
						</Collapse>
						<Collapse in={touched.password && passwordEmpty}>
							<FormHelperText>Your password cannot be empty.</FormHelperText>
						</Collapse>
						<Collapse in={touched.password && !passwordEmpty && passwordWeak}>
							<FormHelperText>Your password is too weak!.</FormHelperText>
						</Collapse>
					</FormControl>

					<FormControl
						fullWidth
						sx={{ mt: 3, paddingY: 2 }}
						error={showPasswordMismatch}
					>
						<TextField
							required
							name="repeatPassword"
							label="Repeat your password"
							type="password"
							value={repeatPassword}
							onChange={handleRepeatPasswordChange}
							onFocus={handleBlur}
							error={showPasswordMismatch}
							slotProps={{ inputLabel: { shrink: true } }}
							sx={{ height: 55 }}
						/>
						<Collapse in={showPasswordMismatch}>
							<FormHelperText>Passwords do not match.</FormHelperText>
						</Collapse>
					</FormControl>
				</FormGroup>
				<Button
					fullWidth
					variant="contained"
					onClick={onNext}
					disabled={error}
					sx={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "8px",
						textTransform: "none",
					}}
				>
					<Typography
						sx={{ fontSize: "16px", fontWeight: "500", paddingY: 0.5 }}
					>
						Let's go!
					</Typography>
				</Button>
			</Container>
		</Box>
	);
};

export default AccountCreation;
