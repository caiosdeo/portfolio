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
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estagiário em Desenvolvimento de Software",
    location: "Juiz de Fora, MG",
    description:
      "Fui estagiário na Thomson Reuters por quase 2 anos, trabalhando com .NET, C# e SQL Server. Lá, eu trabalhei na resolução de bugs relatados pelos clientes e no desenvolvimento de novos recursos no sistema.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Bacharel em Ciência da Computação",
    location: "Universidade Federal de Juiz de Fora, MG",
    description:
      "Graduado recentemente em Ciência da Computação.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Curso Técnico em Informática",
    location: "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais - Campus Juiz de Fora, MG",
    description:
      "Obtive um curso técnico em Informática durante o ensino médio.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "API de Equipamentos",
    description:
      "Uma API RESTful em Django com endpoints para criação, atualização, exclusão e listagem de equipamentos. Também possui uma aplicação front-end.",
    tags: ["Django", "Javascript", "Python", "Bootstrap", "Django Rest Framework"],
    imageUrl: equipmentsApi,
    url: "https://github.com/caiosdeo/api-equipamentos"
  },
  {
    title: "Bus Card",
    description:
      "Um web app para gerenciamento de cartão de passagens de ônibus. Tem como finalidade permitir que seu usuário calcule recarga precisas e visualize o saldo de seu cartão.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Tailwind"],
    imageUrl: buscard,
    url: "https://buscard-caiosdeo.vercel.app/"
  },
  {
    title: "Posts & Comments API",
    description:
      "Uma API RESTful com endpoints para criação, atualização, exclusão e listagem de posts. Também permite a criação e exclusão de comentários nos posts.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: postsCommentsApi,
    url: "https://github.com/caiosdeo/posts-comments-api"
  },
  {
    title: "Taking notes",
    description:
      "Um aplicativo web para criar documentos. Ele usa um editor semelhante ao Notion e você pode publicar documentos na web.",
    tags: ["React", "Next.js", "Convex", "Tailwind"],
    imageUrl: takingnotesImg,
    url: "https://takingnotes.vercel.app/"
  },
  {
    title: "E-Commerce Admin",
    description:
      "O projeto de administrador é capaz de gerenciar categorias, tamanhos, cores e produtos, além de controlar várias lojas e gerar rotas de API separadas para cada uma.",
    tags: ["React", "Next.js", "Prisma", "Postgres", "Tailwind"],
    imageUrl: ecommerceadminImg,
    url: "https://github.com/caiosdeo/ecommerce-admin"
  },
  {
    title: "PC Build Monitor",
    description:
      "Um script de web scraping que obtém dados de um site de montagem de PC. Ele usa a API do Google para armazenar o preço de cada parte do PC em uma Planilha do Google.",
    tags: ["Python", "Beautiful Soup", "Google API", "Scraping"],
    imageUrl: pcbuildmonitorImg,
    url: "https://github.com/caiosdeo/pc-build-monitor"
  },

] as const;
