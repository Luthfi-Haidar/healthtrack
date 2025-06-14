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

const AboutYou = ({ onNext, inputs, setInputs }) => {
	const [touched, setTouched] = React.useState({
		name: false,
		dob: false,
		healthGoal: false,
	});

	const handleInputChanged = (event) => {
		const { name, value } = event.target;
		setInputs({ ...inputs, [name]: value });
	};

	const handleBlur = (event) => {
		const { name } = event.target;
		setTouched({ ...touched, [name]: true });
	};

	const { name, dob, healthGoal } = inputs;

	const nameEmpty = name.trim() === "";
	const nameHasNumber = /\d/.test(name);
	const nameNotStartsWithCapital =
		!nameEmpty && name[0] === name[0].toLowerCase();
	const nameError = nameEmpty || nameHasNumber || nameNotStartsWithCapital;

	const parsedDob = new Date(dob);
	const dobInvalid = isNaN(parsedDob.getTime());
	const dobAge = new Date().getFullYear() - parsedDob.getFullYear();
	const dobOutOfRange = dobAge < 16 || dobAge > 100;
	const dobError = dobInvalid || dobOutOfRange;

	const healthGoalEmpty = healthGoal === "";

	const error = nameError || dobError || healthGoalEmpty;

	return (
		<Box>
			<Container>
				<Typography sx={{ fontWeight: "medium", fontSize: 24 }}>
					Ok, tell us about yourself
				</Typography>
				<Typography sx={{ fontWeight: "light", fontSize: 13, paddingY: 2 }}>
					That way, we can make our app all about you
				</Typography>

				<FormGroup>
					<FormControl
						fullWidth
						error={touched.name && error}
					>
						<TextField
							required
							name="name"
							label="Your name"
							value={name}
							error={touched.name && nameError}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							slotProps={{ inputLabel: { shrink: true } }}
							sx={{ height: 55 }}
						/>
						<Collapse in={touched.name && nameEmpty}>
							<FormHelperText>Your name cannot be empty.</FormHelperText>
						</Collapse>
						<Collapse in={touched.name && nameHasNumber}>
							<FormHelperText>Your name cannot contain numbers.</FormHelperText>
						</Collapse>
						<Collapse
							in={touched.name && !nameHasNumber && nameNotStartsWithCapital}
						>
							<FormHelperText>
								Your name must starts with a capital letter.
							</FormHelperText>
						</Collapse>
					</FormControl>

					<FormControl
						fullWidth
						error={touched.dob && error}
						sx={{ marginTop: 2 }}
					>
						<TextField
							name="dob"
							label="Date of Birth"
							type="date"
							value={dob}
							error={touched.dob && dobError}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							slotProps={{ inputLabel: { shrink: true } }}
						/>
						<Collapse in={touched.dob && dobInvalid}>
							<FormHelperText>Invalid date.</FormHelperText>
						</Collapse>
						<Collapse in={touched.dob && !dobInvalid && dobOutOfRange}>
							<FormHelperText>
								You must be between 16 and 100 years old to use this app.
							</FormHelperText>
						</Collapse>
					</FormControl>

					<FormControl
						fullWidth
						error={touched.healthGoal && healthGoalEmpty}
						sx={{ marginTop: 2 }}
					>
						<InputLabel id="health-goal-label">Main health goal</InputLabel>
						<Select
							labelId="health-goal-label"
							id="health-goal"
							name="healthGoal"
							value={healthGoal}
							onChange={handleInputChanged}
							onBlur={handleBlur}
							label="Main health goal"
						>
							<MenuItem value="">Select...</MenuItem>
							<MenuItem value="Lose weight">Lose weight</MenuItem>
							<MenuItem value="Maintain weight">Maintain weight</MenuItem>
							<MenuItem value="Sleep better">Sleep better</MenuItem>
							<MenuItem value="General wellbeing">General wellbeing</MenuItem>
						</Select>
						<Collapse in={touched.healthGoal && healthGoalEmpty}>
							<FormHelperText>Please select a health goal.</FormHelperText>
						</Collapse>
					</FormControl>
				</FormGroup>
			</Container>

			<Container sx={{ position: "absolute", bottom: 2 }}>
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
						sx={{ fontSize: "16px", fontWeight: "500", paddingY: 0.5 }}
					>
						Continue
					</Typography>
				</Button>
			</Container>
		</Box>
	);
};

export default AboutYou;
