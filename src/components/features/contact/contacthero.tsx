import { ContactInfo } from "./contactinfo";
import { ContactForm } from "./contactform";

export function ContactHero() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] w-full items-center bg-white px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-12 lg:flex-row lg:gap-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}