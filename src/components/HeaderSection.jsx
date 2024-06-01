// import React from "react";
const images = [writing, writing2, business];
import writing from "../assets/img/writing-course-img.webp";
import writing2 from "../assets/img/writing-course2-img.webp";
import business from "../assets/img/business-course-img.webp";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ImageHover from "./ImageHover";
import Sections from "./Sections";

const Section = styled("Box")({
  display: "flex",
  alignItems: "center",
  gap: "5rem",
});

const Typo = styled("Typography")({
  fontWeight: "700px",
});

export default function HeaderSection() {
  return (
    <Container>
      <Section>
        <Typo>
          <Typography variant="h2">Watch.</Typography>
          <Typography variant="h2">Learn.</Typography>
          <Typography variant="h2">Grow.</Typography>
        </Typo>
        <ImageHover images={images} />
      </Section>
      <Sections />
    </Container>
  );
}
