import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

"Hello is this you? How are you doing? have tyou loked into the tiume? only 8 mins left are you're still workuing ion tyhjios? you need to be working on the this as qwell right?"

export const DATA = {
  name: "John",
  initials: "CWH",
  url: "https://codewithharshad.com",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "I'm a full-stack developer that loves building products and web apps that can impact millions of lives.",
  summary:
    "A self-taught software developer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.",
  avatarUrl: "/you.png",
  arrow: "/arrow.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
       GitHub: {
        name: "GitHub",
        url: "https://github.com/codewithharshad",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/codewithharshad",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/codewithharshad",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@codewithharshad",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stock Mobile App",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/work1.svg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Built a mobile app using react native and typescript.",
    },
    {
      company: "NetMeal Web App",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/work2.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Developed a web app using nextjs and postgresql stack.",
    },
    {
      company: "Sasha Web app",
      href: "#",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/work3.svg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed ecommerce app for beauty and fashion brand.",
    },
    {
      company: "Football Game",
      href: "#",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/work4.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Developed a gaming platform for the football lovers.",
    },
     
  ],
  
  projects: [
    {
      title: "Project 01",
      href: "https://google.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Share more about your project work here. Share more about your project work here. Share more about your project work here.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://google.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://portfolio-5r1.pages.dev/1221.mp4",
    },
    {
      title: "Project 02",
      href: "https://google.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Share more about your project work here. Share more about your project work here. Share more about your project work here.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Magic UI",
      ],
      links: [
        {
          type: "App",
          href: "https://google.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://portfolio-5r1.pages.dev/1221.mp4",
    },
    {
      title: "Project 03",
      href: "https://google.com",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Share more about your project work here. Share more about your project work here. Share more about your project work here.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Shadcn UI",
        "Stripe",
 
      ],
      links: [
        {
          type: "Website",
          href: "https://google.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://portfolio-5r1.pages.dev/1221.mp4",
    },
    {
      title: "Project 04",
      href: "https://google.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Share more about your project work here. Share more about your project work here. Share more about your project work here.",
      technologies: [
        "React",
        "PostgreSQL",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://portfolio-5r1.pages.dev/1221.mp4",
    },
  ],
} as const;
