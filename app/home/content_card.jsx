import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const ContentCard = ({ src, alt, title, brief, length }) => {
	return (
		<Card
			sx={{
				minWidth: 160,
				maxWidth: 180,
				borderRadius: 2,
				boxShadow: 1,
				overflow: "hidden",
			}}
		>
			<Box sx={{ position: "relative", width: "100%", height: 115 }}>
				<Image
					src={src}
					alt={alt}
					fill
					style={{ objectFit: "cover" }}
				/>
			</Box>
			<CardContent sx={{ padding: 1.5 }}>
				<Typography sx={{ fontWeight: "bold", fontSize: 11 }}>
					{title}
				</Typography>
				<Typography sx={{ fontSize: 11 }}>{brief}</Typography>
				<Typography sx={{ fontSize: 8 }}>{length}</Typography>
			</CardContent>
		</Card>
	);
};

export default ContentCard;
