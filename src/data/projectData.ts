export interface Project {
  name: string;
  description: string;
  techStacks: string[];
  img?: string;
  liveLink: string;
  githubLink: string;
}

const projectData: Project[] = [
  {
    name: "Poker Booking",
    description:
      "A web app that provides convenient booking functionality and essential information about the business.",
    techStacks: [
      "./assets/images/techIcons/Bootstrap.png",
      "./assets/images/techIcons/Sass.png",
      "./assets/images/techIcons/Express.png",
      "./assets/images/techIcons/Firestore.png",
    ],
    img: "./assets/images/projectThumbs/Poker-Booking.png",
    liveLink: "https://omegapoker.ca",
    githubLink: "https://github.com/tin0312/pocker-club",
  },
  {
    name: "Poker Admin",
    description:
      "A web app that helps manage the waitlist and keep customers updated in real-time with Twilio messaging and live position updates.",
    techStacks: [
      "./assets/images/techIcons/MUI.png",
      "./assets/images/techIcons/React.png",
      "./assets/images/techIcons/Firestore.png",
    ],
    img: "./assets/images/projectThumbs/Poker-Admin.png",
    liveLink: "https://omega-poker-admin.netlify.app/",
    githubLink: "https://github.com/tin0312/omega-poker-admin",
  },
  {
    name: "E-commerce",
    description:
      "A fictional e-commerce platform with user authentication and categorized product displays to help customers find products more easily.",
    techStacks: [
      "./assets/images/techIcons/Tailwind.png",
      "./assets/images/techIcons/NextJS.png",
      "./assets/images/techIcons/Firestore.png",
    ],
    img: "./assets/images/projectThumbs/E-Commerce.png",
    liveLink: "https://audiophilecommerce.netlify.app/",
    githubLink: "https://github.com/tin0312/audiophile-ecommerce",
  },
  {
    name: "URL Shortener",
    description: "Shortening lengthy URLs with integration of the shrtlnk API and enabling users to copy up to 3 shortended URLs to use immediately",
    techStacks: [
      "./assets/images/techIcons/React.png",
      "./assets/images/techIcons/TypeScript.png",
      "./assets/images/techIcons/Tailwind.png",
      "./assets/images/techIcons/Sass.png",
    ],
    img: "./assets/images/projectThumbs/URL-Shortener.png",
    liveLink: "https://yourshorturls.netlify.app",
    githubLink: "https://github.com/tin0312/shortly-landing-page",
  },
  {
    name: "To-Do App",
    description:
      "Manage tasks effectively with drag-and-drop functionality and views for All, Active, and Completed tasks.",
    techStacks: [
      "./assets/images/techIcons/React.png",
      "./assets/images/techIcons/TypeScript.png",
      "./assets/images/techIcons/Tailwind.png",
      "./assets/images/techIcons/Sass.png",
    ],
    img: "./assets/images/projectThumbs/To-Do-App.png",
    liveLink: "https://shouldo.netlify.app/",
    githubLink: "https://github.com/tin0312/to-do-app",
  },
];

export default projectData;
