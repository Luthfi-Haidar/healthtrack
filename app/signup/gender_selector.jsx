import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box, Typography } from "@mui/material";

const GenderSelector = ({ selected, onChange, name = "gender" }) => {
	const options = [
		{ value: "male", label: "Male", icon: <ManIcon fontSize="large" /> },
		{ value: "female", label: "Female", icon: <WomanIcon fontSize="large" /> },
		{
			value: "other",
			label: "Other / Prefer not to say",
			icon: <HelpOutlineIcon fontSize="large" />,
		},
	];

	const handleSelect = (value) => {
		onChange?.({
			target: {
				name,
				value,
			},
		});
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap={2}
			flexWrap="wrap"
			mt={2}
		>
			{options.map((option) => (
				<Box
					key={option.value}
					onClick={() => handleSelect(option.value)}
					sx={{
						border:
							selected === option.value ? "2px solid black" : "1px solid #ccc",
						borderRadius: 2,
						padding: 2,
						cursor: "pointer",
						position: "relative",
						width: 120,
						textAlign: "center",
						boxShadow: selected === option.value ? 3 : 1,
						bgcolor: selected === option.value ? "#f0f0f0" : "white",
					}}
				>
					{option.icon}

					<Typography sx={{ marginTop: 1, fontSize: 13 }}>
						{option.label}
					</Typography>

					{selected === option.value && (
						<CheckCircleIcon
							sx={{
								position: "absolute",
								top: 8,
								right: 8,
								fontSize: 20,
							}}
						/>
					)}
				</Box>
			))}
		</Box>
	);
};

export default GenderSelector;
