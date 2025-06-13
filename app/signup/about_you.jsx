import {
	Box,
	Button,
	Collapse,
	Container,
	FormControl,
	FormGroup,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

const AboutYou = ({ onNext }) => {
	const [inputs, setInputs] = React.useState({
		name: "",
		dob: new Date("invalid date"),
		healthGoal: "",
	});

	const handleInputChanged = (event) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value,
		});
	};

	const { name, dob, healthGoal } = inputs;
	const validateName = name === "" || /\d/.test(name);
	const validateDob =
		isNaN(new Date(dob).getTime()) ||
		Math.abs(new Date().getFullYear() - new Date(dob).getFullYear()) < 16 ||
		Math.abs(new Date().getFullYear() - new Date(dob).getFullYear()) > 100;
	const validateHealthGoal = healthGoal === "";
	const error = validateName || validateDob || validateHealthGoal;

	return (
		<Box>
			<Container>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
					}}
				>
					Ok, tell us about yourself
				</Typography>
				<Typography
					sx={{
						fontWeight: "light",
						fontSize: 13,
						paddingY: 2,
					}}
				>
					That way, we can make our app all about you
				</Typography>
				<FormGroup>
					<FormControl
						error={error}
						fullWidth
					>
						<TextField
							required
							name="name"
							label="Your name"
							value={name}
							error={validateName}
							onChange={handleInputChanged}
							sx={{
								height: 55,
							}}
							slotProps={{
								inputLabel: {
									shrink: true,
								},
							}}
						/>
						<Collapse
							in={validateName}
							sx={{
								paddingY: 2,
							}}
						>
							<FormHelperText>
								Your name cannot be empty nor contains any number.
							</FormHelperText>
						</Collapse>
						<TextField
							name="dob"
							label="Date of Birth"
							type="date"
							value={dob}
							onChange={handleInputChanged}
							error={validateDob}
							slotProps={{
								inputLabel: {
									shrink: true,
								},
							}}
						/>
						<Collapse
							in={validateDob}
							sx={{
								paddingY: 2,
							}}
						>
							<FormHelperText>
								This app is only suitable for people between the ages of 16 to
								100.
							</FormHelperText>
						</Collapse>
					</FormControl>
					<FormControl
						fullWidth
						error={validateHealthGoal}
					>
						<InputLabel id="health-goal-label">Main health goal</InputLabel>
						<Select
							labelId="health-goal-label"
							id="health-goal"
							name="healthGoal"
							value={healthGoal}
							onChange={handleInputChanged}
							label="Main health goal"
							error={validateHealthGoal}
						>
							<MenuItem value="Lose weight">Lose weight</MenuItem>
							<MenuItem value="Maintain weight">Maintain weight</MenuItem>
							<MenuItem value="Sleep better">Sleep better</MenuItem>
							<MenuItem value="General wellbeing">General wellbeing</MenuItem>
						</Select>
						<Collapse
							in={validateHealthGoal}
							sx={{
								paddingY: 2,
							}}
						>
							<FormHelperText>Please select a main goal.</FormHelperText>
						</Collapse>
					</FormControl>
				</FormGroup>
			</Container>
			<Container
				sx={{
					position: "absolute",
					bottom: 2,
				}}
			>
				<Button
					fullWidth
					disabled={error}
					variant="contained"
					onClick={onNext}
					sx={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "8px",
						textTransform: "none",
					}}
				>
					<Typography
						sx={{
							fontSize: "16px",
							fontWeight: "500",
							paddingY: 0.5,
						}}
					>
						Continue
					</Typography>
				</Button>
			</Container>
		</Box>
	);
};

export default AboutYou;
