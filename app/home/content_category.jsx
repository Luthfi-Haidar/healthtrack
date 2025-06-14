import { Box, Typography, Stack } from "@mui/material";
import ContentCard from "./content_card";

const ContentCategory = ({ title, items }) => {
	return (
		<Box>
			<Typography
				variant="h6"
				sx={{ fontWeight: "bold", paddingBottom: 1 }}
			>
				{title}
			</Typography>
			<Stack
				direction="row"
				spacing={2}
				overflow="auto"
				sx={{
					paddingBottom: 2,
					marginBottom: 2,
				}}
			>
				{items.map((item, idx) => (
					<ContentCard
						key={idx}
						{...item}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default ContentCategory;
