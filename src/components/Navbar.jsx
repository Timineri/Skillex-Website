// import React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import logo from "../assets/img/logo.svg";
import "@fontsource/roboto/400.css";

import { styled } from "@mui/system";
const Nav = styled("Box")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "2rem",
  marginTop: "2rem",
  fontFamily: "sans-serif",
  position: "static",
});

const Links = styled("Box")({
  display: "flex",
  marginRight: "300px",
});
const LinkChild = styled("li")({
  listStyle: "none",
  marginLeft: "2rem",
});

export default function Navbar() {
  return (
    <Box>
      <Container>
        <Nav>
          <img src={logo} alt="" />
          {/* Loop */}
          <Links>
            <LinkChild>FInd Passion</LinkChild>
            <LinkChild>Categories</LinkChild>
            <LinkChild>Skills</LinkChild>
            <LinkChild>Customer</LinkChild>
          </Links>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                textTransform: "none",
                color: "black",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "black",
                borderRadius: "2em",
                textTransform: "none",
                padding: "0.5rem 2.5rem",
              }}
            >
              Free Trial
            </Button>
          </Stack>
        </Nav>
      </Container>
    </Box>
  );
}
