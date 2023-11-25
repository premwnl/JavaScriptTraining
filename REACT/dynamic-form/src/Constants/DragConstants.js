import TextFieldsIcon from "@mui/icons-material/TextFields";
import PinIcon from "@mui/icons-material/Pin";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AudioFileIcon from "@mui/icons-material/AudioFile";

export const nameConstant = {
  name: "",
  hasvalue: true,
};

export const dragItems = [
  {
    label: "Text Field",
    type: "text",
    icon: <TextFieldsIcon />,
    isRequired: false,
  },
  { label: "Number", type: "number", icon: <PinIcon />, isRequired: false },
  {
    label: "Check List",
    type: "checkbox",
    icon: <CheckBoxIcon />,
    hasOptions: true,
    isRequired: false,
  },
  {
    label: "Radio",
    type: "radio",
    icon: <RadioButtonCheckedIcon />,
    hasOptions: true,
    isRequired: false,
  },
  {
    label: "Drop Down",
    type: "select",
    icon: <ArrowDropDownCircleIcon />,
    hasOptions: true,
    isRequired: false,
  },
  {
    label: "Date",
    type: "date",
    icon: <CalendarMonthIcon />,
    isRequired: false,
  },
  {
    label: "File Upload",
    type: "file",
    icon: <UploadFileIcon />,
    isRequired: false,
  },
  {
    label: "Date Time",
    type: "time",
    icon: <MoreTimeIcon />,
    isRequired: false,
  },
  {
    label: "Multi line",
    type: "textArea",
    icon: <FormatLineSpacingIcon />,
    isRequired: false,
  },
  {
    label: "Image",
    type: "image",
    icon: <AddPhotoAlternateIcon />,
    hasUpload: true,
    isRequired: false,
  },
  {
    label: "Video",
    type: "video",
    icon: <VideoCallIcon />,
    hasUpload: true,
    isRequired: false,
  },
  {
    label: "Audio",
    type: "audio",
    icon: <AudioFileIcon />,
    hasUpload: true,
    isRequired: false,
  },
];
