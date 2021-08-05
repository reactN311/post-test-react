import CSS from "csstype";

export const listStylus: CSS.Properties = {
  maxHeight: "70vh",
  overflow: "scroll",
  border: "1px solid #deb88759",
};

export const stylusLi: React.CSSProperties = {
  minHeight: 90,
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid burlywood",
  padding: "10px 5px",
};

export const stylusUserAvatar: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default stylusLi;
