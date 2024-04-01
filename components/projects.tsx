"use client";

import React from "react";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/use-section-in-view";

import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
