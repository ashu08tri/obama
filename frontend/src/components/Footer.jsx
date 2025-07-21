import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t text-white font-serif py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-4">

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {[
            { href: "https://www.instagram.com/", icon: "ctlpkznr" },
            { href: "https://www.facebook.com/", icon: "ynvwvpsx" },
            { href: "https://www.youtube.com/", icon: "ojifxrin" },
            { href: "https://www.twitter.com/", icon: "fijfswsp" },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8"
              style={{ lineHeight: 0 }}
            >
              <lord-icon
                src={`https://cdn.lordicon.com/${icon}.json`}
                trigger="hover"
                className="w-7 h-7"
                style={{ margin: 0, padding: 0 }}
              />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-300 text-center">
          © 2025 | <Link to="/privacy" className="underline hover:text-white">Legal & Privacy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
