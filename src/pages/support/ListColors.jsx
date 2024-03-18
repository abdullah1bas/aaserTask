import React from "react";

const ListColors = ({ children, colors }) => {
  const colorList = colors.map((el) =>
    React.cloneElement(
      children,
      { key: el.id, ss: { backgroundColor: el.color, borderColor: el.color }, text: 'here' },
      "here Text"
    )
  );
  return <div>{colorList}</div>;
};

export default ListColors;
