import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import takingnotesImg from "@/public/taking-notes.png";
import pcbuildmonitorImg from "@/public/pc-build-monitor.png";
import ecommerceadminImg from "@/public/e-commerce-admin.png";
import postsCommentsApi from "@/public/post-comments-api.png";
import buscard from "@/public/buscard.png";
import equipmentsApi from "@/public/equipments-api.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern in Software Development",
    location: "Juiz de Fora, MG",
    description:
      "I was an intern for Thomson Reuters for almost 2 years, working with .NET, C#, and SQL Server. There I worked at solving bugs reported by customers and developing new features in the system.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Bachelor of Computer Science",
    location: "Universidade Federal de Juiz de Fora, MG",
    description:
      "Recent graduate in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Associate Degree in IT",
    location: "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais - Campus Juiz de Fora, MG",
    description:
      "I got an associate degree in IT while in high school.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Equipments API",
    description:
      "A Django RESTful API with endpoints for equipments creation, update, delete and listing. It has an front-end application as well.",
      tags: ["Django", "Javascript", "Python", "Bootstrap", "Django Rest Framework"],
    imageUrl: equipmentsApi,
    url: "https://github.com/caiosdeo/api-equipamentos"
  },
  {
    title: "Bus Card",
    description:
      "A web app for managing bus ticket cards. Its purpose is enabling the user to calculate accurate credit recharges and check their balance.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Tailwind"],
    imageUrl: buscard,
    url: "https://buscard-caiosdeo.vercel.app/"
  },
  {
    title: "Posts & Comments API",
    description:
      "A RESTful API with endpoints for posts creation, update, delete and listing. As well as comments creation and deletion on posts.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: postsCommentsApi,
    url: "https://github.com/caiosdeo/posts-comments-api"
  },
  {
    title: "Taking notes",
    description:
      "A public web app for creating documents. It uses a notion-like editor and you can publish documents on the web.",
    tags: ["React", "Next.js", "Convex", "Tailwind"],
    imageUrl: takingnotesImg,
    url: "https://takingnotes.vercel.app/"
  },
  {
    title: "E-Commerce Admin",
    description:
      "This admin project is capable of managing categories, sizes, colors, and products, as well as controlling multiple stores and generating separate API routes for each.",
    tags: ["React", "Next.js", "Prisma", "Postgres", "Tailwind"],
    imageUrl: ecommerceadminImg,
    url: "https://github.com/caiosdeo/ecommerce-admin"
  },
  {
    title: "PC Build Monitor",
    description:
      "A web scraping script that get data from a pc builder website. It uses Google API to store the price of each pc part in a Google Spreadsheet.",
    tags: ["Python", "Beautiful Soup", "Google API", "Scraping"],
    imageUrl: pcbuildmonitorImg,
    url: "https://github.com/caiosdeo/pc-build-monitor"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".NET",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Convex",
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Scraping",
] as const;