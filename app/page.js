import React from "react";
import Iphone13MiniFrame from "./frame";
import Carousel from "./Carousel";
import Image from "next/image";
import { Typography, Button, Container, Box, Link } from "@mui/material";
import { Link as NextLink } from "next/link";
import splash1 from "./assets/splash1.svg";
import splash2 from "./assets/splash2.svg";
import splash3 from "./assets/splash3.svg";

const carousel_items = [
	<Box
		sx={{
			paddingBottom: 4,
		}}
	>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#FFD2C7",
			}}
		>
			<Image
				src={splash1}
				alt="Splash Image 1"
				width="271"
				height="412"
			/>
		</Box>
		<Container>
			<Typography
				variant="h4"
				sx={{
					fontWeight: "bold",
					margin: 2,
				}}
			>
				Welcome to your personal health tracker
			</Typography>
		</Container>
	</Box>,
	<Box
		sx={{
			paddingBottom: 4,
		}}
	>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#FFD2C7",
			}}
		>
			<Image
				src={splash2}
				alt="Splash Image 2"
				width="271"
				height="412"
			/>
		</Box>
		<Container>
			<Typography
				variant="h4"
				sx={{
					fontWeight: "bold",
					margin: 2,
				}}
			>
				Simple plans for a healthier you
			</Typography>
		</Container>
	</Box>,
	<Box
		sx={{
			paddingBottom: 4,
		}}
	>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#FFD2C7",
			}}
		>
			<Image
				src={splash3}
				alt="Splash Image 3"
				width="271"
				height="412"
			/>
		</Box>
		<Container>
			<Typography
				variant="h4"
				sx={{
					fontWeight: "bold",
					margin: 2,
				}}
			>
				Better habits begin with better awareness
			</Typography>
		</Container>
	</Box>,
];

const App = () => {
	return (
		<Iphone13MiniFrame>
			<Carousel
				items={carousel_items}
				height={"max-content"}
			/>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: 2,
				}}
			>
				<Button
					fullWidth
					sx={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "8px",
						textTransform: "none",
					}}
					href="/signup"
				>
					<Typography
						sx={{
							fontSize: "16px",
							fontWeight: "500",
							paddingY: 0.5,
						}}
					>
						Get Started
					</Typography>
				</Button>
				<Typography
					sx={{
						fontSize: "12px",
						paddingY: 2,
					}}
				>
					Already have an account?{" "}
					<Link
						href=""
						underline="none"
						component={NextLink}
					>
						Sign in
					</Link>
					.
				</Typography>
			</Container>
		</Iphone13MiniFrame>
	);
};

export default App;
