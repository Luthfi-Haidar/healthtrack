"use client";

import { Box, IconButton, Slide } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Iphone13MiniFrame from "../frame";
import React from "react";
import AgreementPage from "./agreement";
import AboutYou from "./about_you";
import { useRouter } from "next/navigation";
import AboutYouDetail from "./about_you_detail";

const Signup = () => {
	const router = useRouter();
	const [step, setStep] = React.useState(0);

	const handleNext = () => {
		setStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handlePrev = () => {
		setStep((prev) => {
			if (prev - 1 < 0) {
				router.push("/");
				return 0;
			} else {
				return Math.max(prev - 1, 0);
			}
		});
	};

	const steps = [
		<AgreementPage onNext={handleNext} />,
		<AboutYou onNext={handleNext} />,
		<AboutYouDetail />,
	];

	return (
		<Iphone13MiniFrame>
			<Box sx={{ marginX: 1.5 }}>
				<IconButton onClick={handlePrev}>
					<ArrowCircleLeftOutlinedIcon />
				</IconButton>
			</Box>

			{/* Slide transition for steps */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					height: "100%",
					width: "100%",
				}}
			>
				{steps.map((content, index) => (
					<Slide
						key={index}
						direction={index < step ? "right" : "left"}
						in={index === step}
						timeout={400}
						mountOnEnter
						unmountOnExit
					>
						<Box
							sx={{
								position: "absolute",
								width: "100%",
								height: "100%",
								top: 0,
								left: 0,
							}}
						>
							{content}
						</Box>
					</Slide>
				))}
			</Box>
		</Iphone13MiniFrame>
	);
};

export default Signup;
