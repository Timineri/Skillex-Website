import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { styled } from "@mui/system";
import Sales from "../assets/img/Sales.webp";
import Data from "../assets/img/Data.webp";
import Copywriting from "../assets/img/Copywriting.webp";
import Design from "../assets/img/Design.webp";
import "../index.css";
import SectionTwo from "./SectionTwo";

const SectionHeader = styled(Typography)({
  marginTop: "3rem",
  marginBottom: "3rem",
  textAlign: "center",
});

const Links = styled("ul")({
  display: "flex",
  margin: "0 auto",
  marginBottom: "3rem",
  textAlign: "center",
});
const LinkChild = styled("li")({
  listStyle: "none",
  marginLeft: "1.5rem",
});

const itemData = [
  {
    img: Sales,
    title: "Sales Marketing",
    duration: "4 months",
  },
  {
    img: Data,
    title: "Data Analytics",
    duration: "3 months",
  },
  {
    img: Copywriting,
    title: "Copywriting Pro",
    duration: "2 months",
  },
  {
    img: Design,
    title: "Design Art",
    duration: "4 months",
  },
];

export default function Section() {
  return (
    <Box px={8}>
      <Container>
        <Box px={20}>
          <SectionHeader variant="h4">
            Unlimited access to 100+ instructors.
          </SectionHeader>
          <Links>
            <LinkChild>All Categories</LinkChild>
            <LinkChild>entertainmenr</LinkChild>
            <LinkChild>Lifestyle</LinkChild>
            <LinkChild>Writing</LinkChild>
            <LinkChild>Business</LinkChild>
            <LinkChild>Food</LinkChild>
          </Links>
        </Box>
        <ImageList
          sx={{ width: 1000, height: 500 }}
          cols={4}
          rowHeight={164}
          borderRadius={16}
          gap={50}
          justifyContent="center"
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.duration}</Typography>
            </ImageListItem>
          ))}
        </ImageList>
        <SectionTwo />
      </Container>
    </Box>
  );
}
