import { Box } from "@mui/material";
import { NavBar } from "./NavBar";

export const Layout = ({ children, setOpen, location }) => {
  return (
    <>
      <NavBar setOpen={setOpen} location={location} />
      <Box sx={{ minHeight: "100vh", paddingTop: "8vh" }}>{children}</Box>
    </>
  );
};
