import React from "react";
import Iphone13MiniFrame from "./frame";
import Image from "next/image";
import { Typography, Button, Container, Box, Link } from "@mui/material";
import splash1 from "./splash1.svg";

const App = () => {
  return (
    <Iphone13MiniFrame>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFD2C7",
        }}
      >
        <Image src={splash1} alt="Splash Screen 1" />
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginLeft: 2,
            marginRight: 10,
            marginBottom: 2,
          }}
        >
          Welcome to your personal health tracker
        </Typography>
        <Button
          fullWidth
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Get Started
        </Button>
        <Typography
          sx={{
            fontSize: "12px",
            paddingY: 2,
          }}
        >
          Already have an account?{" "}
          <Link href="#" underline="none">
            Sign in
          </Link>
          .
        </Typography>
      </Container>
    </Iphone13MiniFrame>
  );
};

export default App;
