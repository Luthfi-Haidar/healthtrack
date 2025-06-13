import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

export const metadata = {
	title: "HealthTrack",
	description: "Track your health today!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
