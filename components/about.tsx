"use client";

import React from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/use-section-in-view";

import SectionHeading from "@/components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I recently graduated with a bachelor degree in{" "}
        <span className="font-medium">Computer Science</span> with knowledge in programming
        languages, databases, and web development.{" "}
        <span className="underline">Experience in maintenance and support environment</span>,
        working on solving system bugs.{" "}
        <span className="underline">Ability to solve problems and fast learner</span>. Currently, I
        have been studying and developing <span className="font-medium">Full-stack projects</span>{" "}
        with various technologies such as{" "}
        <span className="font-medium">React, Next.js, Typescript, and Tailwind</span>. I am
        currently looking for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games,
        watching movies, and reading. I also enjoy <span className="font-medium">cooking</span>.
        Currently, my main dishes are{" "}
        <span className="font-medium">pizzas and a great barbecue</span>. I also like to go to the
        gym to stay healthy.
      </p>
    </motion.section>
  );
}
