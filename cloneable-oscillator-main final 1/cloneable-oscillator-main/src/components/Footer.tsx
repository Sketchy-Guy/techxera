import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-8">
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Techfest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;