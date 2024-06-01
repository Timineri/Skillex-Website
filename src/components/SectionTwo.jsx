import { Box, Typography } from "@mui/material";
import Working from "../assets/img/working2.jpg";
import { styled } from "@mui/system";
import SectionDataChild from "./SectionData";

const Contain = styled("Container")({
  display: "flex",
  justifyContent: "space-between",
  gap: 200,
});

const WorkingContent = styled("Working")({
  display: "flex",
  justifyContent: "space-between",
});

const Img = styled("img")({
  width: "900px",
  height: "400px",
});

export default function SectionTwo() {
  return (
    <Box>
      <Contain>
        <Typography variant="h4" sx={{ width: 450 }}>
          Get the skills you need for a job that is in demand.
        </Typography>
        <Typography variant="body2" sx={{ width: 450 }}>
          The modern labor market dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </Typography>
      </Contain>
      <WorkingContent>
        <SectionDataChild />
        <Img src={Working} alt="" />
      </WorkingContent>
    </Box>
  );
}
