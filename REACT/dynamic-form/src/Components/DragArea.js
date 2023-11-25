import { DragItem, DraggableItems, OverFlowEl } from "../Styles/dashboard.js";
import { Typography, IconButton } from "@mui/material";
import { dragItems } from "../Constants/DragConstants.js";
export const DragArea = () => {
  return (
    <DraggableItems justifyContent={"center"} alignItems={"center"} p={2}>
      <OverFlowEl spacing={2}>
        {dragItems?.map((item) => {
          return (
            <DragItem
              key={item.label}
              px={8}
              py={2}
              draggable
              onDragStart={(e) => {
                let object = JSON.stringify(item);
                e.dataTransfer.setData("data", object);
              }}
            >
              <Typography variant="h6" color="initial">
                {item.label}
              </Typography>
              <IconButton>{item.icon}</IconButton>
            </DragItem>
          );
        })}
      </OverFlowEl>
    </DraggableItems>
  );
};
