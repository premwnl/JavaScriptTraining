import { Stack } from "@mui/material";
import {
  Notch,
  NotchIcon,
  NotchSpeaker,
  Mobile,
  OverFlowEl,
} from "../Styles/dashboard.js";
export const MobileArea = ({}) => {
  return (
    <Mobile justifyContent={"start"} alignItems={"center"} p={2}>
      <Notch>
        <NotchSpeaker />
        <NotchIcon />
      </Notch>
      <OverFlowEl spacing={6} p={6}>
        <Stack>hii</Stack>
        <Stack>hii</Stack>
        <Stack>hii</Stack>
      </OverFlowEl>
    </Mobile>
  );
};
