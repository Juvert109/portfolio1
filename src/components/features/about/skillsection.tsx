import { Section } from "@/components/common/section";
import { SkillCard } from "./skillcard";

const TECH_STACK = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Git & GitHub",
  "Responsive Design",
];

export function SkillsSection() {
  return (
    <Section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F77F00]">
            What I Do
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#003049] sm:text-4xl">
            My Skills & Interests
          </h2>

          {/* Core Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#003049]/5 px-4 py-1.5 text-xs font-semibold text-[#003049] transition-all duration-200 hover:bg-[#003049] hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <SkillCard
            icon="</>"
            title="Frontend Development"
            description="Developing fast, interactive, and responsive web applications using modern tools like React, TypeScript, and Tailwind CSS."
            iconBgColor="bg-[#D62828]"
          />

          <SkillCard
            icon="UI"
            title="UI/UX Implementation"
            description="Translating design concepts and wireframes into clean, accessible, and user-centric interfaces."
            iconBgColor="bg-[#F77F00]"
          />

          <SkillCard
            icon="IT"
            title="Continuous Growth"
            description="Exploring new frameworks, modern architectural patterns, and industry best practices to refine my craftsmanship."
            iconBgColor="bg-[#FCBF49]"
            iconTextColor="text-[#003049]"
          />
        </div>
      </div>
    </Section>
  );
}