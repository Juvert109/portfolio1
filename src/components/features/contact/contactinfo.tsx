import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

export function ContactInfo() {
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/juvert.genabe.2025" },
    { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@budohh2?_r=1&_t=ZS-98yzThvtKMu" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/jvertyy/" },
  ];

  return (
    <div className="flex flex-col justify-between lg:w-5/12">
      <div>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-[#003049] sm:text-5xl">
          Send us a <br /> message
        </h1>

        <p className="mt-6 font-serif text-sm leading-relaxed text-[#003049]/70">
          You can also use the feedback form below to reach out to us directly
          through our website.
        </p>

      </div>

      {/* Social Links */}
      <div className="mt-12 flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCBF49] text-[#003049] transition-all hover:bg-[#F77F00] hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}