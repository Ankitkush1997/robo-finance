import BounceImage from "../assets/image.svg";
import Calender from "../assets/calender-image.svg";
import UserImage from "../assets/user-image.svg";
import Stopwatch from "../assets/stopwatch-image.svg";

import DownArrow from "../assets/green-down.svg";
import RedDownArrow from "../assets/red-arrow.svg";

import Question from "../assets/question-card.svg";
import BlueQuestion from "../assets/blue-question-mark.png";

export const CardsArray = [
  {
    leftTopImage: BounceImage,
    number: "42.34%",
    bottomText: "Bounce Rate",
    arrow: DownArrow,
    arrowText: "12%",
    questionMark: Question,
  },
  {
    leftTopImage: Calender,
    number: "42.34%",
    bottomText: "Pages per visit",
    arrow: "",
    arrowText: "",
    questionMark: BlueQuestion,
  },
  {
    leftTopImage: UserImage,
    number: "326.60K",
    bottomText: "Total Monthly Visit",
    arrow: RedDownArrow,
    arrowText: "2.1%",
    questionMark: "",
  },
  {
    leftTopImage: Stopwatch,
    number: "00:03:27",
    bottomText: "Avg. Visit Duration",
    arrow: RedDownArrow,
    arrowText: "2.4%",
    questionMark: "",
  },
];
