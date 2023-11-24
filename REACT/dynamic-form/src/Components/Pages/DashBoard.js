import { DragArea } from "../DragArea.js";
import "../../Styles/dashboard.js";
import { DropArea } from "../DropArea.js";
import { MobileArea } from "../MobileArea.js";
import { Layout } from "../Layout/Layout.js";
import { Stack, Typography } from "@mui/material";
export const DashBoard = ({ folderName }) => {
  return (
    <Layout location={"dashboard"}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: 40 }}
      >
        <Typography variant="h5" component={"div"} color="initial">
          {folderName}
        </Typography>
      </Stack>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ height: 828, bgcolor: "#52AB98" }}
        direction={"row"}
        p={6}
        spacing={6}
      >
        <DragArea />
        <DropArea />
        <MobileArea />
      </Stack>
    </Layout>
  );
};
