import {
	AssignmentInd,
	GppGood,
	Info,
	KeyboardArrowRight,
	MonitorHeart,
	Person,
	Settings,
	Support,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const ProfileTab = () => {
	const router = useRouter();
	const active = localStorage.getItem("active_account");
	let email = "anonymous";
	if (active) {
		const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
		const found = accounts.find((item) => String(item.id) === active);
		if (found) email = found.email;
	}

	const logout = () => {
		localStorage.removeItem("active_account");
		router.push("/");
	};

	return (
		<Container
			sx={{
				paddingY: 2,
			}}
		>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<Person />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Your personal details
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<MonitorHeart />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Manage your tracker
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<AssignmentInd />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Your data
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<Settings />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Your settings
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<GppGood />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Simply legal
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<Support />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					Get help
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				sx={{ paddingY: 1 }}
			>
				<Info />
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						flexGrow: 1,
					}}
				>
					About us
				</Typography>
				<KeyboardArrowRight />
			</Stack>
			<Paper
				sx={{
					width: "100%",
					backgroundColor: "#E9E9E9",
					paddingY: 2,
				}}
			>
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 1,
						textAlign: "center",
					}}
				>
					Logged in as
				</Typography>

				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 2,
						textAlign: "center",
					}}
				>
					{email}
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						variant="contained"
						onClick={logout}
					>
						Log out
					</Button>
				</Box>
			</Paper>
		</Container>
	);
};

export default ProfileTab;
