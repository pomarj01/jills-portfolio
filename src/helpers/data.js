export const headTags = {
  title: "Jill Pomares | Front End Developer",
  website: "http:/jillpomares.com",
  meta: {
    description:
      "Portfolio built using Gatsby to showcase previous and current projects",
    keywords: [
      "front-end",
      "developer",
      "designer",
      "document",
      "html",
      "css",
      "reactjs",
      "javascript",
      "ui",
      "ux",
      "tags",
    ],
  },
};

export const personalData = {
  development: {
    description:
      "I'm a Front-End Developer who has a passion for creating intuitive user interfaces and experiences.",
    description_extra:
      "My focus area in the last few years has been with React and aiming to be skilled in back-end with Node.js.",
    project: {
      type: "Front-End Developer",
      company: "Workray",
      date: "2016-2020",
      info: "A software tool that manages all your jobs and tracks the progress of your applications in one place.",
    },
  },
  design: {
    description:
      "I've recently taken interest in web designing as well as iconography. The illustration below and in the rest of the site showcase this recent skills I've developed using mainly Figma.",
    project: {
      type: "Side projects",
      date: "2020-Present",
      list: [
        "Waitron UK",
        "FoodBooklet",
        "SimplySkin",
        "HeatTech",
        "Icon designs",
      ],
    },
  },
};

export const projectData = [
  {
    title: "Waitron UK",
    description:
      "An ordering system web app aimed to be used by local pubs. Designed both admin and user side of the app. The admin side was targeted on tablet devices while for the customer side was on mobile.",
    background: "#ddebf4",
    tags: ["Design", "Figma"],
    tagsColor: "#adc8d9",
    media: ["waitron_dashboard"],
    mediaSize: "30rem",
    shapes: [
      {
        name: "oblongs",
        styles: {
          left: "0%",
          top: "0%",
          width: "5%",
        },
      },
      {
        name: "eclipses",
        styles: {
          right: "0%",
          bottom: "10%",
          width: "4%",
        },
      },
    ],
  },
  {
    title: "FoodBooklet",
    description:
      "A cooking booklet web app where you can organise all your recipes as well as plan them by creating shopping list. Designed using Figma and developed using MERN stack.",
    background: "#E5F0EF",
    tags: [
      "Design",
      "Development",
      "Figma",
      "ReactJS",
      "MongoDB",
      "Express",
      "Node.js",
    ],
    tagsColor: "#ADCCC9",
    media: ["fb_landing", "fb_register"],
    mediaSize: "20rem",
    shapes: [
      {
        name: "big_waves",
        styles: {
          left: "0%",
          top: "0%",
          width: "12%",
        },
      },
    ],
  },
  {
    title: "HeatTech",
    description:
      "A simple and straight forward website for a plumbing and repair services company which only provides information, fetaures and contact details of the company. Only created designs for mobile view using Figma.",
    background: "#EEDFDC",
    tags: ["Design", "Figma"],
    tagsColor: "#DDC1BB",
    media: ["heattech", "heattech_2"],
    mediaSize: "260px",
    shapes: [
      {
        name: "double_waves",
        styles: {
          left: "16%",
          top: "25%",
          width: "5%",
        },
      },
      {
        name: "square_dots",
        styles: {
          right: "18%",
          top: "2%",
          width: "4%",
        },
      },
      {
        name: "filled_oblongs",
        styles: {
          right: "0%",
          bottom: "20%",
          width: "6%",
        },
      },
    ],
  },
  {
    title: "Icon Designs",
    description:
      "A collection of icons ranging from outline to filled icons. These icons were created using the easiest styles such as basic shapes and lines and incoroporated colours using Figma.",
    background: "#F6EDD3",
    tags: ["Design", "Figma"],
    tagsColor: "#E5CB80",
    media: [
      "monitor_dark",
      "palette_dark",
      "pen_dark",
      "vector_dark",
      "wireframe_dark",
      "code_dark",
      "js_dark",
      "cloud_dark",
      "ab_testing_dark",
      "github_dark",
      "planet",
      "paint_roller",
      "spaceship",
      "letterJ",
      "letterP",
    ],
    mediaSize: "64px",
    mediaWrapperStyles: {
      flexWrap: "wrap",
      margin: "1rem 0",
      maxWidth: "450px",
      height: "280px",
      justifyContent: "space-around",
      alignContent: "space-around",
    },
    imageStyles: {
      boxShadow: "none",
      display: "flex",
      width: "16%",
    },
    mediaBackground: "#fff",
    shapes: [
      {
        name: "triangle_circle",
        styles: {
          left: "16%",
          top: "0%",
        },
      },
      {
        name: "circledLines_dots",
        styles: {
          right: "17%",
          bottom: "3%",
          width: "7%",
        },
      },
    ],
  },
];

