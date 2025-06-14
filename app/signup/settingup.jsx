import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";

const SettingUp = ({ onReady }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			// Simulate pulling from localStorage
			const saved = JSON.parse(localStorage.getItem("saved_data")) || {};

			// Create mock account entry
			const newAccount = {
				id: Date.now(), // Simple unique id
				...saved,
			};

			// Get existing accounts
			const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

			// Add new one
			accounts.push(newAccount);

			// Save back to localStorage
			localStorage.setItem("accounts", JSON.stringify(accounts));
			localStorage.setItem("active_account", String(newAccount.id));

			// Optionally clear saved_data if not needed anymore
			localStorage.removeItem("saved_data");

			// Trigger any transition or callback
			onReady?.();
		}, 2000); // 2s delay

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
