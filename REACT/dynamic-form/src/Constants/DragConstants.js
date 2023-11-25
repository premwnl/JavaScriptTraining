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
    value: "",
  },
  {
    label: "Number",
    type: "number",
    icon: <PinIcon />,
    isRequired: false,
    value: "",
  },
  {
    label: "Check List",
    type: "checkbox",
    icon: <CheckBoxIcon />,
    hasOptions: true,
    isRequired: false,
    value: "",
  },
  {
    label: "Radio",
    type: "radio",
    icon: <RadioButtonCheckedIcon />,
    hasOptions: true,
    isRequired: false,
    value: "",
  },
  {
    label: "Drop Down",
    type: "select",
    icon: <ArrowDropDownCircleIcon />,
    hasOptions: true,
    isRequired: false,
    value: "",
  },
  {
    label: "Date",
    type: "date",
    icon: <CalendarMonthIcon />,
    isRequired: false,
    value: "",
  },
  {
    label: "File Upload",
    type: "file",
    icon: <UploadFileIcon />,
    isRequired: false,
    value: "",
  },
  {
    label: "Date Time",
    type: "time",
    icon: <MoreTimeIcon />,
    isRequired: false,
    value: "",
  },
  {
    label: "Multi line",
    type: "textArea",
    icon: <FormatLineSpacingIcon />,
    isRequired: false,
    value: "",
  },
  {
    label: "Image",
    type: "image",
    icon: <AddPhotoAlternateIcon />,
    hasUpload: true,
    accept: "image/*",
    isRequired: false,
    value: "",
  },
  {
    label: "Video",
    type: "video",
    icon: <VideoCallIcon />,
    hasUpload: true,
    accept: "video/*",
    isRequired: false,
    value: "",
  },
  {
    label: "Audio",
    type: "audio",
    icon: <AudioFileIcon />,
    hasUpload: true,
    accept: "audio/*",
    isRequired: false,
    value: "",
  },
];
