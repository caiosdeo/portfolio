"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { Project as ProjectType } from "@/types";
import { useSectionInView } from "@/hooks/use-section-in-view";

import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";

export default function Projects({
  locale
}: {
  locale: string
}) {
  const { ref } = useSectionInView(locale === 'br' ? "Projetos" : "Projects");

  const t = useTranslations('ProjectsSection');

  let projectsData;

  if (locale === 'br') {
    projectsData = require("@/lib/data-br").projectsData;
  } else  {
    projectsData = require("@/lib/data").projectsData;
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('heading')}</SectionHeading>
      <div>
        {projectsData.map((project: ProjectType, index: number) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
