import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { ProfileCard } from "./profilecard";

export function AboutHero() {
  return (
    <Section className="min-h-[80vh] bg-[#F8F9FA] py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
        <div className="w-full md:w-1/2">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-[#F77F00] md:text-left">
            About Me
          </p>

          <h1 className="mt-3 text-center text-4xl font-extrabold leading-tight text-[#003049] sm:text-5xl md:text-left">
            Getting to Know Me:
          </h1>

          <p className="mt-6 text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left">
            I'm an Information Technology student and an aspiring web
            developer who enjoys creating modern, responsive, and
            user-friendly websites.
          </p>

          <p className="mt-4 text-center text-base leading-7 text-gray-600 sm:text-lg md:text-left">
            I enjoy learning new technologies, improving my coding skills,
            and turning ideas into practical digital experiences. I'm
            especially interested in frontend development and creating clean
            user interfaces.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <NavLink to="/contact">
              <Button>Contact Me</Button>
            </NavLink>

            <NavLink to="/">
              <Button variant="secondary">Back to Home</Button>
            </NavLink>
          </div>
        </div>

        <ProfileCard />
      </div>
    </Section>
  );
}