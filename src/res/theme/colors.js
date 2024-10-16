const colors = {
  primaryColors: {
    orange: "#F27930",
    woodSmoke: "#171A21",
    white: "#FFFFFF",
    black: "#000000",
    green: "#099A4F",
    lightGreen: "#B3E796",
    lighterGreen: "#CEEBDC",
    grey: "#EEEEEF",
    warmIvory:"#FFF4D9",
    naturalGray:"#2E2E2E",
    lingtShadeBlue:"#F3F6FE",
    lightCream:"#FFF4CE50",
    yellow23:"#FFDE32",
    abc:"#FF7A00",
    vibrantRed:"#C7222A",
    darkGray:"#4C4C4C",
    lightShadeGray:"#F7F7F7",
    grayGreen:"#79807D"
  },
  secondaryColors: {
    summerSky: "#3597EC",
    irishGreen: "#099A4F",
    cyberYellow: "#ffd639",
    punch: "#D93025",
    midnightBlue: "#143172",
  },
  darkNeutrals: {
    n900: "#252931",
    n800: "#343842",
    n700: "#424752",
    n600: "#505662",
    n500: "#0000000D",
  },
  midNeutrals: {
    n500: "#626772",
    n400: "#737881",
    n300: "#858991",
    n200: "#969AA1",
  },
  lightNeutrals: {
    n100: "#A8ABB1",
    n90: "#b9bbc0",
    n80: "#CBCCD0",
    n70: "#DCDDE0",
    n60: "#EEEEEF",
    selfTeam: "#3597EC",
    lightGray:"#E6E6E6"
  },

  textShadowColor: {
    smartNudge: "rgba(0, 0, 0, 0.12)",
  },

  gradient: {
    primary: {
      jaffa: ["#D44300", "#F27930"],
      coal: ["#252931", "#505662"],
      picton: ["#046FCC", "#3597EC"],
      white: ["#ffffff", "#ffffff"],
    },
    secondary: {
      malibu: ["#6da1fc", "#4cd9fe"],
      lavender: ["#926EF7", "#819CF6"],
      pacific: ["#21A2D0", "#B3E796"],
      pinkLace: ["#C4DDFE", "#FED8F7"],
      shalimar: ["#C7FFF0", "#faffb8"],
      saturn: ["#143A72", "#8A1E45" - "#F27930"],
    },
    others: {
      chequesCollectedNo: ["#5393F8", "#F27930"],
      surrenderRequest: [
        "rgba(98, 186, 248, 0.24)",
        "rgba(73, 122, 248, 0.24)",
      ],
      expandedCard: ["rgba(255, 255, 255, 0.00)", "rgba(235, 245, 253, 0.50)"],

      //below colors are named randomly, below need to be named acc to glide
      incentiveCard: ["#046FCC", "#3597EC"],
      incentiveCardgreen: ["#06733A", "#9FCE85"],
      teamCardgradient: ["#F7D037", "#FEE47C"],
      screenHeaderColor: [
        "rgba(196, 221, 254, 0.12)",
        "rgba(254, 216, 247, 0.12)",
      ],
      appHeaderGradient: [
        "rgba(254, 242, 234, 0.50)",
        "rgba(235, 245, 253, 0.50)",
      ],
      calendarBackgroundOpacity: "rgba(0, 0, 0, 0.2)",
      admApplicationTracker: "rgba(53, 151, 236, 0.05)",
      admSearch: "rgba(238, 238, 238, 0.25)",
      admPolicyList: "rgba(238, 238, 239, 0.50)",
      disableDateColor: "#898991",
      modalBackground: "rgba(23, 26, 33, 0.60)",
      campaignGradient: [
        "rgba(146, 110, 247, 0.08)",
        "rgba(121, 175, 255, 0.08)",
        "#ffffff",
      ],
    },
    campaign: [
      ["rgba(181, 64, 11, 0.12)", "rgba(70, 18, 112, 0.12)"],
      ["rgba(199, 255, 240, 0.50)", "rgba(250, 255, 184, 0.50)"],
      ["rgba(4, 111, 204, 0.20)", "rgba(53, 151, 236, 0.20)"],
    ],
  },
  Extended_Palette: {
    Orange: {
      orange: "#F27930",
      o800: "#F59459",
      o600: "#F7AF83",
      o400: "#FAC9AC",
      o300: "#fbd7c1",
      o200: "#fce4d6",
      o100: "#FEF2EA",
    },
    cyberYellow: {
      cyberYellow: "#ffd639",
      cy800: "#ffde61",
      cy600: "#FFE688",
      cy400: "#ffefb0",
      cy300: "#fff3c4",
      cy200: "#fff7d7",
      cy100: "#fffbeb",
    },
    irishGreen: {
      ig100: "#E6F5ED",
    },
    summerSky: {
      summerSky: "#3597ec",
      ss800: "#5DACF0",
      ss600: "#86c1f4",
      ss400: "#aed5f7",
      ss300: "#c2e0f9",
      ss200: "#D7EAFB",
      ss100: "#EBF5FD",
    },
    Punch: {
      punch: "#D93025",
      p800: "#E15951",
      p600: "#E8837C",
      p400: "#f0aca8",
      p300: "#f4c1be",
      p200: "#f7d6d3",
      p100: "#FBEAE9",
    },
    malachite: {
      malachite: "#099A4F",
      m800: "#3aae72",
      m600: "#6BC295",
      m400: "#9dd7b9",
      m300: "#b5e1ca",
      m200: "#ceebdc",
      m100: "#e6f5ed",
    },
    midnightBlue: {
      midnightBlue: "#143A72",
      mb800: "#43618e",
      mb600: "#7289AA",
      mb400: "#A1b0c7",
      mb300: "#B9C4D5",
      mb200: "#D0D8E3",
      mb100: "#E8EBF1",
    },
  },
  Gradient: {
    sizzler: ["#143A72", "#5E2727", "#F27930"],
    smartNudge: [
      ["#06733A", "#9FCE85"],
      ["#046FCC", "#3597EC"],
      ["#926EF7", "#79AFFF"],
      ["#E53935", "#E35D5B"],
    ],
  },
  black: "#000000",
  barYellow: "#F7CE31",
  circleGreen: "#46AE7D",
  textOrange: "#FF7F33",
  lineBackground: "#D9D9D9",

  rgba: {
    neutralsDark: "rgba(232,235,241,0.50)",
    attendanceModal: "rgba(0, 0, 0, 0.50)",
    modalShadow: "rgba(80, 86, 98, 0.12)",
    shadowColorcard: "rgba(80, 86, 98, 0.20)",
    grayBorderColor: "rgba(215, 215, 215, 0.73)",
    cardBackground: "rgba(232, 235, 241, 0.40)",
    quickLinkBG: "rgba(255, 255, 255, 0.8)",
    borderContainer: "rgba(217, 217, 217, 0.6)",
    blueLight: "rgba(33, 162, 208, 0.20)",
    greenLight: "rgba(179, 231, 150, 0.20)",
    modaltransparentBGColor: "rgba(0, 0, 0, 0.10)",
    cardBlue: "rgba(196, 221, 254, 0.50)",
    cardPink: "rgba(254, 216, 247, 0.50)",
    filterBackground: "rgba(238, 238, 238, 0.5)",
    completedChart: "rgba(230,245,237,0.50)",
  },
  ToastGradient: {
    toast: [
      "rgba(50, 88, 144, 1)",
      "rgba(124, 69, 69, 1)",
      "rgba(255, 151, 78, 1)",
    ],
  },
  extraColors: {
    circleColor: ["#21A2D0", "#46AE7D", "#F7D037", "#143A72", "#EE2B66"],
    purple: "#5655AE",
  },
  contactProfileCircleColors: [
    "#21A2D0",
    "#46AE7D",
    "#F7D037",
    "#143A72",
    "#EE2B66",
  ],
};

export default colors;
