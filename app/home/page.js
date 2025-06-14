"use client";

import Iphone13MiniFrame from "../frame";
import {
	Container,
	AppBar,
	Toolbar,
	Typography,
	BottomNavigationAction,
	BottomNavigation,
	Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { AccountCircleOutlined, Search } from "@mui/icons-material";
import HomeTab from "./home_tab";
import React from "react";
import SearchTab from "./search_tab";
import ProfileTab from "./profile_tab";

const Home = () => {
	const [tabIndex, setTabIndex] = React.useState(0);

	const tabs = [<HomeTab />, <SearchTab />, <ProfileTab />];

	return (
		<Iphone13MiniFrame>
			<AppBar
				position="static"
				sx={{
					backgroundColor: "#EEEEEE",
					height: 60,
				}}
			>
				<Container>
					<Toolbar disableGutters>
						<Typography
							sx={{
								fontWeight: "bold",
								fontSize: 16,
								color: "black",
							}}
						>
							HealthTrack
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<Box
				sx={{
					maxHeight: "calc(100% - 120px)",
					overflowY: "auto",
					display: "flex",
					flex: 1,
				}}
			>
				{tabs[tabIndex]}
			</Box>

			<Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
				<BottomNavigation
					showLabels
					value={tabIndex}
					onChange={(event, newValue) => {
						setTabIndex(newValue);
					}}
				>
					<BottomNavigationAction
						label="Home"
						icon={<HomeIcon />}
					/>
					<BottomNavigationAction
						label="Search"
						icon={<Search />}
					/>
					<BottomNavigationAction
						label="Profile"
						icon={<AccountCircleOutlined />}
					/>
				</BottomNavigation>
			</Box>
		</Iphone13MiniFrame>
	);
};

export default Home;
