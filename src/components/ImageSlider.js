import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@material-ui/core";
import group from "../img/Group.png";
import group2 from "../img/Group2.png";
const text = {
  color: "#FFFFFF",
  position: "absolute",
  top: "60%",
  left: "10%",
  width: 250,
  margin: 20,
  zIndex: 1,
};
const ImageSlider = (props) => {
  const items = [
    {
      img: group,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: group2,
      description: "Hello World!",
    },
  ];
  const Item = (props) => {
    return (
      <Paper>
        <img src={props.item.img} alt="not available" />
        <p style={text}>{props.item.description}</p>
      </Paper>
    );
  };

  return (
    <Box position="absolute" top={0} right={0}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
