/* Central icon mapping so data files stay icon-agnostic. */
import {
  FaBook,
  FaBookOpen,
  FaBrain,
  FaChalkboardUser,
  FaChartLine,
  FaCircleCheck,
  FaClipboardCheck,
  FaFilePen,
  FaGavel,
  FaGraduationCap,
  FaLandmark,
  FaLightbulb,
  FaListCheck,
  FaMagnifyingGlass,
  FaNewspaper,
  FaPenNib,
  FaScaleBalanced,
  FaStopwatch,
  FaUserGraduate,
  FaUsers,
} from 'react-icons/fa6';

/** Icons used by academy highlights + why-choose cards. */
export const highlightIcons = {
  structure: FaBookOpen,
  guidance: FaChalkboardUser,
  practice: FaClipboardCheck,
  mock: FaFilePen,
  current: FaNewspaper,
  mentoring: FaUsers,
  subject: FaBook,
  analysis: FaChartLine,
};

/** Icons used by study resources. */
export const resourceIcons = {
  concept: FaLightbulb,
  practice: FaClipboardCheck,
  mock: FaFilePen,
  revision: FaBrain,
  current: FaNewspaper,
  legal: FaScaleBalanced,
};

/** Misc shared icons. */
export const UI_ICONS = {
  check: FaCircleCheck,
  gavel: FaGavel,
  graduate: FaGraduationCap,
  landmark: FaLandmark,
  list: FaListCheck,
  magnify: FaMagnifyingGlass,
  pen: FaPenNib,
  stopwatch: FaStopwatch,
  userGraduate: FaUserGraduate,
};