// sports blacktop images
import selectbaseball from "./assets/selectbaseball.jpg";
import selectbasketball from "./assets/selectbasketball.jpg";
import selectfootball from "./assets/selectfootball.jpg";
import selectgolf from "./assets/selectgolf.jpg";
import selecthockey from "./assets/selecthockey.jpg";
import selectsoccer from "./assets/selectsoccer.jpg";
import selecttennis from "./assets/selecttennis.jpg";

// sports environment images
import basketballcourt from "./assets/basketballcourt.jpg";
import footballfield from "./assets/footballfield.jpg";
import baseballfield from "./assets/baseballfield.jpg";
import hockeyrink from "./assets/hockeyrink.jpg";
import soccerfield from "./assets/soccerfield.jpg";
import tenniscourt from "./assets/tenniscourt.jpg";
import golfcourse from "./assets/golfcourse.jpg";

// sports balls

import basketball from "./assets/basketball.webp";
import football from "./assets/football.webp";
import baseball from "./assets/baseball.webp";
import puck from "./assets/puck.webp";
import soccer from "./assets/soccer.webp";
import tennis from "./assets/tennis.webp";
import golf from "./assets/golf.webp";

const selectsportpics = [
  {
    image: selectbasketball,
    title: "Basketball",
    environment: basketballcourt,
    ball: basketball,
    association: "NBA",
  },
  {
    image: selectfootball,
    title: "Football",
    environment: footballfield,
    ball: football,
    association: "NFL",
  },
  {
    image: selectbaseball,
    title: "Baseball",
    environment: baseballfield,
    ball: baseball,
    association: "MLB",
  },
  {
    image: selecthockey,
    title: "Hockey",
    environment: hockeyrink,
    ball: puck,
    association: "NHL",
  },
  {
    image: selectsoccer,
    title: "Soccer",
    environment: soccerfield,
    ball: soccer,
    association: "MLS",
  },
  {
    image: selecttennis,
    title: "Tennis",
    environment: tenniscourt,
    ball: tennis,
    association: "ATP/WTA",
  },
  {
    image: selectgolf,
    title: "Golf",
    environment: golfcourse,
    ball: golf,
    association: "PGA",
  },
];

const playerIdMap = {
  "lebron james": "2544",
  "michael jordan": "893",
  "kareem abdul-jabbar": "76003",
  "magic johnson": "77142",
  "larry bird": "1449",
  "tim duncan": "1495",
  "kobe bryant": "977",
  "shaquille o'neal": "406",
  "hakeem olajuwon": "165",
  "wilt chamberlain": "78497",
  "bill russell": "78049",
  "stephen curry": "201939",
  "kevin durant": "201142",
  "giannis antetokounmpo": "203507",
  "nikola jokic": "203999",
  "joel embiid": "203954",
  "luka doncic": "1629029",
  "jayson tatum": "1628369",
  "devin booker": "1626164",
  "jimmy butler": "202710",
  "kawhi leonard": "202695",
  "paul george": "202331",
  "damian lillard": "203081",
  "russell westbrook": "201566",
  "james harden": "201935",
  "anthony davis": "203076",
  "dirk nowitzki": "1717",
  "dwyane wade": "2548",
  "chris bosh": "2547",
  "paul pierce": "1718",
  "ray allen": "951",
  "kevin garnett": "708",
  "allen iverson": "947",
  "tracy mcgrady": "1503",
  "vince carter": "1713",
  "yao ming": "2397",
  "tony parker": "2225",
  "manu ginobili": "1938",
  "scottie pippen": "937",
  "charles barkley": "787",
  "karl malone": "252",
  "john stockton": "304",
  "isiah thomas": "101108",
  "clyde drexler": "17",
  "patrick ewing": "121",
  "david robinson": "764",
  "dennis rodman": "23",
  "ja morant": "1629630",
  "zion williamson": "1629627",
  "anthony edwards": "1630162",
  "shai gilgeous-alexander": "1628983",
  "trae young": "1629027",
  "donovan mitchell": "1628378",
  "jaylen brown": "1627759",
  "bam adebayo": "1628389",
  "deaaron fox": "1628368",
  "lamelo ball": "1630163",
  "tyrese haliburton": "1630169",
};

export { selectsportpics, playerIdMap };