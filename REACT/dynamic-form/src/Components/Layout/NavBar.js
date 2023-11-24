import React from "react";
import { Stack, Typography, IconButton, Button } from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const NavButton = styled(Button)({
  color: "white",
  width: "100px",
  height: "40px",
});

export const NavBar = ({ setOpen, location }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{ minHeight: "6vh" }}
      justifyContent={"space-between"}
      width={1}
      direction={"row"}
      p={2}
      bgcolor={"#9FF5B9"}
      position={"fixed"}
    >
      <Typography
        variant="h5"
        component={"div"}
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        color="initial"
        fontWeight={"bold"}
      >
        DYNAMIC FORM - PREM
      </Typography>
      {location === "home" ? (
        <Stack bgcolor={"#52AB98"}>
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
            <AddchartIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack direction={"row"} spacing={2}>
          <NavButton
            sx={{
              background: "#2B6777",
              "&:hover": {
                background: "#2B6777",
              },
            }}
            m={2}
          >
            SAVE
          </NavButton>
          <NavButton
            m={2}
            sx={{
              background: "#52AB98",
              "&:hover": {
                background: "#52AB98",
              },
            }}
            onClick={() => navigate("/")}
          >
            CANCEL
          </NavButton>
        </Stack>
      )}
    </Stack>
  );
};
