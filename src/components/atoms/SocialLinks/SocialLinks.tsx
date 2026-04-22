import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-2 text-[10px] uppercase font-bold tracking-widest text-[var(--text-color)]">
      <a
        href="https://twitter.com/techiepriyarnjn"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter Profile"
        className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
      >
        <Twitter size={14} aria-hidden="true" /> <span className="hidden sm:inline">Twitter</span>
      </a>
      <a
        href="https://www.linkedin.com/in/techiepriyaranjan/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
        className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
      >
        <Linkedin size={14} aria-hidden="true" /> <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        href="https://github.com/TechiePriyaRanjan"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
        className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
      >
        <Github size={14} aria-hidden="true" /> <span className="hidden sm:inline">GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/techiepriyarnjn/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Profile"
        className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
      >
        <Instagram size={14} aria-hidden="true" /> <span className="hidden sm:inline">Instagram</span>
      </a>
    </div>
  );
};

export default SocialLinks;
