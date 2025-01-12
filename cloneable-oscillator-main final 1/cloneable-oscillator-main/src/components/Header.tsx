import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="/" 
              className="flex items-center space-x-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              <img 
                src="/lovable-uploads/3953beb9-a371-4490-b2cc-c7ae72a606f7.png"
                alt="Techfest Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-white">TECHFEST</span>
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation('/events')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Events
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation('/competitions')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Competitions
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation('/workshops')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Workshops
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation('/initiatives')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Initiatives
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                onClick={() => handleNavigation('/register')}
                className="bg-primary hover:bg-primary/90"
              >
                Register Now
              </Button>
            </motion.div>
          </nav>
          
          <button 
            className="md:hidden text-white"
            onClick={() => {/* TODO: Add mobile menu handler */}}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;