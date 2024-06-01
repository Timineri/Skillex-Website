import React from "react";
import { styled } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";

// import PropTypes from "prop-types";

export default function CardInfo({ Text, Image, Name, Position }) {
  return (
    <Information>
      <MainCard sx={{ maxWidth: 270 }}>
        <CardContent>
          <Typography variant="p" color="text.secondary" fontSize="17px">
            {Text}
          </Typography>
        </CardContent>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{Image}</Avatar>}
          title={Name}
          subheader={Position}
        />
      </MainCard>
    </Information>
  );
}

const Information = styled("div")({
  display: "flex",
  //   background: "#FFFFFF",
  height: "13em",
});

const MainCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "1.5rem",
  border: "none",
});
