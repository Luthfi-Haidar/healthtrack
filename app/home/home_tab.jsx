import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dailylog from "../assets/dailylog.svg";
import healthydiet from "../assets/healthydiet.svg";
import chartmood from "../assets/chartmood.svg";
import chartactivitylevel from "../assets/chartactivitylevel.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
	Container,
	Typography,
	Accordion,
	AccordionSummary,
	Box,
	AccordionDetails,
	Card,
	CardContent,
} from "@mui/material";

const HomeTab = () => {
	return (
		<Container
			sx={{
				paddingY: 2,
			}}
		>
			<Typography
				sx={{
					fontWeight: "bold",
					fontSize: 16,
					paddingBottom: 1,
				}}
			>
				Make today count
			</Typography>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
					<Box>
						<Typography
							sx={{
								fontWeight: "bold",
								fontSize: 12,
							}}
						>
							You've ticked off all today's to-dos
						</Typography>
						<Typography
							sx={{
								fontSize: 12,
							}}
						>
							Come back tommorow - small daily steps can create big lasting
							changes.
						</Typography>
					</Box>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							paddingBottom: 1,
						}}
					>
						<Image
							src={dailylog}
							alt="Daily Log Logo"
						/>
						<Box
							sx={{
								paddingX: 2,
								flex: 1,
							}}
						>
							<Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
								Daily Logging
							</Typography>
							<Typography sx={{ fontSize: 12 }}>
								Check in with yourself
							</Typography>
							<Typography sx={{ fontSize: 12, fontWeight: "light" }}>
								Tap to track
							</Typography>
						</Box>
						<CheckCircleIcon color="success" />
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Image
							src={healthydiet}
							alt="Healthy Diet Logo"
						/>
						<Box
							sx={{
								paddingX: 2,
								flex: 1,
							}}
						>
							<Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
								Healthy diet
							</Typography>
							<Typography sx={{ fontSize: 12 }}>
								6 heart-friendly foods to include in your diet
							</Typography>
							<Typography sx={{ fontSize: 12, fontWeight: "light" }}>
								4 min read
							</Typography>
						</Box>
						<CheckCircleIcon color="disabled" />
					</Box>
				</AccordionDetails>
			</Accordion>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					paddingTop: 2,
					paddingBottom: 1,
				}}
			>
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
					}}
				>
					Your trackers
				</Typography>

				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
					}}
				>
					<MoreHorizIcon />
				</Typography>
			</Box>

			<Card
				sx={{
					marginBottom: 1,
				}}
			>
				<CardContent>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography sx={{ fontSize: 12 }}>Mood</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
								Good
							</Typography>
							<Typography sx={{ fontSize: 12 }}>4 Hours ago</Typography>
						</Box>
						<Box
							sx={{
								height: "100%",
								alignItems: "center",
							}}
						>
							<Typography sx={{ fontSize: 12, fontWeight: "light" }}>
								See more &gt;
							</Typography>
							<Image
								src={chartmood}
								alt="Chart of the mood"
							/>
						</Box>
					</Box>
				</CardContent>
			</Card>

			<Card
				sx={{
					marginY: 1,
				}}
			>
				<CardContent>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography sx={{ fontSize: 12 }}>Activity levels</Typography>
							<Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
								Normal
							</Typography>
							<Typography sx={{ fontSize: 12 }}>6 Hours ago</Typography>
						</Box>
						<Box
							sx={{
								height: "100%",
								alignItems: "center",
							}}
						>
							<Typography sx={{ fontSize: 12, fontWeight: "light" }}>
								See more &gt;
							</Typography>
							<Image
								src={chartactivitylevel}
								alt="Chart of the mood"
							/>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
};

export default HomeTab;
