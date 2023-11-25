import { Stack, styled, Button } from "@mui/material";

export const Notch = styled(Stack)({
  width: "160px",
  height: "26px",
  borderBottomRightRadius: "100%",
  borderBottomLeftRadius: "100%",
  background: "#000",
  transform: "translateY(-16px)",
  flexDirection: "row",
  borderBottom: "#9b9b9b 2px solid",
  borderLeft: "#9b9b9b 2px solid",
  boxShadow: "outlet 0 0 20px gray",
});

export const NotchSpeaker = styled(Stack)({
  width: "60px",
  height: "10px",
  borderRadius: "10px",
  background: "gray",
  transform: "translate(48px, 3px)",
  border: "#9b9b9b 2px solid",
});

export const NotchIcon = styled(Stack)({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  background: "gray",
  transform: "translate(58px, 3px)",
  border: "#9b9b9b 2px solid",
});

export const Mobile = styled(Stack)({
  height: 740,
  width: "24%",
  background: "antiquewhite",
  border: "10px solid black",
  borderRadius: "36px",
  boxShadow: "inset 0 0 16px gray",
  outline: "2px solid gray",
});

export const MainArea = styled(Stack)({
  height: 640,
  width: "52%",
  borderRadius: "8px",
  background: "#9FF5B9",
});

export const DraggableItems = styled(Stack)({
  height: 740,
  width: "24%",
});

export const DragItem = styled(Stack)({
  width: "100%",
  background: "#fff",
  minHeight: "56px",
  borderRadius: "8px",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row !important",
});

export const OverFlowEl = styled(Stack)({
  overflow: "auto",
  width: "100%",
  alignItems: "center",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const OptionItem = styled(Stack)({
  width: "100%",
  height: "36px",
  justifyContent: "center",
  alignItems: "center",
  background: "#52AB98",
  fontWeight: "bold",
  borderBottomRightRadius: "4px",
  borderBottomLeftRadius: "4px",
});

export const ButtonItem = styled(Button)({
  background: "#2B6777",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  "&:hover": {
    background: "#2B6777",
  },
});
