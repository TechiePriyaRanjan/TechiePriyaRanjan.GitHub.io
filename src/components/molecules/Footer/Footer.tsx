
const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-end shrink-0">
      <div className="hidden md:block" />
      <div className="text-right w-full md:w-auto mt-8 md:mt-0">
        <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest">
          Inspired from{' '}
          <a
            href="https://travisneilson.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-color)] opacity-70 hover:opacity-100 hover:underline transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-[2px]"
          >
            Travis Neilson&apos;s portfolio
          </a>
        </p>
        <p className="text-[10px] mt-1 text-[var(--muted)] tracking-widest uppercase">
          PriyaRanjan.DEV © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
