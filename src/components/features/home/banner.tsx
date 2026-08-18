import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Profile } from "./profile";

export function HomePageBannerSection() {
  return (
    <Section className="min-h-[80vh] bg-[#F8F9FA] py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">

        {/* Profile - Left Side */}
        <Profile />

        {/* Content - Right Side */}
        <div className="w-full md:w-1/2 md:max-w-2xl">

          {/* Heading */}
          <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-[#003049] sm:text-5xl lg:text-6xl md:text-left">
            Hi, I'm Juvert
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-center text-xl font-semibold text-[#F77F00] sm:text-2xl md:text-left">
            IT Student & Aspiring Web Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-gray-600 sm:text-lg md:mx-0 md:text-left">
            I'm passionate about creating clean, responsive, and user-friendly
            websites. I enjoy learning modern web technologies and turning
            creative ideas into functional digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 pt-7 sm:flex-row md:items-start">
            <NavLink to="/about">
              <Button>
                About Me
              </Button>
            </NavLink>

            <NavLink to="/contact">
              <Button variant="secondary">
                Contact Me
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Section>
  );
}