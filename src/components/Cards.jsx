// import * as React from "react";
// import { styled } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";

// import CardHeader from "@mui/material/CardHeader";
// // import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// // import CardActions from "@mui/material/CardActions";
// // import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// // import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
import { CardData } from "./CardData";
import CardInfo from "./Card";

import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function RecipeReviewCard() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <>
      <Typography variant="h4" textAlign="center" marginTop="2em">
        What our customer say.
      </Typography>
      <Card>
        {CardData.map(({ Text, Image, Name, Position }) => {
          return (
            <CardInfo
              key={Name}
              Text={Text}
              Image={Image}
              Name={Name}
              Position={Position}
            />
          );
        })}
      </Card>
      <Icon>
        <Box>
          <ArrowBackIcon sx={{ marginRight: "2em" }} />
          <ArrowForwardIcon />
        </Box>
      </Icon>
    </>
  );
}

const Card = styled("div")({
  display: "flex",
  gap: "2rem",
  marginTop: "3rem",
  justifyContent: "center",
});

const Icon = styled("Container")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5em",
});
