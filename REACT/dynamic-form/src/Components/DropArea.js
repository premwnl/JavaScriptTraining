import React, { useState, useRef } from "react";
import { OverFlowEl, MainArea, OptionItem } from "../Styles/dashboard.js";
import {
  Stack,
  TextField,
  IconButton,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export const DropArea = () => {
  const [drop, setDrop] = useState([]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let _drop = [...drop];

    const draggedItemContent = _drop.splice(dragItem.current, 1);
    _drop.splice(dragOverItem.current, 0, ...draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setDrop([..._drop]);
  };

  const handleRemove = (item) => {
    let filtered = drop.filter((data) => data != item);
    setDrop([...filtered]);
  };

  return (
    <MainArea justifyContent={"start"} alignItems={"center"} p={2}>
      <OverFlowEl
        spacing={4}
        p={4}
        width={1}
        height={1}
        onDragEnter={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          let data = e.dataTransfer.getData("data");
          data && setDrop((prev) => [...prev, JSON.parse(data)]);
        }}
      >
        {drop?.map((item, index) => {
          return (
            <Stack
              direction={"row"}
              spacing={2}
              key={index}
              draggable
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <Stack>
                <TextField variant="filled" label={item.label} value={""} />

                <OptionItem
                  direction={"row"}
                  spacing={2}
                  onClick={() => alert(item.label)}
                >
                  <Typography color="#2B6777">Add Option</Typography>
                  <IconButton>
                    <LibraryAddIcon />
                  </IconButton>
                </OptionItem>
              </Stack>
              <FormControlLabel
                label="Required"
                control={
                  <Checkbox
                    checked={item.isRequired}
                    onChange={() => {
                      item.isRequired = !item.isRequired;
                      setDrop([...drop]);
                    }}
                  />
                }
              />
              <IconButton onClick={() => handleRemove(item)}>
                <BackspaceIcon />
              </IconButton>
            </Stack>
          );
        })}
      </OverFlowEl>
    </MainArea>
  );
};
