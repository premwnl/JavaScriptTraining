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
  { label: "Text Field", type: "text", icon: <TextFieldsIcon /> },
  { label: "Number", type: "number", icon: <PinIcon /> },
  { label: "Check List", type: "checkbox", icon: <CheckBoxIcon /> },
  { label: "Radio", type: "radio", icon: <RadioButtonCheckedIcon /> },
  { label: "Drop Down", type: "select", icon: <ArrowDropDownCircleIcon /> },
  { label: "Date", type: "date", icon: <CalendarMonthIcon /> },
  { label: "File Upload", type: "file", icon: <UploadFileIcon /> },
  { label: "Date Time", type: "time", icon: <MoreTimeIcon /> },
  { label: "Multi line", type: "textArea", icon: <FormatLineSpacingIcon /> },
  { label: "Image", type: "image", icon: <AddPhotoAlternateIcon /> },
  { label: "Video", type: "video", icon: <VideoCallIcon /> },
  { label: "Audio", type: "audio", icon: <AudioFileIcon /> },
];
