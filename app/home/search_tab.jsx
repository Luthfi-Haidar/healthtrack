import { ArrowDropDown, BookmarkBorder, Search } from "@mui/icons-material";
import {
	Box,
	Chip,
	Container,
	InputAdornment,
	Stack,
	TextField,
} from "@mui/material";
import ContentCategory from "./content_category";

import eatingfruits from "../assets/eatingfruits.svg";
import healthydiet2 from "../assets/healthydiet2.svg";
import mind from "../assets/mind.svg";
import activity from "../assets/activity.svg";

const mockData = [
	{
		title: "Start a health plan",
		items: [
			{
				src: mind,
				alt: "Mind",
				title: "Activity",
				brief: "Get fitter in 28 days",
				length: "28 days • 4 stages",
			},
			{
				src: activity,
				alt: "Activity",
				title: "Mind",
				brief: "Feel happier in 28 days",
				length: "28 days • 4 stages",
			},
		],
	},
	{
		title: "Your daily health track",
		items: [
			{
				src: healthydiet2,
				alt: "Healthy diet",
				title: "Healthy diet",
				brief: "10 healthy lunch ideas",
				length: "9 min read",
			},
		],
	},
	{
		title: "Recommended for you",
		items: [
			{
				src: eatingfruits,
				alt: "Eat fruit",
				title: "Eating fruit and vegetables",
				brief: "5-a-day on the go",
				length: "4 min read",
			},
		],
	},
];

const SearchTab = () => {
	return (
		<Container
			sx={{
				paddingY: 2,
			}}
		>
			<TextField
				fullWidth
				variant="outlined"
				placeholder="Search our health library"
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					},
				}}
				sx={{
					backgroundColor: "#f5f5f5",
					borderRadius: 2,
				}}
			/>
			<Stack
				direction="row"
				spacing={1}
				sx={{ paddingY: 1 }}
			>
				<Chip
					label="Category"
					icon={<ArrowDropDown />}
					sx={{
						borderRadius: "16px",
						backgroundColor: "#f0f0f0",
						fontWeight: 500,
					}}
				/>
				<Chip
					label="Bookmarks"
					clickable
					icon={<BookmarkBorder />}
					sx={{
						borderRadius: "16px",
						backgroundColor: "#f0f0f0",
						fontWeight: 500,
					}}
				/>
			</Stack>
			<Box>
				{mockData.map((cat, idx) => (
					<ContentCategory
						key={idx}
						title={cat.title}
						items={cat.items}
					/>
				))}
			</Box>
		</Container>
	);
};

export default SearchTab;
