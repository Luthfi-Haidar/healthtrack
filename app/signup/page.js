"use client";

import { Box, IconButton, Slide } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Iphone13MiniFrame from "../frame";
import React from "react";
import AgreementPage from "./agreement";
import AboutYou from "./about_you";
import { useRouter } from "next/navigation";
import AboutYouDetail from "./about_you_detail";
import AccountCreation from "./account_creation";
import SettingUp from "./settingup";

const Signup = () => {
	const [inputs, setInputs] = React.useState({
		terms: false,
		reminder: false,
		privacy: false,
		name: "",
		dob: "",
		healthGoal: "",
		gender: "other",
		height: 160,
		weight: 50,
		email: "",
		password: "",
		phoneNumber: "",
	});

	React.useEffect(() => {
		const storedData = localStorage.getItem("saved_data");
		if (storedData) {
			setInputs(JSON.parse(storedData));
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem("saved_data", JSON.stringify(inputs));
	}, [inputs]);

	const router = useRouter();
	const [step, setStep] = React.useState(0);
	const [prevIsNext, setPrevIsNext] = React.useState(false);

	const handleNext = () => {
		setPrevIsNext(true);
		setStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handlePrev = () => {
		setPrevIsNext(false);
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
		<AgreementPage
			onNext={handleNext}
			inputs={inputs}
			setInputs={setInputs}
		/>,
		<AboutYou
			onNext={handleNext}
			inputs={inputs}
			setInputs={setInputs}
		/>,
		<AboutYouDetail
			onNext={handleNext}
			inputs={inputs}
			setInputs={setInputs}
		/>,
		<AccountCreation
			onNext={handleNext}
			inputs={inputs}
			setInputs={setInputs}
		/>,
		<SettingUp onReady={() => router.push("/home")} />,
	];

	return (
		<Iphone13MiniFrame>
			<Box sx={{ marginX: 1.5 }}>
				<IconButton onClick={handlePrev}>
					<ArrowCircleLeftOutlinedIcon />
				</IconButton>
			</Box>

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
						direction={
							prevIsNext
								? index < step
									? "right"
									: "left"
								: index > step
								? "left"
								: "right"
						}
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
