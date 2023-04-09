import {
  backend,
  bookarchive,
  creator,
  crud,
  css,
  figma,
  git,
  html,
  javascript,
  jwt,
  lifecycle,
  material,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  school,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  typescript,
  unique,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogging",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Material Ui",
    icon: material,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Unique Shop",
    description:
      "This is a digital shop based ecommerce site,Here user can buy digital electronics stuffs..Email and Google login system implemented via Firebase.There has different dashboard for user and admin.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: unique,
    livedemo_link: "https://unique-online-shop.web.app/",
    source_code_link: "https://github.com/coderSabbirr/uniqueshop-",
  },
  {
    name: "Book archive",
    description:
      "The project is an online book archive that provides access to a diverse collection of books in electronic format. Users can browse and read books from various genres, including classics, contemporary literature ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bookarchive,
    source_code_link: "https://github.com/coderSabbirr/book-library",
  },
  {
    name: "INTERNATIONAL SCHOOL",
    description:
      "Online based school website. Offers very kind of course for kids .Various type of blogs which mainly contains smart parenting guidelines.Every page on a static website has to be built as a separate entity ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link:
      "https://github.com/coderSabbirr/INTERNATIONAL-SCHOOL-SYSTEM",
  },
];
const blogs = [
  {
    name: "CRUD Operations",
    description:
      " CRUD (stands for Create, Read, Update and Delete, and sometimes Construct, Retrieve, Update, and Destroy) is a way of working with data in persistent storage. CRUD is four main functions associated with operations performed in the database on data create, read,...",
    tags: [
      {
        name: "CRUD Operations",
        color: "blue-text-gradient",
      },
    ],
    image: crud,
    livedemo_link: "https://unique-online-shop.web.app/",
    source_code_link:
      "https://nahidhasansabbir.medium.com/crud-operations-6c398c5e491",
  },
  {
    name: "React Component Lifecycle",
    description:
      "You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth,and death. ....",
    tags: [
      {
        name: "React_Component_Lifecycle",
        color: "blue-text-gradient",
      },
    ],
    image: lifecycle,
    source_code_link:
      "https://nahidhasansabbir.medium.com/react-component-lifecycle-b76c5e0a123e",
  },
  {
    name: "JWT(JSON Web Tokens)",
    description:
      " JSON web token (JWT), pronounced “jot”, is an open standard (RFC7519) that defines a compact and self-contained way for securely transmitting information between parties to a JSON object. Again,JWT is a standard, meaning that all JWTs are tokens, but not alltokens ...",
    tags: [
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: jwt,
    source_code_link:
      "https://nahidhasansabbir.medium.com/jwt-json-web-tokens-12b9b4bb3ff8",
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };
