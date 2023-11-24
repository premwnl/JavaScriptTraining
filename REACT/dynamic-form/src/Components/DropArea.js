import { Stack } from "@mui/material";
import { OverFlowEl, MainArea } from "../Styles/dashboard.js";

export const DropArea = () => {
  return (
    <MainArea justifyContent={"start"} alignItems={"center"} p={2}>
      <OverFlowEl spacing={6} p={6}>
        <Stack>hii</Stack>
        <Stack>hii</Stack>
        <Stack>hii</Stack>
      </OverFlowEl>
    </MainArea>
  );
};
