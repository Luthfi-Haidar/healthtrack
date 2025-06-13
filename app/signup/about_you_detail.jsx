import { Box, Container, Typography } from "@mui/material";

const AboutYouDetail = ({ onNext }) => {
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
			</Container>
		</Box>
	);
};

export default AboutYouDetail;
