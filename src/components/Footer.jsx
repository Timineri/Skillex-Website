import React from "react";
import logo from "../assets/img/logo.svg";
import Halo from "../assets/img/Halo.svg";
import Facebook from "../assets/img/Facebook.svg";
import Behance from "../assets/img/Behance.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Instagram from "../assets/img/Instagram.svg";
import Ball from "../assets/img/Ball.svg";
import { styled } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Footer() {
  return (
    <Box>
      <Container>
        <FooterData>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <Links>
              <LinkChild>FInd Passion</LinkChild>
              <LinkChild>Categories</LinkChild>
              <LinkChild>Skills</LinkChild>
              <LinkChild>Customer</LinkChild>
            </Links>
          </div>
          <div>
            <Typography>Join Our Community</Typography>
            <form noValidate autoComplete="off">
              <FormControl
                sx={{ width: "25ch", marginTop: "1em", marginBottom: "3em" }}
              >
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </form>
          </div>
        </FooterData>
        <FooterSubData>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Halo} alt="" />
            <Typography>2021 Halo Lab. All rights reserved</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Img src={Behance} alt="" />
            <Img src={Facebook} alt="" />
            <Img src={LinkedIn} alt="" />
            <Img src={Instagram} alt="" />
            <Img src={Ball} alt="" />
          </Box>
        </FooterSubData>
      </Container>
      <FooterBottomText>
        Like & Follow from you. New free to use projects from us.
      </FooterBottomText>
    </Box>
  );
}

const Links = styled("ul")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3em",
  width: "100%",
});
const LinkChild = styled("li")({
  listStyle: "none",
});

const FooterData = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "5em",
  borderBottom: "1px Solid #918b8a",
});

const FooterSubData = styled("Box")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2em",
});

const Img = styled("img")({
  border: "1px solid #918b8a",
  padding: "0.3em",
});

const FooterBottomText = styled("Typography")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: "1em",
  marginTop: "1em",
  background: "#1E1E2F",
});
