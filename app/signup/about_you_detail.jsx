import {
	Box,
	Button,
	Container,
	Slider,
	Stack,
	Typography,
} from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import GenderSelector from "./gender_selector";

const AboutYouDetail = ({ onNext, inputs, setInputs }) => {
	const heightMarks = [
		{
			value: 50,
			label: "50cm",
		},
		{
			value: 250,
			label: "250cm",
		},
	];

	const weightMarks = [
		{
			value: 20,
			label: "20kg",
		},
		{
			value: 200,
			label: "200kg",
		},
	];

	const { gender, height, weight } = inputs;

	const handleInputChanged = (event) => {
		const { name, value } = event.target;
		setInputs({ ...inputs, [name]: value });
	};

	return (
		<Box>
			<Container>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
					}}
				>
					Now, what about some basic information?
				</Typography>
				<GenderSelector
					name="gender"
					selected={gender}
					onChange={handleInputChanged}
				/>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
					}}
				>
					Height
				</Typography>
				<Stack
					spacing={2}
					direction="row"
					sx={{ alignItems: "center", mb: 1, paddingY: 4 }}
				>
					<ManIcon fontSize="small" />
					<Slider
						name="height"
						value={height}
						onChange={handleInputChanged}
						valueLabelDisplay="on"
						step={1}
						min={50}
						max={250}
						marks={heightMarks}
						sx={{
							color: "rgba(6, 20, 40, 0.15)",

							"& .MuiSlider-thumb": {
								backgroundColor: "#fff",
								border: "2px solid black",
							},

							"& .MuiSlider-valueLabel": {
								background: "transparent",
								color: "black",
								fontWeight: "bold",
								top: -6,
								"&:before": {
									display: "none",
								},
							},

							"& .MuiSlider-mark": {
								marginLeft: "-1px",
							},

							"& .MuiSlider-markLabel": {
								color: "black",
								opacity: 1,
								fontSize: "0.75rem",
								top: 30,
								transform: "translateX(-50%)",
							},

							"& .MuiSlider-markLabel[data-index='0']": {
								transform: "translateX(0px)",
							},

							"& .MuiSlider-markLabel[data-index='1']": {
								transform: "translateX(-40px)",
							},
						}}
					/>

					<ManIcon fontSize="large" />
				</Stack>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
					}}
				>
					Weight
				</Typography>
				<Stack
					spacing={2}
					direction="row"
					sx={{ alignItems: "center", mb: 1, paddingY: 4 }}
				>
					<ManIcon fontSize="large" />
					<Slider
						name="weight"
						value={weight}
						onChange={handleInputChanged}
						valueLabelDisplay="on"
						step={1}
						min={20}
						max={200}
						marks={weightMarks}
						sx={{
							color: "rgba(6, 20, 40, 0.15)",

							"& .MuiSlider-thumb": {
								backgroundColor: "#fff",
								border: "2px solid black",
							},

							"& .MuiSlider-valueLabel": {
								background: "transparent",
								color: "black",
								fontWeight: "bold",
								top: -6,
								"&:before": {
									display: "none",
								},
							},

							"& .MuiSlider-mark": {
								marginLeft: "-1px",
							},

							"& .MuiSlider-markLabel": {
								color: "black",
								opacity: 1,
								fontSize: "0.75rem",
								top: 30,
								transform: "translateX(-50%)",
							},

							"& .MuiSlider-markLabel[data-index='0']": {
								transform: "translateX(0px)",
							},

							"& .MuiSlider-markLabel[data-index='1']": {
								transform: "translateX(-40px)",
							},
						}}
					/>

					<ManIcon
						sx={{
							fontSize: "35px",
							"& path": {
								transform: "scaleX(2)",
								transformOrigin: "center",
							},
						}}
					/>
				</Stack>
			</Container>
			<Container sx={{ position: "absolute", bottom: 2 }}>
				<Button
					fullWidth
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

export default AboutYouDetail;
