// import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BoltIcon from "@mui/icons-material/Bolt";
import { Box, Typography } from "@mui/material";

const SectionData = [
  {
    icon: <TipsAndUpdatesIcon />,
    Header: "Leadership",
    Text: "Fully committed to the success company",
  },
  {
    icon: <PsychologyIcon />,
    Header: "Responsibility",
    Text: "Employees will always be my top priority",
  },
  {
    icon: <BoltIcon />,
    Header: "Flexibility",
    Text: "The ability to switch is an important skill",
  },
];

export default function SectionDataChild() {
  return (
    <Box>
      {SectionData.map((data) => {
        return (
          <Box key={data.Header}>
            <Box>{data.icon}</Box>
            <Box>
              <Box>
                <Typography>{data.Header}</Typography>
                <Typography>{data.Text}</Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
