import { experiencesData, links } from "@/lib/data";
import { projectsData } from "@/lib/data";

import { experiencesData as experiencesDataBr, links as linksBr } from "@/lib/data-br";
import { projectsData as projectsDataBr } from "@/lib/data-br";

export type Experience = (typeof experiencesData)[number] | (typeof experiencesDataBr)[number];

export type Project = (typeof projectsData)[number] | (typeof projectsDataBr)[number];

export type Section = (typeof links)[number] | (typeof linksBr)[number];
export type SectionName = (typeof links)[number]["name"] | (typeof linksBr)[number]["name"];

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type LocaleProps = {
  params: {locale: string};
};