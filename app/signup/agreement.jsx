"use client";

import {
	Box,
	Button,
	Checkbox,
	Collapse,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	Link,
	Typography,
} from "@mui/material";
import { Link as NextLink } from "next/link";
import React from "react";

const AgreementPage = ({ onNext, inputs, setInputs }) => {
	const handleCheckedChange = (event) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.checked,
		});
	};

	const { terms, reminder, privacy } = inputs;
	// length of the filter will only be 3 if all three checklist are checked
	const error = [terms, reminder, privacy].filter((v) => v).length !== 3;

	return (
		<Box>
			<Container>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
					}}
				>
					Before we get started
				</Typography>
				<Typography
					sx={{
						fontWeight: "light",
						fontSize: 13,
						paddingY: 2,
					}}
				>
					We want you to know we're here for you, every step of the way. That
					includes looking after you (and your data).
				</Typography>
				<Link
					href=""
					underline="none"
					component={NextLink}
				>
					<Typography
						sx={{
							fontSize: 13,
						}}
					>
						Read how we protect your data
					</Typography>
				</Link>
			</Container>
			<Container
				sx={{
					position: "absolute",
					bottom: 2,
				}}
			>
				<Typography
					sx={{
						fontSize: 13,
						fontWeight: "bold",
					}}
				>
					Ready for greater wellbeing?
				</Typography>
				<FormGroup
					sx={{
						padding: 2,
					}}
				>
					<FormControl error={error}>
						<FormControlLabel
							control={
								<Checkbox
									checked={terms}
									onChange={handleCheckedChange}
									name="terms"
								/>
							}
							label={
								<Typography
									sx={{
										fontSize: 13,
									}}
								>
									Yes, I'm over 16 and i accept your{" "}
									<Link
										href=""
										underline="none"
										component={NextLink}
									>
										terms
									</Link>
									.
								</Typography>
							}
							sx={{
								paddingY: 1,
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={reminder}
									onChange={handleCheckedChange}
									name="reminder"
								/>
							}
							label={
								<Typography
									sx={{
										fontSize: 13,
									}}
								>
									Yes, I want to receive daily reminders and health tips to
									support my wellness journey.
								</Typography>
							}
							sx={{
								paddingY: 1,
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={privacy}
									onChange={handleCheckedChange}
									name="privacy"
								/>
							}
							label={
								<Typography
									sx={{
										fontSize: 13,
									}}
								>
									Yes, HealthTrack can process my health data to help me manage
									my my health with recommendations, information and care
									options, as described in the{" "}
									<Link
										href=""
										underline="none"
										component={NextLink}
									>
										Privacy Policy
									</Link>
									.
								</Typography>
							}
							sx={{
								paddingY: 1,
							}}
						/>
						<Collapse in={error}>
							<FormHelperText>
								To guarantee your wellbeing, we need you to check all the
								options above.
							</FormHelperText>
						</Collapse>
					</FormControl>
				</FormGroup>
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
						I agree - let's go!
					</Typography>
				</Button>
			</Container>
		</Box>
	);
};

export default AgreementPage;
