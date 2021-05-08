import React from "react";
const MainTitle = (props) => {
  return (
    <div className="title">
      <h1>{props.title} </h1>
      <p style={{ marginTop: 40 }}>{props.description}</p>
    </div>
  );
};
MainTitle.defaultProps = {
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export default MainTitle;
