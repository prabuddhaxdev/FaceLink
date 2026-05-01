import Link from "next/link";
import { Video, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark-1 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2 mb-6 group"
            >
              <div className="bg-brand p-2 rounded-xl group-hover:scale-105 transition-transform">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                FaceLink
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Connect face to face with anyone, anywhere in the world.
              High-quality video conferencing for modern teams.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://x.com/prabuddhaxdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 text-gray-400 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/prabuddhaxdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 text-gray-400 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prabuddhaxdev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 text-gray-400 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#features"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://prabuddhaxdev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand hover:translate-x-1 inline-block transition-transform"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FaceLink. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>for remote teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
