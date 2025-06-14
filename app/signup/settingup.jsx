import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";

const SettingUp = ({ onReady }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			const saved = JSON.parse(localStorage.getItem("saved_data")) || {};

			const newAccount = {
				id: Date.now(),
				...saved,
			};

			const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

			accounts.push(newAccount);

			localStorage.setItem("accounts", JSON.stringify(accounts));
			localStorage.setItem("active_account", String(newAccount.id));

			localStorage.removeItem("saved_data");

			onReady?.();
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
			}}
		>
			<Container>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: 24,
						textAlign: "center",
					}}
				>
					Getting ready...
				</Typography>
				<Typography
					sx={{
						fontWeight: "light",
						fontSize: 13,
						paddingY: 2,
						textAlign: "center",
					}}
				>
					Greater health and happiness on the way
				</Typography>
			</Container>
		</Box>
	);
};

export default SettingUp;
