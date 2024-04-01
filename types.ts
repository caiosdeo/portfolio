import { links } from "@/lib/data";
import { projectsData } from "@/lib/data";

export type Project = (typeof projectsData)[number];
export type SectionName = (typeof links)[number]["name"];

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