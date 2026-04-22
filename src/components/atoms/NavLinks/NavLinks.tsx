import React from 'react';

interface LinkItem {
  name: string;
  href: string;
}

interface NavLinksProps {
  links: LinkItem[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <nav className="flex gap-8 items-center uppercase text-xs font-semibold tracking-widest">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-[var(--text-color)] hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
          aria-label={`Navigate to ${link.name}`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
