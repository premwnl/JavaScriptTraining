import { Layout } from "../Layout/Layout.js";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import { nameConstant } from "../../Constants/DragConstants.js";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ setFolderName }) => {
  const navigate = useNavigate();
  const regEx = new RegExp(/^[a-zA-Z ]*$/);
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(nameConstant);

  //handle submit function
  const handleSubmit = () => {
    if (!fileName.name || !regEx.test(fileName.name)) {
      setFileName({ name: "", hasvalue: false });
    } else {
      setFolderName(fileName.name);
      navigate("/dashboard");
    }
  };

  //handle close function
  const handleClose = () => {
    setOpen(false);
    setFileName(nameConstant);
  };
  return (
    <Layout setOpen={setOpen} location={"home"}>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          marginBottom: "100px",
        }}
      >
        <DialogTitle mx={2} fontWeight={"bold"}>
          Create Form
          <IconButton sx={{ float: "right" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mb={2} mx={2}>
            <TextField
              variant="filled"
              size="large"
              label="Form Name"
              required
              value={fileName.name}
              onChange={(e) =>
                setFileName({
                  name: e.target.value,
                  hasvalue: true,
                })
              }
              error={!fileName.hasvalue || !regEx.test(fileName.name)}
              helperText={
                !fileName.hasvalue
                  ? "Please Enter File Name"
                  : !regEx.test(fileName.name)
                  ? "Please Enter Only Alphabets"
                  : " "
              }
            />
            <TextField
              label="Description"
              variant="filled"
              multiline
              rows={4}
              value={""}
            />
          </Stack>
          <Stack m={2} width={100}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit()}
            >
              CREATE
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
