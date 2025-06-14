import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";

const Iphone13MiniFrame = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#fff",
				padding: 2,
			}}
		>
			<Paper
				elevation={10}
				sx={{
					width: 375,
					height: 812,
					borderRadius: "40px",
					overflow: "hidden",
					position: "relative",
					backgroundColor: "#000",
					display: "flex",
					flexDirection: "column",
					border: "8px solid #000",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: "50%",
						transform: "translateX(-50%)",
						width: 172,
						height: 32,
						backgroundColor: "#000",
						borderBottomLeftRadius: 15,
						borderBottomRightRadius: 15,
						zIndex: 3,
					}}
				/>

				<Box
					sx={{
						height: 44,
						backgroundColor: "#faaa96",
						paddingLeft: 3,
						paddingRight: 2,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: "0.75rem",
						zIndex: 2,
					}}
				>
					<Typography fontSize="1rem">9:41</Typography>
					<Box sx={{ display: "flex", gap: 0.5 }}>
						<SignalCellular4BarIcon fontSize="small" />
						<WifiIcon fontSize="small" />
						<BatteryFullIcon fontSize="small" />
					</Box>
				</Box>

				<Box
					sx={{
						flex: 1,
						backgroundColor: "#fff",
						overflowY: "auto",
						height: "100%",
						position: "relative",
						zIndex: 1,
					}}
				>
					{children}
				</Box>

				<Box
					sx={{
						height: 34,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#fff",
					}}
				>
					<Box
						sx={{
							width: 135,
							height: 5,
							borderRadius: 3,
							backgroundColor: "#ccc",
						}}
					/>
				</Box>
			</Paper>
		</Box>
	);
};

export default Iphone13MiniFrame;
